# api/services/hybrid_service.py

from typing import Dict, List
import pandas as pd

from api.services.recommend_service import recommend_crops
from api.services.prediction_service import predict_yield, optimize_inputs
from api.core.model_loader import crop_models   # contains all yield-enabled crops


# -------------------------------------------------------
# Helper request object for prediction & optimization
# -------------------------------------------------------
class _YieldReqObj:
    def __init__(self, state, crop, area, fertilizer, pesticide, rainfall):
        self.state = state
        self.crop = crop
        self.area = area
        self.fertilizer = fertilizer
        self.pesticide = pesticide
        self.rainfall = rainfall


# -------------------------------------------------------
# Hybrid Advisory Service (Option A)
# -------------------------------------------------------
def hybrid_advisory(req_dict: Dict, top_n_candidates: int = 5, top_k_return: int = 3) -> Dict:

    # 1) Soil-based crop recommendation
    soil_input = {
        "N": req_dict["N"], "P": req_dict["P"], "K": req_dict["K"],
        "temperature": req_dict["temperature"],
        "humidity": req_dict["humidity"],
        "ph": req_dict["ph"],
        "rainfall": req_dict["rainfall"]
    }

    recommended = recommend_crops(soil_input)

    # Sort by probability and take top-N
    recommended = sorted(recommended, key=lambda x: x["probability"], reverse=True)[:top_n_candidates]

    if not recommended:
        return {"error": "No recommended crops found!"}

    # -------------------------------------------------------
    # 2) Filter ONLY crops that are available in yield models
    # -------------------------------------------------------
    yield_enabled_crops = []

    for c in recommended:
        crop_name = c["crop"]

        # Match exact key in crop_models (case-insensitive)
        match = next((m for m in crop_models.keys() if m.lower() == crop_name.lower()), None)

        if match:
            yield_enabled_crops.append({
                "crop": match,
                "probability": c["probability"]
            })

    if not yield_enabled_crops:
    # Return empty but valid response (to satisfy FastAPI schema)
        return {
            "recommended_crops": [],
            "best_crop": None,
            "note": "No recommended crops matched your yield prediction models."
        }


    # -------------------------------------------------------
    # 3) Predict + Optimize for each yield-enabled crop
    # -------------------------------------------------------
    evaluations = []

    for item in yield_enabled_crops:
        crop_name = item["crop"]
        prob = item["probability"]

        # Build request object
        yield_req = _YieldReqObj(
            state=req_dict["state"],
            crop=crop_name,
            area=req_dict["area"],
            fertilizer=req_dict["fertilizer"],
            pesticide=req_dict["pesticide"],
            rainfall=req_dict["rainfall"]
        )

        # Yield prediction
        pred_yield, total_prod = predict_yield(yield_req)

        # Optimization
        opt = optimize_inputs(yield_req)

        optimized_yield = opt["optimized_yield_ton_per_hectare"]
        optimized_total = opt["optimized_total_production"]

        evaluations.append({
            "crop": crop_name,
            "probability": prob,
            "predicted_yield": pred_yield,
            "predicted_total": total_prod,
            "optimized_yield": optimized_yield,
            "optimized_total": optimized_total,
            "recommended_fert": opt["recommended_fert_kg_ha"],
            "recommended_pest": opt["recommended_pest_kg_ha"],
        })

    # -------------------------------------------------------
    # 4) Compute hybrid score
    # -------------------------------------------------------
    max_opt = max(e["optimized_yield"] for e in evaluations)

    for e in evaluations:
        norm_yield = e["optimized_yield"] / max_opt if max_opt > 0 else 0
        e["combined_score"] = round(e["probability"] * norm_yield, 6)

    # Sort by score
    evaluations = sorted(evaluations, key=lambda x: x["combined_score"], reverse=True)

    top_k = evaluations[:top_k_return]

    return {
        "recommended_crops": [
            {
                "crop": e["crop"],
                "recommend_probability": round(e["probability"], 6),
                "predicted_yield_ton_per_hectare": round(e["predicted_yield"], 6),
                "total_production_ton": round(e["predicted_total"], 6),
                "optimized_yield_ton_per_hectare": round(e["optimized_yield"], 6),
                "optimized_total_production": round(e["optimized_total"], 6),
                "recommended_fert_kg_ha": round(e["recommended_fert"], 3),
                "recommended_pest_kg_ha": round(e["recommended_pest"], 3),
                "combined_score": e["combined_score"]
            }
            for e in top_k
        ],
        "best_crop": top_k[0] if top_k else None,
        "note": "Combined score = recommendation_probability × (optimized_yield / max_optimized_yield_among_candidates)"
    }

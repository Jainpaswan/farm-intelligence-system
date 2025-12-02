import pandas as pd
from api.core.model_loader import get_model, crop_models

def get_available_crops():
    return list(crop_models.keys())


def predict_yield(req):
    model = get_model(req.crop)

    X = pd.DataFrame([{
        "State": req.state,
        "Area": req.area,
        "Fert_kg_ha": req.fertilizer,
        "Pest_kg_ha": req.pesticide,
        "Annual_Rainfall": req.rainfall
    }])

    pred = model.predict(X)[0]
    total = pred * req.area

    return float(pred), float(total)


def optimize_inputs(req):
    model = get_model(req.crop)

    best_yield = -999
    best_fert = None
    best_pest = None

    for fert in range(10, 251, 5):
        for pest in [round(i * 0.1, 2) for i in range(1, 50)]:

            X = pd.DataFrame([{
                "State": req.state,
                "Area": req.area,
                "Fert_kg_ha": fert,
                "Pest_kg_ha": pest,
                "Annual_Rainfall": req.rainfall
            }])

            pred = model.predict(X)[0]

            if pred > best_yield:
                best_yield = pred
                best_fert = fert
                best_pest = pest

    optimized_total = best_yield * req.area

    return {
        "optimized_yield_ton_per_hectare": float(best_yield),
        "optimized_total_production": float(optimized_total),
        "recommended_fert_kg_ha": float(best_fert),
        "recommended_pest_kg_ha": float(best_pest),
    }

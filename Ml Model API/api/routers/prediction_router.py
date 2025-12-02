from fastapi import APIRouter
from api.schemas.prediction_schema import YieldRequest
from api.services.prediction_service import (
    predict_yield,
    optimize_inputs,
    get_available_crops
)

router = APIRouter(prefix="/api", tags=["Prediction"])

@router.get("/crops")
def crops():
    return {"available_crops": get_available_crops()}

@router.post("/prediction")
def prediction(req: YieldRequest):
    pred, total = predict_yield(req)
    optimized = optimize_inputs(req)

    return {
        "predicted_yield_ton_per_hectare": pred,
        "total_production_ton": total,
        **optimized
    }

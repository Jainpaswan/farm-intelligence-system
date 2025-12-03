from fastapi import APIRouter
from api.schemas.prediction_schema import YieldRequest
from api.services.prediction_service import predict_yield, optimize_inputs
from api.services.ai_service import generate_yield_advice

router = APIRouter(prefix="/api", tags=["Yield Prediction"])

@router.post("/prediction")
def prediction(req: YieldRequest):
    pred, total = predict_yield(req)
    opt = optimize_inputs(req)

    ai_explanation = generate_yield_advice(
        req.crop, pred, opt, req
    )

    return {
        "prediction": {
            "predicted_yield_ton_per_hectare": pred,
            "total_production_ton": total
        },
        "optimization": opt,
        "ai_advice": ai_explanation
    }

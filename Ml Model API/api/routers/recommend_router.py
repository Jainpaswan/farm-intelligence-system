from fastapi import APIRouter
from api.schemas.recommend_schema import CropRecommendRequest
from api.services.recommend_service import recommend_crops

router = APIRouter(prefix="/api", tags=["Crop Recommendation"])

@router.post("/recommend")
def recommend(req: CropRecommendRequest):
    result = recommend_crops(req.dict())
    return {"top_crops": result}

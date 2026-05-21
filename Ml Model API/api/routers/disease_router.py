from fastapi import APIRouter, UploadFile, File
from api.services.disease_service import detect_disease
from api.schemas.disease_schema import DiseaseResponse

disease_router = APIRouter(
    prefix="/disease",
    tags=["Disease Detection"]
)

@disease_router.post("/predict", response_model=DiseaseResponse)
async def disease_detect(file: UploadFile = File(...)):

    result = detect_disease(file.file)

    return result
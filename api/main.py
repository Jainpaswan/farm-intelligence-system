from fastapi import FastAPI
from api.routers.prediction_router import router as prediction_router

app = FastAPI(
    title="FarmPredict API",
    description="Crop-wise yield prediction and optimization backend",
    version="1.0"
)

app.include_router(prediction_router)

@app.get("/health")
def health_check():
    return {"status": "OK"}

from fastapi import FastAPI
from api.routers.prediction_router import router as prediction_router
# from api.routers.recommend_router import router as recommend_router
from api.routers.recommend_router import router as recommend_router
from api.routers.hybrid_router import router as hybrid_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="FarmPredict API",
    description="Crop-wise yield prediction and optimization backend",
    version="1.0"
)

app.include_router(prediction_router)
app.include_router(recommend_router)
app.include_router(hybrid_router)

@app.get("/health")
def health_check():
    return {"status": "OK"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
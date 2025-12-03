# api/schemas/hybrid_schema.py

from pydantic import BaseModel
from typing import Optional, List


# ---------------------------------------
# Hybrid Input
# ---------------------------------------
class HybridRequest(BaseModel):
    # soil inputs
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float

    # field inputs for yield prediction
    state: str
    area: float
    fertilizer: Optional[float] = 0.0
    pesticide: Optional[float] = 0.0

    # runtime options
    top_n_candidates: Optional[int] = 5
    top_k_return: Optional[int] = 3


# ---------------------------------------
# Hybrid Output: per-crop detail
# ---------------------------------------
class CropHybridDetail(BaseModel):
    crop: str
    recommend_probability: float
    predicted_yield_ton_per_hectare: float
    total_production_ton: float
    optimized_yield_ton_per_hectare: float
    optimized_total_production: float
    recommended_fert_kg_ha: float
    recommended_pest_kg_ha: float
    combined_score: float


# ---------------------------------------
# Hybrid Response
# ---------------------------------------
class HybridResponse(BaseModel):
    recommended_crops: List[CropHybridDetail]
    best_crop: Optional[CropHybridDetail] = None   # <-- FIXED HERE
    note: Optional[str] = None

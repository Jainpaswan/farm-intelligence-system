# api/routers/hybrid_router.py
from fastapi import APIRouter, HTTPException
from api.schemas.hybrid_schema import HybridRequest, HybridResponse
from api.services.hybrid_service import hybrid_advisory

router = APIRouter(prefix="/api", tags=["Hybrid Advisory"])

@router.post("/hybrid-advisory", response_model=HybridResponse)
def hybrid_advisory_api(req: HybridRequest):
    try:
        req_dict = req.dict()
        result = hybrid_advisory(
            req_dict,
            top_n_candidates = int(req.top_n_candidates or 5),
            top_k_return = int(req.top_k_return or 3)
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

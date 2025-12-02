from pydantic import BaseModel

class YieldRequest(BaseModel):
    state: str
    crop: str
    area: float
    fertilizer: float
    pesticide: float
    rainfall: float

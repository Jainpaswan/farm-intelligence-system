from pydantic import BaseModel


class DiseaseResponse(BaseModel):
    prediction: str
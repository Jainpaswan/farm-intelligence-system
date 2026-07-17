from pydantic import BaseModel

class TranslateRequest(BaseModel):
    text: str
    target_lang: str
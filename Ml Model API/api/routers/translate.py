from fastapi import APIRouter
from api.schemas.translate import TranslateRequest
from api.services.translation import translate_text

router = APIRouter(
    prefix="/translate",
    tags=["Translation"]
)

@router.post("/")
def translate(req: TranslateRequest):
    return translate_text(req.text, req.target_lang)
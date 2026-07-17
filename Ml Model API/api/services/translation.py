import os
import requests
from dotenv import load_dotenv

load_dotenv()

DEEPL_API_KEY = os.getenv("DEEPL_API_KEY")

def translate_text(text: str, target_lang: str):
    url = "https://api-free.deepl.com/v2/translate"

    headers = {
        "Authorization": f"DeepL-Auth-Key {DEEPL_API_KEY}",
        "Content-Type": "application/json",
    }

    payload = {
        "text": [text],
        "target_lang": target_lang.upper(),
    }

    response = requests.post(
        url,
        headers=headers,
        json=payload
    )

    if response.status_code != 200:
        return {"error": response.text}

    return response.json()
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_yield_advice(crop, predicted_yield, optimized, req):
    prompt = f"""
    You are an agricultural expert. Provide simple, clear advice for an Indian farmer.

    Crop: {crop}
    Predicted Yield: {predicted_yield} tons/ha
    Optimized Yield: {optimized.get("optimized_yield_ton_per_hectare")}
    Recommended Fertilizer: {optimized.get("recommended_fert_kg_ha")} kg/ha
    Recommended Pesticide: {optimized.get("recommended_pest_kg_ha")} kg/ha

    Input Conditions:
    State: {req.state}
    Area: {req.area} hectares
    Fertilizer used: {req.fertilizer} kg/ha
    Pesticide used: {req.pesticide} kg/ha
    Rainfall: {req.rainfall} mm

    Provide:
    1. Whether this yield is good for this crop and state  
    2. What factors likely increased yield  
    3. What factors decreased yield  
    4. What the farmer should adjust next season  
    5. Suggest an alternate crop if conditions are better suited for another crop  
    """

    response = model.generate_content(prompt)
    # -----------------------------
    # GOVERNMENT SCHEMES SECTION
    # -----------------------------
    govt_schemes = """
    
    6. Government Schemes You Should Know:

    ⭐ **PMKSY – Pradhan Mantri Krishi Sinchai Yojana**
    - Drip/sprinkler irrigation subsidy (55–75%).
    - Helps in water-scarce states like Rajasthan, Maharashtra, MP, Gujarat.

    ⭐ **PMFBY – Pradhan Mantri Fasal Bima Yojana**
    - Crop insurance with cheap premium.
    - Protects against drought, pest attack, rainfall shortage.

    ⭐ **Soil Health Card Scheme**
    - Free soil testing every 2 years.
    - Helps optimize fertilizer use based on actual soil nutrients.

    ⭐ **PM-KISAN Samman Nidhi**
    - ₹6000/year support for farmers in 3 installments.

    ⭐ **SMAM – Sub-Mission on Agricultural Mechanization**
    - 40–60% subsidy on farm machines (seeders, tillers, harvesters).

    These schemes reduce cost and increase profit. Farmer should check eligibility on the official PM-KISAN/PMFBY portals.
    """

    return response.text+govt_schemes

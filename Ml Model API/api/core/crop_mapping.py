# api/core/crop_mapping.py

# List of crops for which yield models EXIST
YIELD_SUPPORTED_CROPS = {
    "rice": "Rice",
    "jute": "Jute",
    "maize": "Maize",
    "wheat": "Wheat",
    "potato": "Potato",
    "sugarcane": "Sugarcane",
    "onion": "Onion",
    "soyabean": "Soyabean",
    "sunflower": "Sunflower",
    "ragi": "Ragi",
    "sesamum": "Sesamum",
    "groundnut": "Groundnut",
    "barley": "Barley",
    "bajra": "Bajra",
    "jowar": "Jowar",
    "gram": "Gram",
    "masoor": "Masoor",
    "urad": "Urad",
    "moong(green gram)": "Moong(Green Gram)",
    "peas & beans (pulses)": "Peas & beans (Pulses)",
    "linseed": "Linseed",
    "rapeseed &mustard": "Rapeseed &Mustard",
    "sweet potato": "Sweet potato",
    "mesta": "Mesta",
    "small millets": "Small millets",
    "tobacco": "Tobacco",
    "horse-gram": "Horse-gram",
    "other cereals": "Other Cereals",
    "other rabi pulses": "Other  Rabi pulses",
    "other kharif pulses": "Other Kharif pulses"
}

def map_to_yield_crop(crop_name: str):
    crop_name = crop_name.lower().strip()
    return YIELD_SUPPORTED_CROPS.get(crop_name, None)

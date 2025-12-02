import os
import joblib

# Path to the directory where THIS file exists
BASE_DIR = os.path.dirname(os.path.dirname(__file__))

# Your models folder inside /api/models
MODEL_DIR = os.path.join(BASE_DIR, "models")

crop_models = {}

def load_all_models():
    print("Loading models from:", MODEL_DIR)

    if not os.path.exists(MODEL_DIR):
        raise FileNotFoundError(f"Model directory not found: {MODEL_DIR}")

    for file in os.listdir(MODEL_DIR):
        if file.endswith(".joblib"):
            crop_name = file.replace(".joblib", "")
            model_path = os.path.join(MODEL_DIR, file)
            crop_models[crop_name] = joblib.load(model_path)

    print("Loaded Models:", list(crop_models.keys()))


def validate_crop(crop_name):
    if crop_name not in crop_models:
        raise ValueError(
            f"Crop '{crop_name}' not found! Available crops: {list(crop_models.keys())}"
        )


def get_model(crop_name):
    validate_crop(crop_name)
    return crop_models[crop_name]


# Load models at startup
load_all_models()

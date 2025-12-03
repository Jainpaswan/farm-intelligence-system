import pandas as pd
import joblib
import os

MODEL_DIR = "api/models/"

recommender_model = joblib.load(MODEL_DIR + "crop_recommender_pipeline.joblib")
label_encoder = joblib.load(MODEL_DIR + "label_encoder.joblib")

def recommend_crops(input_data):
    df = pd.DataFrame([input_data])
    probabilities = recommender_model.predict_proba(df)[0]

    # top 3 crops
    top_idx = probabilities.argsort()[-3:][::-1]
    top_crops = [
        {
            "crop": label_encoder.inverse_transform([i])[0],
            "probability": float(probabilities[i])
        }
        for i in top_idx
    ]
    return top_crops

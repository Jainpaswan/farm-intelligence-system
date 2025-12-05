import { useState } from "react";
import PredictionLoader from "../components/Loader";
interface CropPredictionPageProps {
  onBack?: () => void;
}

interface PredictionResult {
  prediction: {
    predicted_yield_ton_per_hectare: number;
    total_production_ton: number;
  };
  optimization: {
    optimized_yield_ton_per_hectare: number;
    optimized_total_production: number;
    recommended_fert_kg_ha: number;
    recommended_pest_kg_ha: number;
  };
  ai_advice: string;
}

export default function CropPredictionPage({
  onBack,
}: CropPredictionPageProps) {
  const [form, setForm] = useState({
    state: "",
    crop: "",
    area: "",
    fertilizer: "",
    pesticide: "",
    rainfall: "",
  });

  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePredict = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/prediction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          state: form.state,
          crop: form.crop,
          area: Number(form.area),
          fertilizer: Number(form.fertilizer),
          pesticide: Number(form.pesticide),
          rainfall: Number(form.rainfall),
        }),
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.log("Prediction error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 px-6 flex justify-center">
      {loading && <PredictionLoader />}   {/* 🔥 Show loader on prediction */}
      <div className="max-w-4xl w-full">
        {/* BACK BUTTON */}
        <button
          onClick={onBack}
          className="text-green-700 hover:text-green-900 font-medium mb-6"
        >
          ← Back to Home
        </button>

        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          🌾 Crop Yield Prediction
        </h1>

        <p className="text-gray-600 mb-10">
          Enter your farming details to get AI-powered yield prediction,
          optimization, and expert farming advice.
        </p>

        {/* FORM CARD */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-semibold mb-6 text-green-700">
            Input Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="state"
              placeholder="State (e.g., Rajasthan)"
              value={form.state}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
            <input
              name="crop"
              placeholder="Crop (e.g., Wheat)"
              value={form.crop}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
            <input
              name="area"
              placeholder="Area (hectares)"
              value={form.area}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
            <input
              name="fertilizer"
              placeholder="Fertilizer (kg/ha)"
              value={form.fertilizer}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
            <input
              name="pesticide"
              placeholder="Pesticide (kg/ha)"
              value={form.pesticide}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
            <input
              name="rainfall"
              placeholder="Rainfall (mm)"
              value={form.rainfall}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
          </div>

          <button
            onClick={handlePredict}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-xl text-lg font-semibold"
          >
            {loading ? "Predicting..." : "Predict Yield"}
          </button>
        </div>
       

        {result && (
          <div className="bg-white shadow-lg rounded-2xl mt-2 p-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              📊 Prediction Results
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Prediction
              </h3>
              <p>
                Predicted Yield:{" "}
                <b>
                  {result.prediction.predicted_yield_ton_per_hectare.toFixed(2)}
                </b>{" "}
                tons/ha
              </p>
              <p>
                Total Production:{" "}
                <b>{result.prediction.total_production_ton.toFixed(2)}</b> tons
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Optimization
              </h3>
              <p>
                Optimized Yield:{" "}
                <b>
                  {result.optimization.optimized_yield_ton_per_hectare.toFixed(
                    2
                  )}
                </b>{" "}
                tons/ha
              </p>
              <p>
                Optimized Production:{" "}
                <b>
                  {result.optimization.optimized_total_production.toFixed(2)}
                </b>{" "}
                tons
              </p>
              <p>
                Recommended Fertilizer:{" "}
                <b>{result.optimization.recommended_fert_kg_ha} kg/ha</b>
              </p>
              <p>
                Recommended Pesticide:{" "}
                <b>{result.optimization.recommended_pest_kg_ha} kg/ha</b>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">AI Advice</h3>
              <div
                className="whitespace-pre-wrap text-gray-700 mt-2 bg-gray-50 p-4 rounded-xl 
             max-h-96 overflow-y-auto border border-gray-200"
              >
                {result.ai_advice}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

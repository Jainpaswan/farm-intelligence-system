import { useState } from "react";

interface CropRecommendationPageProps {
  onBack?: () => void;
}

interface RecommendationResult {
  top_crops: {
    crop: string;
    probability: number;
  }[];
}

export default function CropRecommendationPage({ onBack }: CropRecommendationPageProps) {
  const [form, setForm] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [result, setResult] = useState<RecommendationResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRecommend = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          N: Number(form.N),
          P: Number(form.P),
          K: Number(form.K),
          temperature: Number(form.temperature),
          humidity: Number(form.humidity),
          ph: Number(form.ph),
          rainfall: Number(form.rainfall),
        }),
      });

      const data = await res.json();
      setResult(data);

    } catch (error) {
      console.log("Recommendation Error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 px-6 flex justify-center">
      <div className="max-w-4xl w-full">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="text-green-700 hover:text-green-900 font-medium mb-6"
        >
          ← Back to Home
        </button>

        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          🌱 Crop Recommendation
        </h1>

        <p className="text-gray-600 mb-10">
          Enter soil nutrients and environmental conditions to get AI-selected top crops for your land.
        </p>

        {/* INPUT FORM */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-semibold mb-6 text-green-700">Input Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="N" placeholder="Nitrogen (N)" value={form.N} onChange={handleChange} className="border p-3 rounded-lg" />
            <input name="P" placeholder="Phosphorus (P)" value={form.P} onChange={handleChange} className="border p-3 rounded-lg" />
            <input name="K" placeholder="Potassium (K)" value={form.K} onChange={handleChange} className="border p-3 rounded-lg" />

            <input name="temperature" placeholder="Temperature (°C)" value={form.temperature} onChange={handleChange} className="border p-3 rounded-lg" />
            <input name="humidity" placeholder="Humidity (%)" value={form.humidity} onChange={handleChange} className="border p-3 rounded-lg" />
            <input name="ph" placeholder="Soil pH" value={form.ph} onChange={handleChange} className="border p-3 rounded-lg" />
            <input name="rainfall" placeholder="Rainfall (mm)" value={form.rainfall} onChange={handleChange} className="border p-3 rounded-lg" />
          </div>

          <button
            onClick={handleRecommend}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-xl text-lg font-semibold"
          >
            {loading ? "Analyzing..." : "Recommend Crops"}
          </button>
        </div>

        {/* RESULTS */}
        {result && (
          <div className="bg-white shadow-lg rounded-2xl mt-2 p-8">

            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              🌾 Top Recommended Crops
            </h2>

            <div className="space-y-4">
              {result.top_crops.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between bg-gray-50 p-4 rounded-lg border"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {item.crop}
                  </span>

                  <span className="text-gray-600">
                    {(item.probability * 100).toFixed(1)}% match
                  </span>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Progress } from "./ui/progress";

export default function PredictionLoader() {
  const [value, setValue] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((old) => {
        if (old < 95) return old + Math.random() * 5;
        return old;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[350px] flex flex-col items-center">

        <h2 className="text-xl  font-semibold text-gray-800 mb-4">
          Predicting Crop Yield…
        </h2>

        <Progress value={value} className="w-full h-3 rounded-full" />

        <p className="text-gray-500 text-sm mt-3">
          Analyzing weather, soil & fertilizer data…
        </p>
      </div>
    </div>
  );
}

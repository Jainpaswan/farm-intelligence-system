import { useState } from "react";
import { LandingPage } from "./pages/LandingPage";
import { Dashboard } from "./pages/Dashboard";
import CropPredictionPage from "./pages/CropPrediction";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "landing" | "dashboard" | "predict"
  >("landing");

  return (
    <div className="min-h-screen bg-white">
      {currentPage === "landing" && (
        <LandingPage
          onNavigateToDashboard={() => setCurrentPage("dashboard")}
          onNavigateToPrediction={() => setCurrentPage("predict")}
        />
      )}

      {currentPage === "dashboard" && (
        <Dashboard onBackToHome={() => setCurrentPage("landing")} />
      )}

      {currentPage === "predict" && (
        <CropPredictionPage
          onBack={() => setCurrentPage("landing")}
        />
      )}
    </div>
  );
}

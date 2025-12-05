import { useState, useEffect } from "react";
import { LandingPage } from "./pages/LandingPage";
import { Dashboard } from "./pages/Dashboard";
import CropPredictionPage from "./pages/CropPrediction";
import CropRecommendationPage from "./pages/CropRecommendationPage";

export default function App() {

  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem("currentPage") || "landing";
  });

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white">
      {currentPage === "landing" && (
        <LandingPage
          onNavigateToDashboard={() => setCurrentPage("dashboard")}
          onNavigateToPrediction={() => setCurrentPage("predict")}
          onNavigateToRecommendation={() => setCurrentPage("recommend")}
        />
      )}

      {currentPage === "dashboard" && (
        <Dashboard onBackToHome={() => setCurrentPage("landing")} />
      )}

      {currentPage === "predict" && (
        <CropPredictionPage onBack={() => setCurrentPage("landing")} />
      )}

      {currentPage === "recommend" && (
        <CropRecommendationPage onBack={() => setCurrentPage("landing")} />
      )}

    </div>
  );
}

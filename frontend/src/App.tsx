import { useState, useEffect } from "react";

import {
  SignedOut,
  SignInButton,
  UserButton,
  SignedIn,
} from "@clerk/clerk-react";

import { LandingPage } from "./pages/LandingPage";
import { Dashboard } from "./pages/Dashboard";
import CropPredictionPage from "./pages/CropPrediction";
import CropRecommendationPage from "./pages/CropRecommendationPage";
import DiseaseDetection from "./pages/DiseaseDetection";
import ChatBot from "./pages/Chatbot";

import AuthGuard from "./components/AuthGuard";

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem("currentPage") || "landing";
  });

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white">

      {/* TOP RIGHT AUTH BUTTON */}
      <div className="fixed top-4 right-4 z-50">

        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-5 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition shadow-lg">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

      </div>

      {/* LANDING PAGE */}
      {currentPage === "landing" && (
        <LandingPage
          onNavigateToDashboard={() => setCurrentPage("dashboard")}
          onNavigateToPrediction={() => setCurrentPage("predict")}
          onNavigateToRecommendation={() => setCurrentPage("recommend")}
          onNavigateToDiseaseDetection={() => setCurrentPage("disease")}
          onNavigateToChatBot={() => setCurrentPage("chatbot")}
        />
      )}

      {/* DASHBOARD */}
      {currentPage === "dashboard" && (
        <AuthGuard onBack={() => setCurrentPage("landing")}>
          <Dashboard onBackToHome={() => setCurrentPage("landing")} />
        </AuthGuard>
      )}

      {/* PREDICTION */}
      {currentPage === "predict" && (
        <AuthGuard onBack={() => setCurrentPage("landing")}>
          <CropPredictionPage onBack={() => setCurrentPage("landing")} />
        </AuthGuard>
      )}

      {/* RECOMMENDATION */}
      {currentPage === "recommend" && (
        <AuthGuard onBack={() => setCurrentPage("landing")}>
          <CropRecommendationPage
            onBack={() => setCurrentPage("landing")}
          />
        </AuthGuard>
      )}

      {/* DISEASE DETECTION */}
      {currentPage === "disease" && (
        <AuthGuard onBack={() => setCurrentPage("landing")}>
          <DiseaseDetection onBack={() => setCurrentPage("landing")} />
        </AuthGuard>
      )}

      {/* CHATBOT */}
      {currentPage === "chatbot" && (
        <AuthGuard onBack={() => setCurrentPage("landing")}>
          <ChatBot onBack={() => setCurrentPage("landing")} />
        </AuthGuard>
      )}

    </div>
  );
}
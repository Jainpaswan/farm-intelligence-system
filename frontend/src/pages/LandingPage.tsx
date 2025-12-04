import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { AIFeatures } from "../components/AIFeatures";
import { DashboardPreview } from "../components/DashboardPreview";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

interface LandingPageProps {
  onNavigateToDashboard?: () => void;
  onNavigateToPrediction?: () => void;
}

export function LandingPage({
  onNavigateToDashboard,
  onNavigateToPrediction
}: LandingPageProps) {
  return (
    <>
      <Header onNavigateToDashboard={onNavigateToDashboard} />
      <main>
        <Hero
          onNavigateToDashboard={onNavigateToDashboard}
          onNavigateToPrediction={onNavigateToPrediction}
        />

        <Features />
        <AIFeatures onNavigateToPrediction={onNavigateToPrediction} />
        <DashboardPreview />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

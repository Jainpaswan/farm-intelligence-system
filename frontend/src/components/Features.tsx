import { Card } from "./ui/card";
import { Brain, Cloud, Bug, TrendingUp, Droplet, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Crop Monitoring",
    description: "Real-time crop health analysis using satellite imagery and AI algorithms to detect issues before they become problems.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Cloud,
    title: "Weather Prediction",
    description: "Hyperlocal weather forecasts and alerts to help you plan irrigation, harvesting, and protect crops from adverse conditions.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Droplet,
    title: "Smart Irrigation",
    description: "Optimize water usage with AI-driven irrigation recommendations based on soil moisture, weather, and crop needs.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Bug,
    title: "Pest Detection",
    description: "Early detection of pests and diseases using computer vision, with treatment recommendations from agricultural experts.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Yield Optimization",
    description: "Predictive analytics to maximize crop yields through optimized planting schedules, fertilization, and resource allocation.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: BarChart3,
    title: "Market Insights",
    description: "Real-time market data and price predictions to help you make informed decisions about what to grow and when to sell.",
    color: "from-pink-500 to-pink-600",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Everything You Need for{" "}
            <span className="text-green-600">Smart Farming</span>
          </h2>
          <p className="text-xl text-gray-600">
            Powerful AI-driven tools designed specifically for modern agriculture
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

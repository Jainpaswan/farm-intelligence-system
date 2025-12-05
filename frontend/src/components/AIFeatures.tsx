import { Card } from "./ui/card";
import {
  TrendingUp,
  Lightbulb,
  Shield,
  MessageCircle,
  FileText,
} from "lucide-react";
import { Button } from "./ui/button";

interface AIFeaturesProps {
  onNavigateToPrediction?: () => void;
  onNavigateToRecommendation?: () => void;
}

const aiFeatures = [
  {
    icon: TrendingUp,
    title: "Crop Yield Prediction",
    description:
      "Advanced machine learning models predict your expected harvest yield based on historical data, weather patterns, soil conditions, and crop health. Plan ahead with confidence and make informed decisions about resource allocation.",
    color: "from-emerald-500 to-emerald-600",
    badge: "98% Accuracy",
  },
  {
    icon: Lightbulb,
    title: "Crop Recommendation",
    description:
      "Get AI-powered suggestions on which crops to plant based on your soil type, climate zone, market demand, and historical performance. Maximize profitability by choosing the right crops for your land.",
    color: "from-yellow-500 to-yellow-600",
    badge: "Smart Insights",
  },
  {
    icon: Shield,
    title: "Disease Detection",
    description:
      "Upload photos of your crops and our AI instantly identifies diseases, nutrient deficiencies, and pest damage. Receive immediate treatment recommendations from our database of agricultural solutions.",
    color: "from-red-500 to-red-600",
    badge: "Real-time",
  },
  {
    icon: MessageCircle,
    title: "AI Chat Support",
    description:
      "24/7 access to our intelligent farming assistant. Ask questions about crop management, pest control, irrigation schedules, or any agricultural topic and get instant, expert-level responses.",
    color: "from-blue-500 to-blue-600",
    badge: "24/7 Available",
  },
  {
    icon: FileText,
    title: "Crop Details",
    description:
      "Comprehensive database of crop information including growth cycles, water requirements, optimal temperatures, fertilizer schedules, and best practices. All the information you need in one place.",
    color: "from-indigo-500 to-indigo-600",
    badge: "1000+ Crops",
  },
];

export function AIFeatures({
  onNavigateToPrediction,
  onNavigateToRecommendation,
}: AIFeaturesProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
            AI-Powered Tools
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Advanced Agriculture{" "}
            <span className="text-green-600">Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600">
            Leverage cutting-edge AI technology to make smarter farming
            decisions
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-8">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-gray-200"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Icon & Title Section */}
                  <div
                    className={`p-8 lg:p-12 flex flex-col justify-center ${
                      isEven ? "" : "lg:col-start-2"
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="text-white" size={32} />
                      </div>
                      <div>
                        <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm mb-2">
                          {feature.badge}
                        </div>
                        <h3 className="text-3xl text-gray-900">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <Button
                      className="bg-green-600 hover:bg-green-700 w-fit"
                      onClick={() => {
                        if (feature.title === "Crop Yield Prediction") {
                          onNavigateToPrediction?.();
                        }

                        if (feature.title === "Crop Recommendation") {
                          onNavigateToRecommendation?.();
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </div>

                  {/* Visual Section */}
                  <div
                    className={`bg-gradient-to-br ${
                      feature.color
                    } p-8 lg:p-12 flex items-center justify-center ${
                      isEven ? "" : "lg:col-start-1 lg:row-start-1"
                    }`}
                  >
                    <div className="relative w-full max-w-md">
                      {/* Decorative illustration placeholder */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <div className="bg-white/20 rounded-xl p-6 mb-4">
                          <Icon
                            className="text-white w-full h-32"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="space-y-3">
                          <div className="h-3 bg-white/30 rounded-full w-3/4"></div>
                          <div className="h-3 bg-white/30 rounded-full w-full"></div>
                          <div className="h-3 bg-white/30 rounded-full w-5/6"></div>
                        </div>
                      </div>
                      {/* Floating elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Want to see all features in action?
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6"
          >
            Schedule a Live Demo
          </Button>
        </div>
      </div>
    </section>
  );
}

import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    number: "01",
    title: "Connect Your Farm",
    description: "Add your farm location and crop details to get started. Our system integrates with existing farm management tools.",
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our AI continuously monitors your fields using satellite imagery, sensors, and weather data for comprehensive insights.",
  },
  {
    number: "03",
    title: "Get Recommendations",
    description: "Receive actionable insights and recommendations tailored to your specific crops, soil, and local conditions.",
  },
  {
    number: "04",
    title: "Optimize & Grow",
    description: "Implement AI-driven strategies to improve yields, reduce costs, and build more sustainable farming practices.",
  },
];

export function HowItWorks() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Simple Steps to{" "}
            <span className="text-green-600">Smarter Farming</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get started in minutes and see results in days
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1755931359594-852c73c6609c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXJtaW5nJTIwY3JvcHN8ZW58MXx8fHwxNzYyOTY4NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern farming crops"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

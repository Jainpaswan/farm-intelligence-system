import { Card } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Martinez",
    role: "Corn Farmer, Iowa",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    content: "AgroSense has transformed how I manage my 500-acre farm. The pest detection feature alone saved me thousands of dollars this season.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Agricultural Consultant",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "I recommend AgroSense to all my clients. The data-driven insights help them make better decisions and increase profitability.",
    rating: 5,
  },
  {
    name: "Raj Patel",
    role: "Organic Vegetable Farmer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raj",
    content: "The smart irrigation system has helped me reduce water usage by 40% while improving crop quality. It's a game-changer for sustainable farming.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Trusted by Farmers{" "}
            <span className="text-green-600">Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600">
            See what our community has to say about AgroSense
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

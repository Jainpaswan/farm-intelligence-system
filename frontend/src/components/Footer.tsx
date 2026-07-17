import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import TranslateText from "./TranslateText";

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🌱</span>
              </div>
              <span className="text-2xl text-white">
                <TranslateText>AgroSense</TranslateText>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              <TranslateText>Empowering farmers with AI-powered tools for sustainable and profitable agriculture.</TranslateText>
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
              <h3 className="text-white text-lg mb-4">
                <TranslateText>Product</TranslateText>
              </h3>
              <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  <TranslateText>Features</TranslateText>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  <TranslateText>Pricing</TranslateText>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  <TranslateText>Case Studies</TranslateText>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  <TranslateText>Integrations</TranslateText>
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg mb-4">
              <TranslateText>Company</TranslateText>
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  <TranslateText>About Us</TranslateText>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  <TranslateText>Careers</TranslateText>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  <TranslateText>Contact</TranslateText>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg mb-4">
              <TranslateText>Stay Updated</TranslateText>
            </h3>
            <p className="text-gray-400 mb-4">
              <TranslateText>Get the latest agricultural insights and updates delivered to your inbox.</TranslateText>
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
              />
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              <TranslateText> © 2025 AgroSense. All rights reserved.</TranslateText>
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-green-500 transition-colors">
                <TranslateText>Privacy Policy</TranslateText>
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <TranslateText>Terms of Service</TranslateText>
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <TranslateText>Cookie Policy</TranslateText>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

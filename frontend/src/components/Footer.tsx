import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

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
              <span className="text-2xl text-white">AgroSense</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering farmers with AI-powered tools for sustainable and profitable agriculture.
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
            <h3 className="text-white text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Get the latest agricultural insights and updates delivered to your inbox.
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
              © 2025 AgroSense. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-green-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

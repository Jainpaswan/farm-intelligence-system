import { Button } from "./ui/button";
import { Menu, X, Home, Cpu, BarChart3, MessageSquare, User } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onNavigateToDashboard?: () => void;
}

export function Header({ onNavigateToDashboard }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🌱</span>
            </div>
            <span className="text-2xl text-gray-900">FarmPredict</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <a href="#home" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all">
              <Home size={18} />
              <span>Home</span>
            </a>
            <a href="#features" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all">
              <Cpu size={18} />
              <span>AI Features</span>
            </a>
            <a href="#solutions" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all">
              <BarChart3 size={18} />
              <span>Solutions</span>
            </a>
            <button 
              onClick={onNavigateToDashboard}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
            >
              <MessageSquare size={18} />
              <span>Dashboard</span>
            </button>
            <a href="#contact" className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all">
              <User size={18} />
              <span>Contact</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 space-y-3">
            <a
              href="#home"
              className="flex items-center gap-2 py-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <Home size={18} />
              <span>Home</span>
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 py-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <Cpu size={18} />
              <span>AI Features</span>
            </a>
            <a
              href="#solutions"
              className="flex items-center gap-2 py-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <BarChart3 size={18} />
              <span>Solutions</span>
            </a>
            <button
              onClick={onNavigateToDashboard}
              className="flex items-center gap-2 py-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <MessageSquare size={18} />
              <span>Dashboard</span>
            </button>
            <a
              href="#contact"
              className="flex items-center gap-2 py-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <User size={18} />
              <span>Contact</span>
            </a>
            <div className="pt-3 space-y-2">
              <Button variant="ghost" className="w-full">
                Sign In
              </Button>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
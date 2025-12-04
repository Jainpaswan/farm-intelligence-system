import { Button } from "./ui/button";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onNavigateToDashboard?: () => void;
  onNavigateToPrediction?: () => void;   
}

export function Hero({ onNavigateToDashboard }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full">
              <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
              <span className="text-sm">AI-Powered Agricultural Intelligence</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900">
              Empowering Farmers with{" "}
              <span className="text-green-600">Smart Agriculture</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-xl">
              AgroSense combines cutting-edge AI technology with agricultural expertise to 
              help farmers make data-driven decisions, optimize yields, and build sustainable farming practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6"
                onClick={onNavigateToDashboard}
              >
                <TrendingUp className="mr-2" size={20} />
                Start Prediction
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Play className="mr-2" size={20} />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Active Farmers</div>
              </div>
              <div>
                <div className="text-3xl text-gray-900">2M+</div>
                <div className="text-sm text-gray-600">Acres Monitored</div>
              </div>
              <div>
                <div className="text-3xl text-gray-900">35%</div>
                <div className="text-sm text-gray-600">Avg. Yield Increase</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-sm opacity-90">Welcome back,</div>
                    <div className="text-white">Farmer Dashboard</div>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">👨‍🌾</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-4">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                    <div className="text-sm text-blue-600 mb-1">Total Fields</div>
                    <div className="text-2xl text-blue-700">24</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                    <div className="text-sm text-green-600 mb-1">Health Score</div>
                    <div className="text-2xl text-green-700">98.5%</div>
                  </div>
                </div>

                {/* Chart Preview */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600 mb-3">Yield Prediction</div>
                  <div className="flex items-end justify-between h-32 gap-2">
                    <div className="flex-1 bg-gradient-to-t from-green-500 to-green-400 rounded-t" style={{ height: '60%' }}></div>
                    <div className="flex-1 bg-gradient-to-t from-green-500 to-green-400 rounded-t" style={{ height: '75%' }}></div>
                    <div className="flex-1 bg-gradient-to-t from-green-500 to-green-400 rounded-t" style={{ height: '85%' }}></div>
                    <div className="flex-1 bg-gradient-to-t from-green-600 to-green-500 rounded-t" style={{ height: '95%' }}></div>
                    <div className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-50" style={{ height: '100%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-sm">
                      ⚠️
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">Disease Alert</div>
                      <div className="text-xs text-gray-600">Field A - North Section</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm">
                      ✓
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">Irrigation Complete</div>
                      <div className="text-xs text-gray-600">Field B - All Zones</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl shadow-xl p-4">
              <div className="text-xs opacity-90">Live Monitoring</div>
              <div className="text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
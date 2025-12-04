import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { 
  TrendingUp, 
  Activity, 
  MapPin, 
  Bell, 
  Calendar, 
  Droplet,
  Cloud,
  Thermometer,
  Wind,
  Sun,
  ArrowLeft,
  Settings,
  Download,
  Plus,
  ChevronRight
} from "lucide-react";

interface DashboardProps {
  onBackToHome?: () => void;
}

export function Dashboard({ onBackToHome }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onBackToHome}
              >
                <ArrowLeft className="mr-2" size={18} />
                Back to Home
              </Button>
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white">🌱</span>
                </div>
                <span className="text-xl text-gray-900">AgroSense</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Bell size={18} />
                <span className="ml-2 hidden sm:inline">Notifications</span>
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings size={18} />
                <span className="ml-2 hidden sm:inline">Settings</span>
              </Button>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xl">👨‍🌾</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your farm today.</p>
        </div>

        {/* Key Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <span className="text-xs text-blue-600 bg-blue-200 px-2 py-1 rounded-full">+2 new</span>
            </div>
            <div className="text-3xl text-blue-700 mb-1">24</div>
            <div className="text-sm text-blue-600">Total Fields</div>
            <div className="mt-3 text-xs text-blue-600 flex items-center">
              <span>View all fields</span>
              <ChevronRight size={14} className="ml-1" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Activity className="text-white" size={24} />
              </div>
              <span className="text-xs text-green-600 bg-green-200 px-2 py-1 rounded-full">Excellent</span>
            </div>
            <div className="text-3xl text-green-700 mb-1">98.5%</div>
            <div className="text-sm text-green-600">Avg Health Score</div>
            <div className="mt-3 text-xs text-green-600 flex items-center">
              <span>View details</span>
              <ChevronRight size={14} className="ml-1" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-white" size={24} />
              </div>
              <span className="text-xs text-purple-600 bg-purple-200 px-2 py-1 rounded-full">+12%</span>
            </div>
            <div className="text-3xl text-purple-700 mb-1">8.5T</div>
            <div className="text-sm text-purple-600">Expected Yield</div>
            <div className="mt-3 text-xs text-purple-600 flex items-center">
              <span>See predictions</span>
              <ChevronRight size={14} className="ml-1" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                <Droplet className="text-white" size={24} />
              </div>
              <span className="text-xs text-cyan-600 bg-cyan-200 px-2 py-1 rounded-full">-15%</span>
            </div>
            <div className="text-3xl text-cyan-700 mb-1">2.4M</div>
            <div className="text-sm text-cyan-600">Water Usage (L)</div>
            <div className="mt-3 text-xs text-cyan-600 flex items-center">
              <span>Optimize usage</span>
              <ChevronRight size={14} className="ml-1" />
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Yield Prediction Chart */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl text-gray-900">Yield Prediction</h3>
                <p className="text-sm text-gray-600">Monthly forecast for 2025</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download size={16} />
                </Button>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </div>
            <div className="flex items-end justify-between h-72 gap-3">
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t hover:from-green-600 hover:to-green-500 transition-all cursor-pointer" style={{ height: '60%' }}></div>
                <span className="text-xs text-gray-600">Jan</span>
                <span className="text-xs text-gray-500">7.2T</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t hover:from-green-600 hover:to-green-500 transition-all cursor-pointer" style={{ height: '70%' }}></div>
                <span className="text-xs text-gray-600">Feb</span>
                <span className="text-xs text-gray-500">7.5T</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t hover:from-green-600 hover:to-green-500 transition-all cursor-pointer" style={{ height: '75%' }}></div>
                <span className="text-xs text-gray-600">Mar</span>
                <span className="text-xs text-gray-500">7.8T</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t hover:from-green-600 hover:to-green-500 transition-all cursor-pointer" style={{ height: '85%' }}></div>
                <span className="text-xs text-gray-600">Apr</span>
                <span className="text-xs text-gray-500">8.2T</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-green-600 to-green-500 rounded-t hover:from-green-700 hover:to-green-600 transition-all cursor-pointer" style={{ height: '95%' }}></div>
                <span className="text-xs text-gray-600">May</span>
                <span className="text-xs text-gray-500">8.5T</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-60 hover:opacity-80 transition-all cursor-pointer" style={{ height: '100%' }}></div>
                <span className="text-xs text-gray-600">Jun</span>
                <span className="text-xs text-blue-500">8.9T</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-600">Actual Yield</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded opacity-60"></div>
                <span className="text-sm text-gray-600">Predicted Yield</span>
              </div>
            </div>
          </Card>

          {/* Weather Widget */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-gray-900">Weather</h3>
              <Button variant="ghost" size="sm">
                <Calendar size={16} />
              </Button>
            </div>
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <Sun className="text-white" size={40} />
              </div>
              <div className="text-4xl text-gray-900 mb-2">28°C</div>
              <div className="text-gray-600">Sunny</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Thermometer size={18} className="text-red-500" />
                  <span className="text-sm text-gray-600">Temperature</span>
                </div>
                <span className="text-sm text-gray-900">18°C - 30°C</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Droplet size={18} className="text-blue-500" />
                  <span className="text-sm text-gray-600">Humidity</span>
                </div>
                <span className="text-sm text-gray-900">65%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Wind size={18} className="text-cyan-500" />
                  <span className="text-sm text-gray-600">Wind Speed</span>
                </div>
                <span className="text-sm text-gray-900">12 km/h</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Cloud size={18} className="text-gray-500" />
                  <span className="text-sm text-gray-600">Rainfall</span>
                </div>
                <span className="text-sm text-gray-900">0 mm</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Field Status */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-gray-900">Field Status</h3>
              <Button variant="ghost" size="sm">
                <Plus size={16} />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-900">Field A - Wheat</span>
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">Healthy</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>12 acres</span>
                  <span>•</span>
                  <span>98% health</span>
                </div>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-900">Field B - Corn</span>
                  <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded-full">Attention</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>8 acres</span>
                  <span>•</span>
                  <span>85% health</span>
                </div>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-900">Field C - Rice</span>
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">Healthy</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>15 acres</span>
                  <span>•</span>
                  <span>96% health</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Alerts */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-gray-900">Recent Alerts</h3>
              <Bell size={18} className="text-gray-600" />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🐛</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">Pest Detected</div>
                  <div className="text-xs text-gray-600">Field A - North Section</div>
                  <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">⚠️</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">Low Soil Moisture</div>
                  <div className="text-xs text-gray-600">Field C - South Section</div>
                  <div className="text-xs text-gray-500 mt-1">5 hours ago</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">✓</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">Irrigation Complete</div>
                  <div className="text-xs text-gray-600">Field B - All Zones</div>
                  <div className="text-xs text-gray-500 mt-1">1 day ago</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="text-xl text-gray-900 mb-6">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700 justify-start">
                <TrendingUp className="mr-2" size={18} />
                Start Crop Prediction
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2" size={18} />
                Schedule Irrigation
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="mr-2" size={18} />
                View Health Reports
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MapPin className="mr-2" size={18} />
                Add New Field
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2" size={18} />
                Export Data
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

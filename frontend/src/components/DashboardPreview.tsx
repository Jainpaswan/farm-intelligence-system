import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { TrendingUp, Activity, MapPin, Bell, Calendar, Droplet } from "lucide-react";
import TranslateText from "./TranslateText";

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
            <TranslateText>Dashboard Preview</TranslateText>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Your Farm at a{" "}
            <span className="text-green-600">
              <TranslateText>Glance</TranslateText>
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            <TranslateText>Monitor, analyze, and optimize your entire farming operation from one powerful dashboard</TranslateText>
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-7xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-2 border-gray-200">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-3xl">👨‍🌾</span>
                  </div>
                  <div>
                    <div className="text-white text-sm opacity-90">
                      <TranslateText>Welcome back,</TranslateText>
                    </div>
                    <div className="text-white text-2xl">
                      <TranslateText>John's Farm</TranslateText>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" className="text-white hover:bg-white/20" size="sm">
                    <Bell size={18} />
                  </Button>
                  <Button className="bg-white text-green-600 hover:bg-gray-100">
                    <TrendingUp className="mr-2" size={18} />
                    <TranslateText>Start Prediction</TranslateText>
                  </Button>
                </div>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-8 space-y-8">
              {/* Key Metrics */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <span className="text-xs text-blue-600 bg-blue-200 px-2 py-1 rounded-full">+2 new</span>
                  </div>
                  <div className="text-3xl text-blue-700 mb-1">24</div>
                  <div className="text-sm text-blue-600">
                    <TranslateText>Total Fields</TranslateText>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <Activity className="text-white" size={24} />
                    </div>
                    <span className="text-xs text-green-600 bg-green-200 px-2 py-1 rounded-full">
                      <TranslateText>Excellent</TranslateText>
                    </span>
                  </div>
                  <div className="text-3xl text-green-700 mb-1">98.5%</div>
                  <div className="text-sm text-green-600">
                    <TranslateText>Avg Health Score</TranslateText>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <span className="text-xs text-purple-600 bg-purple-200 px-2 py-1 rounded-full">
                      <TranslateText>+12%</TranslateText>
                    </span>
                  </div>
                  <div className="text-3xl text-purple-700 mb-1">8.5T</div>
                  <div className="text-sm text-purple-600">
                    <TranslateText>Expected Yield</TranslateText>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                      <Droplet className="text-white" size={24} />
                    </div>
                    <span className="text-xs text-cyan-600 bg-cyan-200 px-2 py-1 rounded-full">
                      <TranslateText>-15%</TranslateText>
                    </span>
                  </div>
                  <div className="text-3xl text-cyan-700 mb-1">2.4M</div>
                  <div className="text-sm text-cyan-600">
                    <TranslateText>Water Usage (L)</TranslateText>
                  </div>
                </Card>
              </div>

              {/* Charts and Activity */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Yield Prediction Chart */}
                <Card className="p-6 lg:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg text-gray-900">
                        <TranslateText>Yield Prediction</TranslateText>
                      </h3>
                      <p className="text-sm text-gray-600">
                        <TranslateText>Monthly forecast for 2025</TranslateText>
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <TranslateText>View Details</TranslateText>
                    </Button>
                  </div>
                  <div className="flex items-end justify-between h-64 gap-4">
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t" style={{ height: '60%' }}></div>
                      <span className="text-xs text-gray-600">
                        <TranslateText>Jan</TranslateText>
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t" style={{ height: '70%' }}></div>
                      <span className="text-xs text-gray-600">
                        <TranslateText>Feb</TranslateText>
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t" style={{ height: '75%' }}></div>
                      <span className="text-xs text-gray-600">
                        <TranslateText>Mar</TranslateText>
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t" style={{ height: '85%' }}></div>
                      <span className="text-xs text-gray-600">
                        <TranslateText>Apr</TranslateText>
                        </span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-gradient-to-t from-green-600 to-green-500 rounded-t" style={{ height: '95%' }}></div>
                      <span className="text-xs text-gray-600">
                        <TranslateText>May</TranslateText>
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-60" style={{ height: '100%' }}></div>
                      <span className="text-xs text-gray-600">
                        <TranslateText>Jun</TranslateText>
                      </span>
                    </div>
                  </div>
                </Card>

                {/* Recent Alerts */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg text-gray-900">
                      <TranslateText>Recent Alerts</TranslateText>
                    </h3>
                    <Bell size={18} className="text-gray-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">🐛</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-900">
                          <TranslateText>Pest Detected</TranslateText>
                        </div>
                        <div className="text-xs text-gray-600">
                          <TranslateText>Field A - North</TranslateText>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          <TranslateText>2 hours ago</TranslateText>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">⚠️</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-900">
                          <TranslateText>Low Soil Moisture</TranslateText>
                        </div>
                        <div className="text-xs text-gray-600">
                          <TranslateText>Field C - South</TranslateText>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          <TranslateText>5 hours ago</TranslateText>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">✓</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-900">
                          <TranslateText>Irrigation Complete</TranslateText>
                        </div>
                        <div className="text-xs text-gray-600">
                          <TranslateText>Field B - All Zones</TranslateText>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          <TranslateText>1 day ago</TranslateText>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">
                  <Calendar className="mr-2" size={18} />
                  <TranslateText>Schedule Irrigation</TranslateText>
                </Button>
                <Button variant="outline">
                  <Activity className="mr-2" size={18} />
                  <TranslateText>View Health Reports</TranslateText>
                </Button>
                <Button variant="outline">
                  <TrendingUp className="mr-2" size={18} />
                  <TranslateText>Market Insights</TranslateText>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            <TranslateText>Experience the full power of AgroSense Dashboard</TranslateText>
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            <TranslateText>Try Dashboard Demo</TranslateText>
          </Button>
        </div>
      </div>
    </section>
  );
}

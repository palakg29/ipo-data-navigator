
import React from 'react';
import { Search, Bell, User, ChevronDown, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AdminSidebar from '@/components/AdminSidebar';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search"
                  className="pl-10 w-80 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-2 h-2"></span>
              </Button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">V</span>
                </div>
                <span className="text-sm font-medium">Hi, Vishal</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* IPO Dashboard India */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">IPO Dashboard India</h2>
              </div>
              
              <div className="flex items-center mb-4">
                <span className="text-green-600 text-sm flex items-center">
                  ↑ 20 IPO in Gain
                </span>
              </div>

              <div className="relative">
                {/* Donut Chart Placeholder */}
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="10"/>
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#3b82f6" strokeWidth="10" 
                              strokeDasharray="188" strokeDashoffset="47" className="transition-all duration-300"/>
                      <circle cx="60" cy="60" r="35" fill="none" stroke="#10b981" strokeWidth="10" 
                              strokeDasharray="125" strokeDashoffset="31" className="transition-all duration-300"/>
                      <circle cx="60" cy="60" r="20" fill="none" stroke="#8b5cf6" strokeWidth="10" 
                              strokeDasharray="63" strokeDashoffset="28" className="transition-all duration-300"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">30</div>
                        <div className="text-xs text-gray-600">Total IPO</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="text-center">
                    <div className="text-sm text-blue-600">9</div>
                    <div className="text-xs text-gray-600">IPO in Loss</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-green-600">20</div>
                    <div className="text-xs text-gray-600">IPO in Gain</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-sm text-gray-600 mb-4">Adipiscing elit, sed do eiusmod tempor</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">NSE India</span>
                  </div>
                  <span className="text-xs text-gray-500">Visit Now</span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-600">SE</span>
                    </div>
                    <span className="text-sm font-medium">BSE India</span>
                  </div>
                  <span className="text-xs text-gray-500">Visit Now</span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    </div>
                    <span className="text-sm font-medium">SEBI</span>
                  </div>
                  <span className="text-xs text-gray-500">Visit Now</span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">Money Control</span>
                  </div>
                  <span className="text-xs text-gray-500">Visit Now</span>
                </div>
              </div>
            </div>

            {/* Main Board IPO */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Main Board IPO</h2>
                <span className="text-sm text-blue-600 cursor-pointer">View Report</span>
              </div>
              
              <div className="text-sm text-gray-600 mb-4">From 01 Jan 2024</div>

              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="30" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                    <circle cx="40" cy="40" r="30" fill="none" stroke="#8b5cf6" strokeWidth="8" 
                            strokeDasharray="125" strokeDashoffset="31" className="transition-all duration-300"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs">
                      <div className="text-center">
                        <div className="font-medium">Afternoon</div>
                        <div className="text-xs">IPO NSE & BSE</div>
                        <div className="font-bold">15</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between text-xs">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Upcoming</span>
                  <span className="font-medium">15</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>New Listed</span>
                  <span className="font-medium">25</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Ongoing</span>
                  <span className="font-medium">2</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Settings, 
  Users, 
  FileText, 
  CreditCard, 
  HelpCircle,
  Database,
  Bell
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: BarChart3 },
    { name: 'Manage IPO', path: '/admin/manage-ipo', icon: Database },
    { name: 'IPO Subscription', path: '/admin/ipo-subscription', icon: FileText },
    { name: 'IPO Allotment', path: '/admin/ipo-allotment', icon: CreditCard },
  ];

  const otherItems = [
    { name: 'Settings', path: '/admin/settings', icon: Settings },
    { name: 'API Manager', path: '/admin/api-manager', icon: Database },
    { name: 'Accounts', path: '/admin/accounts', icon: Users },
    { name: 'Help', path: '/admin/help', icon: HelpCircle },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">BF</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">Bluestock Fintech</span>
        </div>
      </div>

      {/* Menu Section */}
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            MENU
          </h3>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Others Section */}
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            OTHERS
          </h3>
          <nav className="space-y-1">
            {otherItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

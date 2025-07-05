
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900">BLUESTOCK</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="#ipos" className="text-gray-600 hover:text-gray-900">IPOs</Link>
            <Link to="#about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline">Dashboard</Button>
                </Link>
                <Link to="/ipo-management">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Manage IPOs
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline">Sign In</Button>
                </Link>
                <Link to="/admin/login">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Admin Login
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

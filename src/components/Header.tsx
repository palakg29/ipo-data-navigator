
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">BLUESTOCK</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">IPO</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">COMMUNITY</a>
            <div className="relative group">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium flex items-center">
                PRODUCTS
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium flex items-center">
                BROKERS
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <div className="flex items-center">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">LIVE NEWS</a>
              <span className="ml-1 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">NEW</span>
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2">Sign In</button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">Sign Up Now</Button>
            <Link to="/admin/login">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-4 py-2">
                Admin Portal
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">IPO</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">COMMUNITY</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">PRODUCTS</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">BROKERS</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">LIVE NEWS</a>
              <div className="pt-4 border-t flex flex-col space-y-2">
                <button className="text-gray-600 hover:text-gray-900 font-medium text-left">Sign In</button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">Sign Up Now</Button>
                <Link to="/admin/login" className="w-full">
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 w-full">
                    Admin Portal
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

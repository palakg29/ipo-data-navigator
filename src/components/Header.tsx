
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {
  const { user, signOut } = useAuth();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <button 
              onClick={scrollToTop}
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Home
            </button>
            <button 
              onClick={scrollToAbout}
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              About
            </button>
            <button 
              onClick={scrollToFooter}
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Contact
            </button>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button 
                    variant="outline" 
                    className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    Dashboard
                  </Button>
                </Link>
                <Link to="/ipo-management">
                  <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Manage IPOs
                  </Button>
                </Link>
                <Button 
                  onClick={signOut}
                  variant="outline"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-red-500 hover:text-red-500"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button 
                    variant="outline"
                    className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/admin/login">
                  <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
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

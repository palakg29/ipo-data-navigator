
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-600 hover:scale-105 transition-transform duration-300">
              BlueStock
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('top')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105 hover:shadow-sm px-3 py-2 rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about-section')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105 hover:shadow-sm px-3 py-2 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('footer')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105 hover:shadow-sm px-3 py-2 rounded-md"
            >
              Contact
            </button>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button 
                    variant="outline" 
                    className="hover:scale-105 transition-all duration-300 hover:shadow-md"
                  >
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  onClick={handleSignOut}
                  variant="destructive"
                  className="hover:scale-105 transition-all duration-300 hover:shadow-md"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/auth">
                  <Button 
                    variant="outline"
                    className="hover:scale-105 transition-all duration-300 hover:shadow-md"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/admin/login">
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300 hover:shadow-md"
                  >
                    Admin Portal
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

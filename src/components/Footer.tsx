
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-400">BlueStock</h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for IPO investments. We provide comprehensive information and tools to help you make informed investment decisions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-400/30 p-2 rounded-full hover:bg-purple-400/10"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/30 p-2 rounded-full hover:bg-blue-400/10"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-400/30 p-2 rounded-full hover:bg-pink-400/10"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/30 p-2 rounded-full hover:bg-blue-600/10"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">IPO Calendar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Investment Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Market Analysis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Research Reports</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">IPO Applications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Portfolio Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Investment Advisory</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Market Insights</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Risk Assessment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">info@bluestock.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 BlueStock. All rights reserved. | 
            <a href="#" className="text-purple-400 hover:text-purple-300 ml-1">Privacy Policy</a> | 
            <a href="#" className="text-purple-400 hover:text-purple-300 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

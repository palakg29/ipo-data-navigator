
import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Trading View</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">NSE Holidays</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">e-Voting CDSL</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">e-Voting NSDL</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Market Timings</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Blogs</a></li>
            </ul>
          </div>

          {/* Offerings */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Offerings</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Compare Broker</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Fin Calculators</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">IPO</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">All Brokers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Products</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Shark Investor</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Mutual Funds</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Sitemap</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Indian Indices</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Bug Bounty Program</a></li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Policy</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Refund Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Disclaimer</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Trust & Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-300 hover:rotate-3">
                <span className="text-white text-sm">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-red-600 rounded flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-300 hover:-rotate-3">
                <span className="text-white text-sm">Y</span>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400 hover:rotate-3">
                <span className="text-white text-sm">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-300 hover:-rotate-3">
                <span className="text-white text-sm">@</span>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-300 hover:rotate-3">
                <span className="text-white text-sm">t</span>
              </a>
            </div>

            {/* Company Info */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold text-gray-900">BLUESTOCK</span>
              </div>
              
              <div className="text-sm text-gray-600">
                <p>Bluestock Fintech</p>
                <p>Pune, Maharashtra</p>
                <p className="mt-2">MSME Registration No:</p>
                <p>UDYAM-MH-01-0138001</p>
              </div>
            </div>
          </div>

          {/* Startup India Logo */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center">
              <span className="text-orange-600 font-bold text-xl transition-all duration-300 hover:scale-105">#startupindia</span>
            </div>
          </div>

          {/* Legal Text */}
          <div className="mt-8 text-xs text-gray-500 space-y-4">
            <p>
              Investment in securities markets are subject to market risks, read all the related documents carefully before investing as 
              prescribed by SEBI. Issued in the interest of the investors.
            </p>
            <p>
              The users can write to <a href="mailto:hello@bluestock.in" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">hello@bluestock.in</a> for any app, website related queries. Also you can send IT / Tech related feedback to 
              <a href="mailto:cto@bluestock.in" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 ml-1">cto@bluestock.in</a>
            </p>
            <p>
              Disclaimer: We are not a SEBI registered research analyst company. We do not provide any kind of stock recommendations, buy/ 
              sell stock tips, or investment and trading advice. All the stock scripts shown in the Bluestock app, website, all social media handles 
              are for educational purposes only.
            </p>
            <p>
              Before making any investment in the financial market, it is advisable to consult with your financial advisor. Remember that stock 
              markets are subject to market risks.
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
            <p>Bluestock Fintech All Rights Reserved.</p>
            <p>Made with ❤️ in Pune, Maharashtra</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

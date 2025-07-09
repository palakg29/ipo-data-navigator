
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import IPOSection from "@/components/IPOSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Invest in <span className="text-purple-600">Tomorrow's</span> Leaders Today
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover and invest in the most promising IPOs with expert insights, 
            comprehensive analysis, and seamless application processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Start Investing <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-3 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose BlueStock?
            </h2>
            <p className="text-lg text-gray-600">
              Professional tools and insights for smart IPO investments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Analysis</h3>
              <p className="text-gray-600">
                Get detailed research reports and expert recommendations for every IPO with comprehensive financial analysis.
              </p>
            </div>
            
            <div className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
              <p className="text-gray-600">
                Bank-grade security with encrypted transactions and secure data protection for all your investments.
              </p>
            </div>
            
            <div className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
              <p className="text-gray-600">
                Join thousands of investors sharing insights and strategies for successful IPO investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How many slots should I apply for IPO?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The optimal number of IPO slots depends on several factors including your investment capacity, 
                risk tolerance, and the specific IPO's characteristics. For retail investors, applying for 1-2 lots 
                typically maximizes your chances of allotment in oversubscribed issues.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Retail Category (Up to ₹2 Lakhs)</h4>
                    <p className="text-gray-600">Apply for 1-2 lots for maximum allotment chances through lottery system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">HNI Category (Above ₹2 Lakhs)</h4>
                    <p className="text-gray-600">Consider proportionate allotment based on demand and application size</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategic Approach</h4>
                    <p className="text-gray-600">Diversify across multiple IPOs rather than concentrating on a single issue</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">IPO Application Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Investment Amount (₹)</label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter amount" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lot Size</label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter lot size" />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300">
                  Calculate Optimal Lots
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IPO Section */}
      <IPOSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your IPO Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful investors who trust BlueStock for their IPO investments
          </p>
          <Link to="/auth">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

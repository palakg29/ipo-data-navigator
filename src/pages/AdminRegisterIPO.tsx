
import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import AdminSidebar from '@/components/AdminSidebar';

const AdminRegisterIPO = () => {
  const [activeTab, setActiveTab] = useState('information');
  const [companyName, setCompanyName] = useState('Vodafone Idea');
  const [priceRange, setPriceRange] = useState('Not Issued');
  const [openDate, setOpenDate] = useState('Not Issued');
  const [closeDate, setCloseDate] = useState('Not Issued');
  const [issueSize, setIssueSize] = useState('2300 Cr.');
  const [issueType, setIssueType] = useState('');
  const [listingDate, setListingDate] = useState('Not Issued');
  const [status, setStatus] = useState('');
  const [ipoPrice, setIpoPrice] = useState('₹ 383');
  const [listingPrice, setListingPrice] = useState('₹ 435');
  const [listingGain, setListingGain] = useState('13.58 %');
  const [listingDateNew, setListingDateNew] = useState('2024-05-30');
  const [cmp, setCmp] = useState('₹410');
  const [currentReturn, setCurrentReturn] = useState('7.05 %');
  const [rhp, setRhp] = useState('');
  const [drhp, setDrhp] = useState('');

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
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Upcomming IPO Information</h1>
            <div className="flex space-x-3">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Register
              </Button>
              <Button variant="outline">
                Cancel
              </Button>
            </div>
          </div>

          <p className="text-gray-600 mb-6">Manage your IPO Details</p>

          <div className="flex space-x-8">
            {/* Left Sidebar */}
            <div className="w-64 bg-white rounded-lg shadow-sm p-4">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('information')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${
                    activeTab === 'information' 
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-blue-600">i</span>
                  </div>
                  <span className="font-medium">IPO Information</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('info')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${
                    activeTab === 'info' 
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">📄</span>
                  </div>
                  <span className="font-medium">IPO Info</span>
                </button>
              </nav>
            </div>

            {/* Main Form */}
            <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">IPO Information</h2>
              <p className="text-gray-600 mb-6">Enter IPO Details</p>

              <form className="space-y-6">
                {/* Company Logo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Logo
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">NSE</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">NSE India</div>
                      <div className="text-xs text-gray-500">Tech Lead Pune</div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Upload Logo
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company-name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Vodafone Idea"
                    />
                  </div>

                  {/* Price Band */}
                  <div>
                    <label htmlFor="price-band" className="block text-sm font-medium text-gray-700 mb-2">
                      Price Band
                    </label>
                    <Input
                      id="price-band"
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      placeholder="Not Issued"
                    />
                  </div>

                  {/* Open */}
                  <div>
                    <label htmlFor="open" className="block text-sm font-medium text-gray-700 mb-2">
                      Open
                    </label>
                    <Input
                      id="open"
                      value={openDate}
                      onChange={(e) => setOpenDate(e.target.value)}
                      placeholder="Not Issued"
                    />
                  </div>

                  {/* Close */}
                  <div>
                    <label htmlFor="close" className="block text-sm font-medium text-gray-700 mb-2">
                      Close
                    </label>
                    <Input
                      id="close"
                      value={closeDate}
                      onChange={(e) => setCloseDate(e.target.value)}
                      placeholder="Not Issued"
                    />
                  </div>

                  {/* Issue Size */}
                  <div>
                    <label htmlFor="issue-size" className="block text-sm font-medium text-gray-700 mb-2">
                      Issue Size
                    </label>
                    <Input
                      id="issue-size"
                      value={issueSize}
                      onChange={(e) => setIssueSize(e.target.value)}
                      placeholder="2300 Cr."
                    />
                  </div>

                  {/* Issue Type */}
                  <div>
                    <label htmlFor="issue-type" className="block text-sm font-medium text-gray-700 mb-2">
                      Issue Type
                    </label>
                    <select 
                      id="issue-type"
                      value={issueType}
                      onChange={(e) => setIssueType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Issue Type</option>
                      <option value="Book Built">Book Built</option>
                      <option value="Fixed Price">Fixed Price</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Listing Date */}
                  <div>
                    <label htmlFor="listing-date" className="block text-sm font-medium text-gray-700 mb-2">
                      LISTING DATE
                    </label>
                    <Input
                      id="listing-date"
                      value={listingDate}
                      onChange={(e) => setListingDate(e.target.value)}
                      placeholder="Not Issued"
                    />
                  </div>

                  {/* Status */}
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <select 
                      id="status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Status</option>
                      <option value="Upcoming">Upcoming</option>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Listed">Listed</option>
                    </select>
                  </div>
                </div>

                {/* New Listed IPO Details Section */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    NEW LISTED IPO DETAILS (WHEN IPO GET LISTED)
                  </h3>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="ipo-price" className="block text-sm font-medium text-gray-700 mb-2">
                        IPO PRICE
                      </label>
                      <Input
                        id="ipo-price"
                        value={ipoPrice}
                        onChange={(e) => setIpoPrice(e.target.value)}
                        placeholder="₹ 383"
                      />
                    </div>

                    <div>
                      <label htmlFor="listing-price" className="block text-sm font-medium text-gray-700 mb-2">
                        LISTING PRICE
                      </label>
                      <Input
                        id="listing-price"
                        value={listingPrice}
                        onChange={(e) => setListingPrice(e.target.value)}
                        placeholder="₹ 435"
                      />
                    </div>

                    <div>
                      <label htmlFor="listing-gain" className="block text-sm font-medium text-gray-700 mb-2">
                        LISTING GAIN
                      </label>
                      <Input
                        id="listing-gain"
                        value={listingGain}
                        onChange={(e) => setListingGain(e.target.value)}
                        placeholder="13.58 %"
                      />
                    </div>

                    <div>
                      <label htmlFor="listing-date-new" className="block text-sm font-medium text-gray-700 mb-2">
                        LISTING DATE
                      </label>
                      <Input
                        id="listing-date-new"
                        type="date"
                        value={listingDateNew}
                        onChange={(e) => setListingDateNew(e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor="cmp" className="block text-sm font-medium text-gray-700 mb-2">
                        CMP
                      </label>
                      <Input
                        id="cmp"
                        value={cmp}
                        onChange={(e) => setCmp(e.target.value)}
                        placeholder="₹410"
                      />
                    </div>

                    <div>
                      <label htmlFor="current-return" className="block text-sm font-medium text-gray-700 mb-2">
                        CURRENT RETURN
                      </label>
                      <Input
                        id="current-return"
                        value={currentReturn}
                        onChange={(e) => setCurrentReturn(e.target.value)}
                        placeholder="7.05 %"
                      />
                    </div>

                    <div>
                      <label htmlFor="rhp" className="block text-sm font-medium text-gray-700 mb-2">
                        RHP
                      </label>
                      <Input
                        id="rhp"
                        value={rhp}
                        onChange={(e) => setRhp(e.target.value)}
                        placeholder="Enter RHP PDF Link"
                      />
                    </div>

                    <div>
                      <label htmlFor="drhp" className="block text-sm font-medium text-gray-700 mb-2">
                        DRHP
                      </label>
                      <Input
                        id="drhp"
                        value={drhp}
                        onChange={(e) => setDrhp(e.target.value)}
                        placeholder="Enter DRHP PDF Link"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminRegisterIPO;


import React from 'react';
import { Search, Bell, ChevronDown, Eye, Trash2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import AdminSidebar from '@/components/AdminSidebar';

const AdminManageIPO = () => {
  const ipoData = [
    {
      company: 'Adani Power',
      priceRange: '₹ 329 - 136',
      open: '2023-06-03',
      close: '2024-06-05',
      issueSize: '45530.15 Cr.',
      issueType: 'Book Built',
      listingDate: '2023-06-10',
      status: 'Ongoing',
    },
    {
      company: 'VBL LTD',
      priceRange: '₹ 229 - 136',
      open: '2024-06-03',
      close: '2024-06-05',
      issueSize: '1330.15 Cr.',
      issueType: 'Book Built',
      listingDate: '2018-06-10',
      status: 'Comming',
    },
    {
      company: 'Tata Motor',
      priceRange: '₹ 12549 - 136',
      open: '2024-06-03',
      close: '2024-06-05',
      issueSize: '1340.15 Cr.',
      issueType: 'Book Built',
      listingDate: '2016-06-10',
      status: 'New Listed',
    },
    {
      company: 'HDFC LTD',
      priceRange: '₹ 1244 - 136',
      open: '2024-06-03',
      close: '2024-06-05',
      issueSize: '830.15 Cr.',
      issueType: 'Book Built',
      listingDate: '2029-06-11',
      status: 'Comming',
    },
    {
      company: 'Tata Motor',
      priceRange: '₹ 629 - 136',
      open: '2024-06-01',
      close: '2024-06-05',
      issueSize: '820.15 Cr.',
      issueType: 'Book Built',
      listingDate: '2023-06-10',
      status: 'Ongoing',
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      'Ongoing': 'bg-green-100 text-green-800 border-green-200',
      'Comming': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'New Listed': 'bg-red-100 text-red-800 border-red-200',
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status as keyof typeof statusStyles] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/admin/dashboard" className="inline-flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Dashboard
              </Link>
              <div className="h-6 border-l border-gray-300"></div>
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
            <h1 className="text-2xl font-semibold text-gray-900">Upcomming IPO | Dashboard</h1>
            <Link to="/admin/register-ipo">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Register IPO
              </Button>
            </Link>
          </div>

          {/* IPO Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price Band
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Open
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Close
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Issue Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Issue Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Listing Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Delete/View
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ipoData.map((ipo, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {ipo.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {ipo.priceRange}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {ipo.open}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {ipo.close}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {ipo.issueSize}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {ipo.issueType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {ipo.listingDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(ipo.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                          Update
                        </Button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-50">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <Button variant="outline" size="sm" className="rounded-l-md">1</Button>
                    <Button variant="outline" size="sm">2</Button>
                    <span className="px-3 py-2 text-sm text-gray-500">...</span>
                    <Button variant="outline" size="sm">9</Button>
                    <Button variant="outline" size="sm">10</Button>
                    <Button variant="outline" size="sm" className="rounded-r-md">
                      <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                    </Button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminManageIPO;

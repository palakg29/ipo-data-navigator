
import React, { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown, Eye, Trash2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import AdminSidebar from '@/components/AdminSidebar';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/hooks/useAuth';

interface IPO {
  id: string;
  company_name: string;
  price_min: number;
  price_max: number;
  open_date: string;
  close_date: string;
  issue_size: string;
  issue_type: string;
  listing_date?: string;
  status: string;
}

const AdminManageIPO = () => {
  const [ipos, setIpos] = useState<IPO[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchIPOs();
  }, []);

  const fetchIPOs = async () => {
    try {
      const { data, error } = await supabase
        .from('ipos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setIpos(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load IPOs",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this IPO?')) return;

    try {
      const { error } = await supabase
        .from('ipos')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({
        title: "Success",
        description: "IPO deleted successfully"
      });
      fetchIPOs();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete IPO",
        variant: "destructive"
      });
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      'Ongoing': 'bg-green-100 text-green-800 border-green-200',
      'Upcoming': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Listed': 'bg-blue-100 text-blue-800 border-blue-200',
      'Closed': 'bg-red-100 text-red-800 border-red-200',
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status as keyof typeof statusStyles] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/admin/dashboard" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">
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
              <Button variant="ghost" size="sm" className="relative transition-all duration-300 hover:scale-105">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-2 h-2"></span>
              </Button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">A</span>
                </div>
                <span className="text-sm font-medium">Hi, Admin</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700 transition-all duration-300 hover:scale-105"
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">IPO Management Dashboard</h1>
            <Link to="/admin/register-ipo">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105">
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
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ipos.map((ipo) => (
                    <tr key={ipo.id} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {ipo.company_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ₹{ipo.price_min} - ₹{ipo.price_max}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(ipo.open_date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(ipo.close_date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {ipo.issue_size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {ipo.issue_type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {ipo.listing_date ? new Date(ipo.listing_date).toLocaleDateString() : 'TBD'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(ipo.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Link to={`/admin/register-ipo?edit=${ipo.id}`}>
                            <Button 
                              size="sm" 
                              className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:scale-105"
                            >
                              Update
                            </Button>
                          </Link>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-red-600 border-red-600 hover:bg-red-50 transition-all duration-300 hover:scale-105"
                            onClick={() => handleDelete(ipo.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-gray-600 border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                          >
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
                <Button variant="outline" size="sm" className="transition-all duration-300 hover:scale-105">Previous</Button>
                <Button variant="outline" size="sm" className="transition-all duration-300 hover:scale-105">Next</Button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">{ipos.length}</span> of{' '}
                    <span className="font-medium">{ipos.length}</span> results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <Button variant="outline" size="sm" className="rounded-l-md transition-all duration-300 hover:scale-105">1</Button>
                    <Button variant="outline" size="sm" className="transition-all duration-300 hover:scale-105">2</Button>
                    <span className="px-3 py-2 text-sm text-gray-500">...</span>
                    <Button variant="outline" size="sm" className="transition-all duration-300 hover:scale-105">9</Button>
                    <Button variant="outline" size="sm" className="transition-all duration-300 hover:scale-105">10</Button>
                    <Button variant="outline" size="sm" className="rounded-r-md transition-all duration-300 hover:scale-105">
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

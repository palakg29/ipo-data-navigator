
import React, { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown, Eye, Trash2, ArrowLeft, Plus, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import AdminSidebar from '@/components/AdminSidebar';

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
  description?: string;
  lot_size?: number;
  minimum_investment?: number;
  total_applications?: number;
  total_amount_raised?: number;
}

const AdminManageIPO = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [ipos, setIpos] = useState<IPO[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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
    if (!confirm('Are you sure you want to delete this IPO? This action cannot be undone.')) return;

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
      
      fetchIPOs(); // Refresh the list
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete IPO",
        variant: "destructive"
      });
    }
  };

  const handleSignOut = async () => {
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

  const filteredIPOs = ipos.filter(ipo => 
    ipo.company_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <Link to="/admin/dashboard" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Dashboard
              </Link>
              <div className="h-6 border-l border-gray-300"></div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search IPOs..."
                  className="pl-10 w-80 bg-gray-50 border-gray-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative hover:scale-105 transition-transform duration-200">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-2 h-2"></span>
              </Button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">A</span>
                </div>
                <span className="text-sm font-medium">Hi, Admin</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              
              <Button 
                onClick={handleSignOut}
                variant="outline"
                className="hover:scale-105 transition-all duration-200"
              >
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">IPO Management Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage and monitor all IPO listings</p>
            </div>
            <Link to="/admin/register-ipo">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-200 shadow-md">
                <Plus className="w-4 h-4 mr-2" />
                Register New IPO
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Total IPOs</h3>
              <p className="text-2xl font-bold text-gray-900 mt-2">{ipos.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Active IPOs</h3>
              <p className="text-2xl font-bold text-green-600 mt-2">
                {ipos.filter(ipo => ipo.status === 'Ongoing').length}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Upcoming IPOs</h3>
              <p className="text-2xl font-bold text-yellow-600 mt-2">
                {ipos.filter(ipo => ipo.status === 'Upcoming').length}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Listed IPOs</h3>
              <p className="text-2xl font-bold text-blue-600 mt-2">
                {ipos.filter(ipo => ipo.status === 'Listed').length}
              </p>
            </div>
          </div>

          {/* IPO Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
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
                      Dates
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Issue Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applications
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredIPOs.map((ipo) => (
                    <tr key={ipo.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{ipo.company_name}</div>
                          <div className="text-sm text-gray-500">{ipo.issue_type}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ₹{ipo.price_min} - ₹{ipo.price_max}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div>
                          <div>Open: {new Date(ipo.open_date).toLocaleDateString()}</div>
                          <div>Close: {new Date(ipo.close_date).toLocaleDateString()}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {ipo.issue_size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(ipo.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {ipo.total_applications || 0}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Link to={`/admin/register-ipo?id=${ipo.id}`}>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="text-blue-600 border-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-gray-600 border-gray-300 hover:bg-gray-50 hover:scale-105 transition-all duration-200"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-red-600 border-red-600 hover:bg-red-50 hover:scale-105 transition-all duration-200"
                            onClick={() => handleDelete(ipo.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredIPOs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No IPOs found matching your search criteria.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminManageIPO;

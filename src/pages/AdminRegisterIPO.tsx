
import React, { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown, ArrowLeft, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import AdminSidebar from '@/components/AdminSidebar';

const AdminRegisterIPO = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editId = searchParams.get('id');
  const isEditing = !!editId;
  
  const [formData, setFormData] = useState({
    company_name: '',
    price_min: '',
    price_max: '',
    open_date: '',
    close_date: '',
    listing_date: '',
    issue_size: '',
    issue_type: 'Book Built',
    status: 'Upcoming',
    description: '',
    company_details: '',
    lot_size: '',
    minimum_investment: '',
    ipo_price: '',
    listing_price: '',
    listing_gain_percentage: '',
    current_market_price: '',
    current_return_percentage: '',
    rhp_document_url: '',
    drhp_document_url: ''
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditing) {
      fetchIPOData();
    }
  }, [editId]);

  const fetchIPOData = async () => {
    try {
      const { data, error } = await supabase
        .from('ipos')
        .select('*')
        .eq('id', editId)
        .single();

      if (error) throw error;
      
      // Convert the data to match form format
      setFormData({
        company_name: data.company_name || '',
        price_min: data.price_min?.toString() || '',
        price_max: data.price_max?.toString() || '',
        open_date: data.open_date || '',
        close_date: data.close_date || '',
        listing_date: data.listing_date || '',
        issue_size: data.issue_size || '',
        issue_type: data.issue_type || 'Book Built',
        status: data.status || 'Upcoming',
        description: data.description || '',
        company_details: data.company_details || '',
        lot_size: data.lot_size?.toString() || '',
        minimum_investment: data.minimum_investment?.toString() || '',
        ipo_price: data.ipo_price?.toString() || '',
        listing_price: data.listing_price?.toString() || '',
        listing_gain_percentage: data.listing_gain_percentage?.toString() || '',
        current_market_price: data.current_market_price?.toString() || '',
        current_return_percentage: data.current_return_percentage?.toString() || '',
        rhp_document_url: data.rhp_document_url || '',
        drhp_document_url: data.drhp_document_url || ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load IPO data",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const ipoData = {
        company_name: formData.company_name,
        price_min: parseFloat(formData.price_min),
        price_max: parseFloat(formData.price_max),
        open_date: formData.open_date,
        close_date: formData.close_date,
        listing_date: formData.listing_date || null,
        issue_size: formData.issue_size,
        issue_type: formData.issue_type,
        status: formData.status,
        description: formData.description,
        company_details: formData.company_details,
        lot_size: formData.lot_size ? parseInt(formData.lot_size) : null,
        minimum_investment: formData.minimum_investment ? parseFloat(formData.minimum_investment) : null,
        ipo_price: formData.ipo_price ? parseFloat(formData.ipo_price) : null,
        listing_price: formData.listing_price ? parseFloat(formData.listing_price) : null,
        listing_gain_percentage: formData.listing_gain_percentage ? parseFloat(formData.listing_gain_percentage) : null,
        current_market_price: formData.current_market_price ? parseFloat(formData.current_market_price) : null,
        current_return_percentage: formData.current_return_percentage ? parseFloat(formData.current_return_percentage) : null,
        rhp_document_url: formData.rhp_document_url,
        drhp_document_url: formData.drhp_document_url
      };

      if (isEditing) {
        const { error } = await supabase
          .from('ipos')
          .update(ipoData)
          .eq('id', editId);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "IPO updated successfully"
        });
      } else {
        const { error } = await supabase
          .from('ipos')
          .insert([{ ...ipoData, created_by: user?.id }]);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "IPO registered successfully"
        });
      }

      navigate('/admin/manage-ipo');
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to ${isEditing ? 'update' : 'register'} IPO`,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
      navigate('/admin/manage-ipo');
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/admin/manage-ipo" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to IPO Management
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">A</span>
                </div>
                <span className="text-sm font-medium">Hi, Admin</span>
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
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  {isEditing ? 'Edit IPO Information' : 'Register New IPO'}
                </h1>
                <p className="text-gray-600 mt-1">
                  {isEditing ? 'Update IPO details and information' : 'Enter comprehensive IPO details for registration'}
                </p>
              </div>
              <div className="flex space-x-3">
                <Button 
                  onClick={handleSubmit}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-200"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {loading ? 'Saving...' : (isEditing ? 'Update IPO' : 'Register IPO')}
                </Button>
                <Button 
                  onClick={handleCancel}
                  variant="outline"
                  className="hover:scale-105 transition-all duration-200"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 space-y-8">
              {/* Basic Information */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <Input
                      value={formData.company_name}
                      onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                      required
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Issue Size *
                    </label>
                    <Input
                      value={formData.issue_size}
                      onChange={(e) => setFormData({...formData, issue_size: e.target.value})}
                      placeholder="e.g., 2500 Cr."
                      required
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Minimum Price (₹) *
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      value={formData.price_min}
                      onChange={(e) => setFormData({...formData, price_min: e.target.value})}
                      required
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Maximum Price (₹) *
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      value={formData.price_max}
                      onChange={(e) => setFormData({...formData, price_max: e.target.value})}
                      required
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Issue Type
                    </label>
                    <select
                      value={formData.issue_type}
                      onChange={(e) => setFormData({...formData, issue_type: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Book Built">Book Built</option>
                      <option value="Fixed Price">Fixed Price</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Upcoming">Upcoming</option>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Listed">Listed</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Timeline</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Open Date *
                    </label>
                    <Input
                      type="date"
                      value={formData.open_date}
                      onChange={(e) => setFormData({...formData, open_date: e.target.value})}
                      required
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Close Date *
                    </label>
                    <Input
                      type="date"
                      value={formData.close_date}
                      onChange={(e) => setFormData({...formData, close_date: e.target.value})}
                      required
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Listing Date
                    </label>
                    <Input
                      type="date"
                      value={formData.listing_date}
                      onChange={(e) => setFormData({...formData, listing_date: e.target.value})}
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Investment Details */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Investment Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lot Size
                    </label>
                    <Input
                      type="number"
                      value={formData.lot_size}
                      onChange={(e) => setFormData({...formData, lot_size: e.target.value})}
                      placeholder="e.g., 50"
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Minimum Investment (₹)
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      value={formData.minimum_investment}
                      onChange={(e) => setFormData({...formData, minimum_investment: e.target.value})}
                      placeholder="e.g., 7500.00"
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Description</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Brief Description
                    </label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={3}
                      placeholder="Brief description of the company and IPO"
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Detailed Company Information
                    </label>
                    <Textarea
                      value={formData.company_details}
                      onChange={(e) => setFormData({...formData, company_details: e.target.value})}
                      rows={5}
                      placeholder="Detailed information about the company, business model, and growth prospects"
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Documents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      RHP Document URL
                    </label>
                    <Input
                      type="url"
                      value={formData.rhp_document_url}
                      onChange={(e) => setFormData({...formData, rhp_document_url: e.target.value})}
                      placeholder="https://example.com/rhp.pdf"
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      DRHP Document URL
                    </label>
                    <Input
                      type="url"
                      value={formData.drhp_document_url}
                      onChange={(e) => setFormData({...formData, drhp_document_url: e.target.value})}
                      placeholder="https://example.com/drhp.pdf"
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminRegisterIPO;

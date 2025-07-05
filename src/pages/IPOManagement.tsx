
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Pencil, Trash2, Plus } from 'lucide-react';
import Header from '@/components/Header';

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
}

const IPOManagement = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [ipos, setIpos] = useState<IPO[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIPO, setEditingIPO] = useState<IPO | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    company_name: '',
    price_min: '',
    price_max: '',
    open_date: '',
    close_date: '',
    issue_size: '',
    issue_type: 'Book Built',
    listing_date: '',
    status: 'Upcoming',
    description: ''
  });

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

  const resetForm = () => {
    setFormData({
      company_name: '',
      price_min: '',
      price_max: '',
      open_date: '',
      close_date: '',
      issue_size: '',
      issue_type: 'Book Built',
      listing_date: '',
      status: 'Upcoming',
      description: ''
    });
    setEditingIPO(null);
    setShowForm(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const ipoData = {
        ...formData,
        price_min: parseFloat(formData.price_min),
        price_max: parseFloat(formData.price_max),
        listing_date: formData.listing_date || null
      };

      if (editingIPO) {
        const { error } = await supabase
          .from('ipos')
          .update(ipoData)
          .eq('id', editingIPO.id);

        if (error) throw error;
        toast({
          title: "Success",
          description: "IPO updated successfully"
        });
      } else {
        const { error } = await supabase
          .from('ipos')
          .insert([ipoData]);

        if (error) throw error;
        toast({
          title: "Success",
          description: "IPO created successfully"
        });
      }

      resetForm();
      fetchIPOs();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save IPO",
        variant: "destructive"
      });
    }
  };

  const handleEdit = (ipo: IPO) => {
    setFormData({
      company_name: ipo.company_name,
      price_min: ipo.price_min.toString(),
      price_max: ipo.price_max.toString(),
      open_date: ipo.open_date,
      close_date: ipo.close_date,
      issue_size: ipo.issue_size,
      issue_type: ipo.issue_type,
      listing_date: ipo.listing_date || '',
      status: ipo.status,
      description: ipo.description || ''
    });
    setEditingIPO(ipo);
    setShowForm(true);
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Upcoming': return 'bg-yellow-100 text-yellow-800';
      case 'Ongoing': return 'bg-green-100 text-green-800';
      case 'Listed': return 'bg-blue-100 text-blue-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">IPO Management</h1>
            <p className="text-gray-600">Manage IPO listings and information</p>
          </div>
          <div className="flex space-x-4">
            <Button
              onClick={() => setShowForm(true)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New IPO
            </Button>
            <Button onClick={signOut} variant="outline">
              Sign Out
            </Button>
          </div>
        </div>

        {/* IPO Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">
              {editingIPO ? 'Edit IPO' : 'Add New IPO'}
            </h2>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <Input
                  value={formData.company_name}
                  onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Issue Size *
                </label>
                <Input
                  value={formData.issue_size}
                  onChange={(e) => setFormData({...formData, issue_size: e.target.value})}
                  placeholder="e.g., 1000 Cr"
                  required
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
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Open Date *
                </label>
                <Input
                  type="date"
                  value={formData.open_date}
                  onChange={(e) => setFormData({...formData, open_date: e.target.value})}
                  required
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
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Issue Type
                </label>
                <select
                  value={formData.issue_type}
                  onChange={(e) => setFormData({...formData, issue_type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="Upcoming">Upcoming</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Listed">Listed</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Listing Date (Optional)
                </label>
                <Input
                  type="date"
                  value={formData.listing_date}
                  onChange={(e) => setFormData({...formData, listing_date: e.target.value})}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={3}
                />
              </div>

              <div className="md:col-span-2 flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  {editingIPO ? 'Update IPO' : 'Create IPO'}
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* IPOs List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price Range
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Issue Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Open Date
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
                  <tr key={ipo.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{ipo.company_name}</div>
                      <div className="text-sm text-gray-500">{ipo.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{ipo.price_min} - ₹{ipo.price_max}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ipo.issue_size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(ipo.open_date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ipo.status)}`}>
                        {ipo.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(ipo)}
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(ipo.id)}
                          className="text-red-600 border-red-600 hover:bg-red-50"
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
        </div>
      </div>
    </div>
  );
};

export default IPOManagement;

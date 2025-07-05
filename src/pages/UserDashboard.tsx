
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface IPO {
  id: string;
  company_name: string;
  price_min: number;
  price_max: number;
  open_date: string;
  close_date: string;
  issue_size: string;
  status: string;
  description: string;
}

interface Subscription {
  id: string;
  ipo_id: string;
  ipos: IPO;
}

const UserDashboard = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [ipos, setIpos] = useState<IPO[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIPOs();
    if (user) {
      fetchSubscriptions();
    }
  }, [user]);

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

  const fetchSubscriptions = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_subscriptions')
        .select(`
          id,
          ipo_id,
          ipos (*)
        `)
        .eq('user_id', user.id);

      if (error) throw error;
      setSubscriptions(data || []);
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
    }
  };

  const toggleSubscription = async (ipoId: string) => {
    if (!user) return;

    const isSubscribed = subscriptions.some(sub => sub.ipo_id === ipoId);

    try {
      if (isSubscribed) {
        const { error } = await supabase
          .from('user_subscriptions')
          .delete()
          .eq('user_id', user.id)
          .eq('ipo_id', ipoId);

        if (error) throw error;
        toast({
          title: "Success",
          description: "Unsubscribed from IPO successfully"
        });
      } else {
        const { error } = await supabase
          .from('user_subscriptions')
          .insert({
            user_id: user.id,
            ipo_id: ipoId
          });

        if (error) throw error;
        toast({
          title: "Success",
          description: "Subscribed to IPO successfully"
        });
      }
      fetchSubscriptions();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update subscription",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Upcoming': return 'bg-yellow-100 text-yellow-800';
      case 'Ongoing': return 'bg-green-100 text-green-800';
      case 'Listed': return 'bg-blue-100 text-blue-800';
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
            <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.email}</p>
          </div>
          <Button onClick={signOut} variant="outline">
            Sign Out
          </Button>
        </div>

        {/* My Subscriptions */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">My IPO Subscriptions</h2>
          {subscriptions.length === 0 ? (
            <p className="text-gray-600">You haven't subscribed to any IPOs yet.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {subscriptions.map((subscription) => (
                <div key={subscription.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">{subscription.ipos.company_name}</h3>
                  <p className="text-gray-600 mb-4">{subscription.ipos.description}</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Price Range:</span> ₹{subscription.ipos.price_min} - ₹{subscription.ipos.price_max}</p>
                    <p><span className="font-medium">Issue Size:</span> {subscription.ipos.issue_size}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(subscription.ipos.status)}`}>
                      {subscription.ipos.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Available IPOs */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Available IPOs</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ipos.map((ipo) => {
              const isSubscribed = subscriptions.some(sub => sub.ipo_id === ipo.id);
              return (
                <div key={ipo.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold">{ipo.company_name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ipo.status)}`}>
                      {ipo.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{ipo.description}</p>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <p><span className="font-medium">Price Range:</span> ₹{ipo.price_min} - ₹{ipo.price_max}</p>
                    <p><span className="font-medium">Open Date:</span> {new Date(ipo.open_date).toLocaleDateString()}</p>
                    <p><span className="font-medium">Close Date:</span> {new Date(ipo.close_date).toLocaleDateString()}</p>
                    <p><span className="font-medium">Issue Size:</span> {ipo.issue_size}</p>
                  </div>

                  <Button
                    onClick={() => toggleSubscription(ipo.id)}
                    className={`w-full ${isSubscribed 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-purple-600 hover:bg-purple-700'
                    }`}
                  >
                    {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserDashboard;


import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/components/ui/use-toast';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signUp, signIn, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let result;
      if (isSignUp) {
        result = await signUp(email, password, fullName);
      } else {
        result = await signIn(email, password);
      }

      if (result.error) {
        toast({
          title: "Error",
          description: result.error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Success",
          description: isSignUp ? "Account created successfully!" : "Signed in successfully!"
        });
        if (!isSignUp) {
          navigate('/');
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">BLUESTOCK</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mt-4">
            {isSignUp ? 'Create an account' : 'Welcome back'}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name - Only for signup */}
          {isSignUp && (
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                className="w-full"
                required
              />
            </div>
          )}

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-base font-medium"
            disabled={loading}
          >
            {loading ? 'Please wait...' : (isSignUp ? 'Sign up' : 'Sign in')}
          </Button>

          {/* Toggle between Sign In/Sign Up */}
          <div className="text-center">
            <span className="text-gray-600 text-sm">
              {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
            </span>
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-purple-600 hover:text-purple-500 text-sm font-medium"
            >
              {isSignUp ? 'Sign in here' : 'Create account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;

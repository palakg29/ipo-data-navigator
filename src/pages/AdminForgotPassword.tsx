
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AdminForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8">
        {/* Back Button */}
        <Link to="/admin/login" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Link>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">BLUESTOCK</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mt-4">Forgot Password?</h1>
          <p className="text-gray-600 mt-2">
            Enter your email address to get the password reset link.
          </p>
        </div>

        <form onSubmit={handlePasswordReset} className="space-y-6">
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
              placeholder="hello@bluestock.in"
              className="w-full"
              required
            />
          </div>

          {/* Password Reset Button */}
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-base font-medium"
          >
            Password Reset
          </Button>

          {/* Back to Login */}
          <div className="text-center">
            <Link to="/admin/login" className="text-gray-600 hover:text-gray-500 text-sm">
              Back to login
            </Link>
          </div>
        </form>

        {/* reCAPTCHA at bottom right */}
        <div className="fixed bottom-4 right-4 bg-gray-100 border border-gray-300 rounded p-2 text-xs text-gray-500">
          <div>reCAPTCHA</div>
        </div>
      </div>
    </div>
  );
};

export default AdminForgotPassword;

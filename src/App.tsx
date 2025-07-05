
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import UserDashboard from "./pages/UserDashboard";
import IPOManagement from "./pages/IPOManagement";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSignup from "./pages/AdminSignup";
import AdminForgotPassword from "./pages/AdminForgotPassword";
import AdminManageIPO from "./pages/AdminManageIPO";
import AdminRegisterIPO from "./pages/AdminRegisterIPO";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            } />
            <Route path="/ipo-management" element={
              <ProtectedRoute>
                <IPOManagement />
              </ProtectedRoute>
            } />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/signup" element={<AdminSignup />} />
            <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
            <Route path="/admin/manage-ipo" element={<AdminManageIPO />} />
            <Route path="/admin/register-ipo" element={<AdminRegisterIPO />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Home from "@/pages/home";
import Menu from "@/pages/menu";
import Order from "@/pages/order";
import Checkout from "@/pages/checkout";
import About from "@/pages/about";
import SpecialOffer from "@/pages/specialOffers";
import PrivacyPolicy from "@/pages/privacyPolicy";
import TermsAndConditions from "@/pages/termsAndConditions";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

import { CartProvider } from "@/providers/CartProvider";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

import './styles/global.css'
import './styles/components.css'
import './styles/sections.css'

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <AuthProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen relative">
              <Navbar />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Menu" element={<Menu />} />
                  <Route path="/SpecialOffer" element={<SpecialOffer />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                  <Route path="/TC" element={<TermsAndConditions />} />
                  <Route path="/Order" element={<ProtectedRoute><Order /></ProtectedRoute>} />
                  <Route path="/Checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                </Routes>
              </div>
              <Footer />
            </div>
            {/* Toast Notifications */}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#fff',
                  color: '#363636',
                  padding: '16px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                },
                success: {
                  iconTheme: {
                    primary: '#10b981',
                    secondary: '#fff',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#ef4444',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </CartProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

// Protected Route Component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

export default App;

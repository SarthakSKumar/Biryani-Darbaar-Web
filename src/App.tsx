import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "@/pages/home";
import Menu from "@/pages/menu";
import Order from "@/pages/order";
import Checkout from "@/pages/checkout";
import About from "@/pages/About";
import SpecialOffer from "@/pages/specialOffers";
import PrivacyPolicy from "@/pages/privacyPolicy";
import TermsAndConditions from "@/pages/termsAndConditions";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

import SignInSignUpModal from "@/components/login";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

import { CartProvider } from "@/providers/CartProvider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
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
                <Route
                  path="/TC"
                  element={<TermsAndConditions />}
                />
                <Route
                  path="/Order"
                  element={
                    isAuthenticated ? (
                      <Order />
                    ) : (
                      <SignInSignUpModal
                        onClose={() => { }}
                        onSuccess={() => { }}
                      />
                    )
                  }
                />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </CartProvider>
      </Router>
    </>
  );
}

export default App;

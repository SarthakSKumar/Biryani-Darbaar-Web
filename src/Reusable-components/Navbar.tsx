import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import RedButton from "./RedButton";
import logo from "../assets/DABAAR.png";
import { Instagram, Phone, Mail, Menu, X, ShoppingCart } from "lucide-react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useCart } from "../context/CartContext";
import axios from "axios";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavItemClass = (path: string) => {
    return location.pathname === path
      ? "relative text-red-600 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600 after:transform after:scale-x-100 transition-all duration-300"
      : "relative text-neutral-700 hover:text-red-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600 after:transform after:scale-x-0 hover:after:scale-x-100 transition-all duration-300";
  };

  const totalItems = cartItems.reduce((sum: number, item) => sum + item.quantity, 0);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300 ${isScrolled
        ? "backdrop-blur-md"
        : "backdrop-blur-none"
        }`}
    >
      {/* Top bar with contact info */}
      <div className={`transition-all duration-300 bg-red-700`}>
        <div className="container-custom">
          <div className="flex justify-end items-center h-10 space-x-4">
            <a href="tel:+61460747490" className="flex items-center text-neutral-100 hover:text-neutral-300 transition-colors" aria-label="Call Biryani Darbaar">
              <Phone size={24} className="mr-1" />
              <span className="text-md font-medium hidden sm:inline">+61460747490</span>
            </a>
            {/* TODO */}
            <a href="mailto:info@biryanidarbaar.com" className="flex items-center text-neutral-100 hover:text-neutral-300 transition-colors" aria-label="Email Biryani Darbaar">
              <Mail size={24} className="mr-1" /> Email
            </a>
            <a href="https://www.instagram.com/biryanidarbaar_au/" target="_blank" rel="noreferrer" className="flex gap-1 items-center text-neutral-100 hover:text-neutral-300 transition-colors" aria-label="Follow us on Instagram">
              <Instagram size={21} className="mr-1" />
              <span className="text-sm font-medium hidden sm:inline">Follow us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Biryani Darbar"
                className="h-[165px] w-auto object-contain relative -top-4"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-neutral-900">
            <Link
              to="/"
              className={`${getNavItemClass("/")} px-4 py-2 text-lg font-medium`}
            >
              Home
            </Link>
            <Link
              to="/About"
              className={`${getNavItemClass("/about")} px-4 py-2 text-lg font-medium`}
            >
              About
            </Link>
            <Link
              to="/Menu"
              className={`${getNavItemClass("/menu")} px-4 py-2 text-lg font-medium`}
            >
              Menu
            </Link>
            <Link
              to="/SpecialOffer"
              className={`${getNavItemClass("/specialoffer")} px-4 py-2 text-lg font-medium`}
            >
              Special Offers
            </Link>
            <Link
              to="/Order"
              className={`${getNavItemClass("/order")} px-4 py-2 text-lg font-medium`}
            >
              Order Now
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Link to="/Order">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 bg-red-50 hover:bg-red-100 rounded-full transition-colors"
              >
                <ShoppingCart className="w-6 h-6 text-red-600" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.button>
            </Link>

            {/* Auth Button */}
            <div className="hidden lg:block">
              {!isAuthenticated ? (
                <RedButton variant="active" name="Download App" />
              ) : (
                <RedButton
                  variant="active"
                  name="Sign Out"
                  onClick={async () => {
                    const auth = getAuth();
                    await signOut(auth);
                    const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/logout`);
                    console.log("Sign out response:", res);
                    sessionStorage.clear();
                  }}
                />
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-neutral-600 hover:text-red-600 hover:bg-red-50 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-lg"
          >
            <div className="container-custom py-4 space-y-2">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors ${location.pathname === "/"
                  ? "bg-red-50 text-red-600"
                  : "text-neutral-700 hover:bg-red-50 hover:text-red-600"
                  }`}
              >
                Home
              </Link>
              <Link
                to="/About"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors ${location.pathname === "/about"
                  ? "bg-red-50 text-red-600"
                  : "text-neutral-700 hover:bg-red-50 hover:text-red-600"
                  }`}
              >
                About
              </Link>
              <Link
                to="/Menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors ${location.pathname === "/menu"
                  ? "bg-red-50 text-red-600"
                  : "text-neutral-700 hover:bg-red-50 hover:text-red-600"
                  }`}
              >
                Menu
              </Link>
              <Link
                to="/SpecialOffer"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors ${location.pathname === "/specialoffer"
                  ? "bg-red-50 text-red-600"
                  : "text-neutral-700 hover:bg-red-50 hover:text-red-600"
                  }`}
              >
                Special Offers
              </Link>
              <Link
                to="/Order"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors ${location.pathname === "/order"
                  ? "bg-red-50 text-red-600"
                  : "text-neutral-700 hover:bg-red-50 hover:text-red-600"
                  }`}
              >
                Order Now
              </Link>

              {/* Mobile Auth Button */}
              <div className="pt-4 border-t border-neutral-200">
                {!isAuthenticated ? (
                  <RedButton variant="active" name="Download App" className="w-full" />
                ) : (
                  <RedButton
                    variant="active"
                    name="Sign Out"
                    className="w-full"
                    onClick={async () => {
                      const auth = getAuth();
                      await signOut(auth);
                      const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/logout`);
                      console.log("Sign out response:", res);
                      sessionStorage.clear();
                      setIsMobileMenuOpen(false);
                    }}
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

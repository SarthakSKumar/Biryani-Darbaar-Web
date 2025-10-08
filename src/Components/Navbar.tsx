import React, { useState, useEffect } from "react";
import { Link, useLocation, Location } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import RedButton from "./RedButton";
import { Instagram, Phone, Menu, X, ShoppingCart, LogOut } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { navbarLinks } from "../constants/NavbarLinks";
import LoginModal from "./modals/LoginModal";
import RegisterModal from "./modals/RegisterModal";
import toast from "react-hot-toast";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  const { cartItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const location: Location = useLocation();

  useEffect(() => {
    const handleScroll = (): void => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string): boolean => location.pathname.toLowerCase() === path.toLowerCase();

  const getNavItemClass = (path: string): string =>
    `${isActive(path)
      ? "text-red-600 font-semibold after:scale-x-100"
      : "text-neutral-700 hover:text-red-600 after:scale-x-0 hover:after:scale-x-100"
    } relative px-4 py-2 text-lg font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600 after:transform transition-all duration-300`;

  const getMobileNavClass = (path: string): string =>
    `block py-3 px-4 rounded-lg text-base font-medium transition-colors ${isActive(path)
      ? "bg-red-50 text-red-600"
      : "text-neutral-700 hover:bg-red-50 hover:text-red-600"
    }`;

  const totalItems: number = cartItems.reduce((sum: number, item) => sum + item.quantity, 0);

  const handleSignOut = async (): Promise<void> => {
    try {
      await logout();
      toast.success("Successfully signed out");
      setIsMobileMenuOpen(false);
    } catch (error: unknown) {
      console.error("Logout error:", error);
      toast.error("Failed to sign out");
    }
  };

  const handleSignInClick = (): void => {
    setShowLoginModal(true);
  };

  const handleSwitchToRegister = (): void => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const handleSwitchToLogin = (): void => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 flex flex-col transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md" : "transparent backdrop-blur-none"
        }`}
    >
      <div className="bg-red-700">
        <div className="container-custom">
          <div className="flex justify-end items-center h-10 space-x-4">
            <a href="tel:+61460747490" className="flex items-center text-neutral-100 hover:text-neutral-300 transition-colors" aria-label="Call Biryani Darbaar">
              <Phone size={22} className="mr-1" />
              <span className="text-md font-medium hidden sm:inline">+61460747490</span>
            </a>
            <a href="https://www.instagram.com/biryanidarbaar_au/" target="_blank" rel="noreferrer" className="flex gap-1 items-center text-neutral-100 hover:text-neutral-300 transition-colors" aria-label="Follow us on Instagram">
              <Instagram size={21} className="mr-1" />
              <span className="text-md font-medium hidden sm:inline">Follow us</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/images/logo.png"
              alt="Biryani Darbaar - Logo"
              className="h-[165px] w-auto object-contain relative -top-4"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-neutral-900">
            {navbarLinks.map((link) => (
              <Link key={link.path} to={link.path} className={getNavItemClass(link.path)}>
                {link.label}
              </Link>
            ))}
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

            {/* Auth Button - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              {isAuthenticated && user ? (
                <>
                  <div className="flex items-center gap-3 bg-red-50 px-4 py-2 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                        {user.firstName[0]}{user.lastName[0]}
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900">
                          {user.firstName} {user.lastName}
                        </p>
                        <p className="text-xs text-gray-600">{user.email}</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                    title="Sign Out"
                  >
                    <LogOut size={20} />
                  </button>
                </>
              ) : (
                <RedButton
                  variant="active"
                  name="Sign In"
                  onClick={handleSignInClick}
                />
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-neutral-600 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
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
            className="lg:hidden bg-white/90 backdrop-blur-md border-t border-neutral-200 shadow-lg"
          >
            <div className="container-custom py-4 space-y-2">
              {navbarLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={getMobileNavClass(link.path)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Auth Button */}
              <div className="pt-4 border-t border-neutral-200">
                {isAuthenticated && user ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-red-50 px-4 py-3 rounded-lg">
                      <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                        {user.firstName[0]}{user.lastName[0]}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">
                          {user.firstName} {user.lastName}
                        </p>
                        <p className="text-xs text-gray-600">{user.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors font-semibold"
                    >
                      <LogOut size={20} />
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <RedButton
                    variant="active"
                    name="Sign In"
                    className="w-full"
                    onClick={handleSignInClick}
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={handleSwitchToRegister}
      />
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </nav>
  );
};

export default Navbar;

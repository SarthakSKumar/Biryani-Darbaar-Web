import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RedButton from "./RedButton";
import logo from "../assets/DABAAR.png";
import { Instagram, Phone, Mail, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Retrieve active item from localStorage when the component mounts
  useEffect(() => {
    const storedActiveItem = localStorage.getItem("activeNavItem");
    if (storedActiveItem) {
      setActiveItem(storedActiveItem);
    }
  }, []);

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    setIsMobileMenuOpen(false); // Close menu after clicking on a link
    localStorage.setItem("activeNavItem", itemName); // Store active item in localStorage
  };

  const getNavItemClass = (itemName: string) => {
    return itemName === activeItem
      ? "nav-button text-xl text-red-600"
      : "nav-button text-xl text-black";
  };

  return (
    <nav className="flex flex-col">
      <div className="bg-secondaryRed h-8">
        <div className="mr-4 flex justify-end">
          <Phone size={20} className="mx-2 mt-1" fill="black" />
          <Mail size={20} className="mx-2 mt-1" />
          <Instagram size={20} className="mx-2 mt-1" />
        </div>
      </div>
      <div className="bg-[linear-gradient(180deg,rgba(234,31,39,0.06)_0%,rgba(234,31,39,0)_100%)]">
        <div className="flex items-center justify-between p-4 sticky h-52">
          <div className="flex-shrink-0 h-52 ml-20">
            <img src={logo} alt="Product Logo" className="h-full" />
          </div>
          <div className="hidden md:flex space-x-11 mb-20">
            <Link
              to="/"
              className={getNavItemClass("Home")}
              onClick={() => handleItemClick("Home")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={getNavItemClass("About")}
              onClick={() => handleItemClick("About")}
            >
              About
            </Link>
            <Link
              to="/menu"
              className={getNavItemClass("Menu")}
              onClick={() => handleItemClick("Menu")}
            >
              Menu
            </Link>
            <Link
              to="/specialoffer"
              className={getNavItemClass("SpecialOffer")}
              onClick={() => handleItemClick("SpecialOffer")}
            >
              Special Offer
            </Link>
            <Link
              to="/order"
              className={getNavItemClass("Order")}
              onClick={() => handleItemClick("Order")}
            >
              Order
            </Link>
          </div>
          <div className="hidden md:block mb-20">
            <RedButton className="" variant="active" name="Download App" />
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            {isMobileMenuOpen ? (
              <X
                size={28}
                onClick={() => setIsMobileMenuOpen(false)}
                className="cursor-pointer"
              />
            ) : (
              <Menu
                size={28}
                onClick={() => setIsMobileMenuOpen(true)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="flex flex-col items-center space-y-4 mb-4 md:hidden">
            <Link
              to="/"
              className={getNavItemClass("Home")}
              onClick={() => handleItemClick("Home")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={getNavItemClass("About")}
              onClick={() => handleItemClick("About")}
            >
              About
            </Link>
            <Link
              to="/menu"
              className={getNavItemClass("Menu")}
              onClick={() => handleItemClick("Menu")}
            >
              Menu
            </Link>
            <Link
              to="/specialoffer"
              className={getNavItemClass("SpecialOffer")}
              onClick={() => handleItemClick("SpecialOffer")}
            >
              Special Offer
            </Link>
            <Link
              to="/order"
              className={getNavItemClass("Order")}
              onClick={() => handleItemClick("Order")}
            >
              Order
            </Link>
            <RedButton className="" variant="active" name="Download App" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

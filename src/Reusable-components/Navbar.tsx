import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RedButton from "./RedButton";
import logo from "../assets/DABAAR.png";
import { Instagram, Phone, Mail, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedActiveItem = localStorage.getItem("activeNavItem");
    if (storedActiveItem) {
      setActiveItem(storedActiveItem);
    }
  }, []);

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    setIsMobileMenuOpen(false); // Close menu after clicking on a link
    localStorage.setItem("activeNavItem", itemName);
  };

  const getNavItemClass = (itemName: string) => {
    return itemName === activeItem
      ? "nav-button text-xl text-red-600"
      : "nav-button text-xl text-black";
  };

  return (
    <nav className="relative flex flex-col">
      <div className="bg-secondaryRed h-8">
        <div className="mr-4 flex justify-end">
          <Phone size={20} className="mx-2 mt-1" fill="black" />
          <Mail size={20} className="mx-2 mt-1" />
          <Instagram size={20} className="mx-2 mt-1" />
        </div>
      </div>
      <div className="bg-[linear-gradient(180deg,rgba(234,31,39,0.06)_0%,rgba(234,31,39,0)_100%)]">
        <div className="flex items-center justify-between p-4 sticky h-48">
          <div className="h-36 mb-8 md:h-48 lg:ml-32 lg:mt-8 desktop: lp:ml-50">
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
          <div className="relative md:hidden flex items-center ml-4">
            {isMobileMenuOpen ? (
              <X
                size={28}
                onClick={() => setIsMobileMenuOpen(false)}
                className="cursor-pointer mt-10 mr-10"
              />
            ) : (
              <Menu
                size={28}
                onClick={() => setIsMobileMenuOpen(true)}
                className="cursor-pointer mt-10 mr-10 bg-red-600 rounded-md"
              />
            )}
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 bg-red-600 shadow-md z-10 transition-all duration-500 ease-in-out -mt-16 max-h-96 overflow-hidden ml-2  rounded-3xl w-80">
            <div className="flex flex-col items-center space-y-4 py-4 md:hidden">
              <Link
                to="/"
                className={`${
                  activeItem === "Home" ? "bg-white text-black" : "text-white"
                }  py-2 px-4 w-60 text-center rounded-lg transition-all`}
                onClick={() => handleItemClick("Home")}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  activeItem === "About" ? "bg-white text-black" : "text-white"
                } py-2 px-4 w-60 text-center rounded-lg transition-all`}
                onClick={() => handleItemClick("About")}
              >
                About
              </Link>
              <Link
                to="/menu"
                className={`${
                  activeItem === "Menu" ? "bg-white text-black" : "text-white"
                } py-2 px-4 w-60 text-center rounded-lg transition-all`}
                onClick={() => handleItemClick("Menu")}
              >
                Menu
              </Link>
              <Link
                to="/specialoffer"
                className={`${
                  activeItem === "SpecialOffer" ? "bg-white text-black" : "text-white"
                } py-2 px-4 w-60 text-center rounded-lg transition-all`}
                onClick={() => handleItemClick("SpecialOffer")}
              >
                Special Offer
              </Link>
              <Link
                to="/order"
                className={`${
                  activeItem === "Order" ? "bg-white text-black" : "text-white"
                } py-2 px-4 w-60 text-center rounded-lg transition-all`}
                onClick={() => handleItemClick("Order")}
              >
                Order
              </Link>
              <RedButton className="mt-2" variant="active" name="Download App" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

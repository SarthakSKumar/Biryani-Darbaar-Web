import React, { useState } from "react";
import { Link } from "react-router-dom";
import RedButton from "./RedButton";
import logo from "../assets/DABAAR.png";
import { Instagram, Phone, Mail } from "lucide-react";

const Navbar: React.FC = () => {
  // State to track the currently clicked nav item
  const [activeItem, setActiveItem] = useState<string>("Home");

  // Function to handle click event and set the clicked item as active
  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    console.log(itemName);
  };

  // Function to get the appropriate class for each nav item
  const getNavItemClass = (itemName: string) => {
    return itemName === activeItem
      ? "nav-button text-xl text-red-600"
      : "nav-button text-xl text-black";
  };

  return (
    <nav className="flex flex-col ">
      <div className="bg-secondaryRed h-8">
        <div className="mr-4 flex justify-end">
          <Phone size={20} className="mx-2 mt-1" fill="black" />
          <Mail size={20} className="mx-2 mt-1" />
          <Instagram size={20} className="mx-2 mt-1" />
        </div>
      </div>
      <div className="bg-[linear-gradient(180deg,rgba(234,31,39,0.06)_0%,rgba(234,31,39,0)_100%)]">
        <div className="flex items-center justify-between p-4 sticky h-36 ">
          <div className="flex-shrink-0 h-36 ml-20">
            <img src={logo} alt="Product Logo" className="h-full" />
          </div>
          <div className="flex space-x-11 mb-20">
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
          <div className="mb-20">
            <RedButton className="" variant="active" name="Download App" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import RedButton from "./RedButton";
import logo from "../assets/DABAAR.png";
import { Instagram, Phone, Mail, Menu, X } from "lucide-react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import axios from "axios";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const getNavItemClass = (path: string) => {
    return location.pathname === path
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
          <div className="h-36 mb-8 md:h-48 lg:ml-32 lg:mt-8 desktop: lp:ml-50 ">
            <Link to="/">
              <img
                src={logo}
                alt="Product Logo"
                className="h-full dp1:w-56 dp1:h-56 dp2:w-60 dp2:h-60 dp3:w-60 dp3:h-60"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-11 mb-20 ">
            <Link
              to="/"
              className={`${getNavItemClass("/")} dp1:text-2xl dp2:text-3xl dp3:text-3xl`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${getNavItemClass("/about")} dp1:text-2xl dp2:text-3xl dp3:text-3xl`}
            >
              About
            </Link>
            <Link
              to="/menu"
              className={`${getNavItemClass("/menu")} dp1:text-2xl dp2:text-3xl dp3:text-3xl`}
            >
              Menu
            </Link>
            <Link
              to="/specialoffer"
              className={`${getNavItemClass("/specialoffer")} dp1:text-2xl dp2:text-3xl dp3:text-3xl`}
            >
              Special Offer
            </Link>
            <Link
              to="/order"
              className={`${getNavItemClass("/order")} dp1:text-2xl dp2:text-3xl dp3:text-3xl`}
            >
              Order
            </Link>
          </div>
          {!isAuthenticated ? (
            <div className="hidden md:block mb-20">
              <RedButton className="" variant="active" name="Download App" />
            </div>
          ) : (
            <div className="hidden md:block mb-20">
              <RedButton
                    className="mr-4"
                    variant="active"
                    name="Sign Out"
                    onClick={async () => {
                      const auth = getAuth();
                      await signOut(auth);
                      const res = await axios.post("http://localhost:3000/logout");
                      console.log("Sign out response:", res);
                      sessionStorage.clear();
                    }}
                  />
            </div>
          )}
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
                  location.pathname === "/" ? "bg-white text-black" : "text-white"
                }  py-2 px-4 w-60 text-center rounded-lg transition-all`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  location.pathname === "/about" ? "bg-white text-black" : "text-white"
                } py-2 px-4 w-60 text-center rounded-lg transition-all`}
              >
                About
              </Link>
              <Link
                to="/menu"
                className={`${
                  location.pathname === "/menu" ? "bg-white text-black" : "text-white"
                } py-2 px-4 w-60 text-center rounded-lg transition-all`}
              >
                Menu
              </Link>
              <Link
                to="/specialoffer"
                className={`${
                  location.pathname === "/specialoffer" ? "bg-white text-black" : "text-white"
                } py-2 px-4 w-60 text-center rounded-lg transition-all`}
              >
                Special Offer
              </Link>
              <Link
                to="/order"
                className={`${
                  location.pathname === "/order" ? "bg-white text-black" : "text-white"
                } py-2 px-4 w-60 text-center rounded-lg transition-all`}
              >
                Order
              </Link>
              {!isAuthenticated ? (
                <div className="hidden md:block mb-20">
                  <RedButton
                    className=""
                    variant="active"
                    name="Download App"
                  />
                </div>
              ) : (
                <div className="hidden md:block mb-20">
                  <RedButton
                    className="mr-4"
                    variant="active"
                    name="Sign Out"
                    onClick={async () => {
                      const auth = getAuth();
                      await signOut(auth);
                      const res = await axios.post("http://localhost:3000/logout");
                      console.log("Sign out response:", res);
                      sessionStorage.clear();
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

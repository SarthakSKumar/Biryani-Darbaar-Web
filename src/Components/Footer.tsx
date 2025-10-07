import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/DABAAR.png";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f4c145] text-neutral-900 border-t border-neutral-200">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Social Section */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="Biryani Darbaar Logo"
              className="h-32 md:h-36 mb-6"
            />
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/biryanidarbaar_au/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all"
              >
                <Mail size={20} />
              </a>
              <a href="tel:+61460747490" 
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all"

              aria-label="Call Biryani Darbaar">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/About"
                  className="text-neutral-700 hover:text-primary transition-colors font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/Menu"
                  className="text-neutral-700 hover:text-primary transition-colors font-medium"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="text-neutral-700 hover:text-primary transition-colors font-medium"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/PrivacyPolicy"
                  className="text-neutral-700 hover:text-primary transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/TC"
                  className="text-neutral-700 hover:text-primary transition-colors font-medium"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-primary">
              Stay Connected
            </h4>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Subscribe to our newsletter for exclusive updates, delicious
              recipes, and special promotions delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 w-36 rounded-lg bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-red-600 transition-colors border border-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-200 py-6">
        <div className="container-custom">
          <p className="text-center text-neutral-600 text-sm md:text-base">
            &copy; {new Date().getFullYear()} Biryani Darbaar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

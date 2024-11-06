import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/DABAAR.png";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primaryYellow p-6 md:p-10 text-red-900">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Biryani Darbaar Logo" className="h-36 mr-60 md:mr-0" />
          <div className="flex mt-4 space-x-4 mr-60 md:mr-0">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <Facebook color="#000" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <Instagram color="#000" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <Twitter color="#000" />
            </a>
          </div>
        </div>

        {/* About Us Section */}
        <div className="flex md:gap-40 md:ml-0 ml-40 gap-2 md:mt-0 -mt-44">
        <div className="text-center md:text-left">
          <h4 className="md:text-lg font-semibold mb-2 text-red-600">About Us</h4>
          <ul>
            <li>
              <Link to="/about" className="text-base hover:text-red-600">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/menu" className="text-base hover:text-red-600">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-base hover:text-red-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/company" className="text-base hover:text-red-600">
                Company
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="text-center md:text-left">
          <h4 className="md:text-lg font-semibold mb-2 text-red-600">Company</h4>
          <ul>
            <li>
              <Link to="/partnership" className="text-base hover:text-red-600">
                Partnership
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-base hover:text-red-600">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-base hover:text-red-600">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="text-base hover:text-red-600">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
        </div>

        {/* Get in Touch Section */}
        <div className="ml-36 md:ml-0 md:text-left">
          <h4 className="text-lg font-semibold mb-2 text-red-600">Get in touch</h4>
          <p className="text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <form className="flex gap-4 md:gap-0 md:flex-row items-center md:items-start mt-4">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-full bg-yellow-600 text-white placeholder:text-zinc-300 focus:outline-none mb-3 md:mb-0 md:mr-3 w-full md:w-auto"
            />
            <button
              type="submit"
              className="bg-primary text-white p-2 rounded-full hover:bg-red-700 md:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className=" text-xs md:text-lg text-center mt-6 text-black">
        &copy; 2024 BIRYANI DARBAAR. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

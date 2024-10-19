import { FaClock, FaShoppingCart, FaMotorcycle } from "react-icons/fa";
import biryani from "../assets/biryani.png";
import InputSearch from "./InputSearch";

const SpecialOfferComponent = () => {
  return (
    <div className="bg-yellow-100 py-8 px-6 md:px-16 lg:px-20 rounded-lg shadow-lg relative flex flex-wrap md:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="flex-1 space-y-6">
        <p className="text-gray-700 text-sm">I'm lovin' it!</p>
        <h1 className="text-3xl md:text-5xl font-bold">SPECIAL OFFER</h1>

        {/* Order Information */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-white bg-black px-4 py-2 rounded-full">
            <FaShoppingCart className="mr-2" />
            <p>Minimum Order: 12 GBP</p>
          </div>
          <div className="flex items-center text-white bg-black px-4 py-2 rounded-full">
            <FaMotorcycle className="mr-2" />
            <p>Delivery in 20-25 Minutes</p>
          </div>
        </div>

        {/* Open Status */}
        <div className="bg-red-600 text-white px-6 py-3 rounded-full shadow-md inline-block">
          <FaClock className="inline-block mr-2" />
          Open until 3:00 AM
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex justify-center md:w-1/3 mt-6 md:mt-0 mb-5">
        <img
          src={biryani}
          alt="Special Offer Dish"
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <div className="absolute -bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
          <p className="text-4xl font-semibold">3.4</p>
          <div className="flex text-yellow-500 mb-2">
            <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-400">★</span>
          </div>
          <p className="text-gray-600 text-sm">1,360 reviews</p>
        </div>
      </div>

      {/* Search Input */}
      <InputSearch  className="mt-5" placeholder="Search Declicous Food" />
    </div>
  );
};

export default SpecialOfferComponent;

import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg hidden lg:block">
      <div className="p-6 text-xl font-bold">Menu</div>
      <ul className="space-y-6 p-6 text-lg">
        <li className="text-black font-semibold hover:text-red-600 cursor-pointer">STARTERS</li>
        <li className="text-black font-semibold hover:text-red-600 cursor-pointer">CHARCOAL KEBABS</li>
        <li className="text-black font-semibold hover:text-red-600 cursor-pointer">BIRYANI'S</li>
        <li className="text-black font-semibold hover:text-red-600 cursor-pointer">DRINKS</li>
        <li className="text-black font-semibold hover:text-red-600 cursor-pointer">CHICKEN CURRIES</li>
        <li className="text-black font-semibold hover:text-red-600 cursor-pointer">LAMB CURRIES</li>
        <li className="text-black font-semibold hover:text-red-600 cursor-pointer">DESSERTS</li>
        <li className="text-black font-semibold hover:text-red-600 cursor-pointer">BREADS/EXTRAS</li>
      </ul>
      <div className="p-6 bg-red-500 text-white rounded-lg mt-10 mx-6">
        <p className="font-bold">Special Offer</p>
        <p className="text-sm">First Order Discount</p>
      </div>
    </div>
  );
};

export default Sidebar;

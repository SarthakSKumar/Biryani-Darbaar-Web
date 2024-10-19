import React from "react";
import MenuCard from "./MenuCard";
import Sidebar from "./SideBar";
import biryani from "../../assets/biryani.png";
import mango from "../../assets/mango.png"
import circularbiryani from "../../assets/circularbiryani.png";

const menuItems = [
  {
    title: "MUTTON FRY",
    description: "HALF MUTTON",
    imageUrl: biryani, // replace with actual image URL
    prices: [
      { size: "Small", price: "21.50" },
      { size: "Medium", price: "25.00" },
      { size: "Large", price: "27.50" },
    ],
  },
  {
    title: "Mango Rasmalai",
    description: "1 CUP",
    imageUrl: mango, // replace with actual image URL
    prices: [
      { size: "Small", price: "21.50" },
      { size: "Medium", price: "25.00" },
      { size: "Large", price: "27.50" },
    ],
  },
  {
    title: "biryani",
    description: "1 CHICKEN LEG RICE",
    imageUrl: circularbiryani, // replace with actual image URL
    prices: [
      { size: "Small", price: "21.50" },
      { size: "Medium", price: "25.00" },
      { size: "Large", price: "27.50" },
    ],
  },
];

const MainOrderLayout: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-12 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Order from Biryani in Australia</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              prices={item.prices}
            />
          ))}
        </div>

        {/* My Basket Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-red-500 text-white py-3 px-8 rounded-lg font-bold text-xl hover:bg-red-600">
            My Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainOrderLayout;

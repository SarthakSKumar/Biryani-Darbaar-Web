import React, { useState } from "react";
import axios from "axios";
import MenuCard from "./MenuCard";
import Sidebar from "./SideBar";

const MainOrderLayout: React.FC = () => {
  interface MenuItem {
    dishId: string;
    name: string;
    description: string;
    image: string;
    price: number; // Single price value
    addons: {addonName: string, price: string | number}[]; // Add addOns property
  }

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const handleCategorySelect = (category: string) => {
    axios
      .get(`http://localhost:4200/dishes/category/${category}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        
        // Map the response data to match the structure we need for the state
        const menuItems = data.map(
          (item: {
            dishId: string;
            name?: string;
            dishName?: string;
            description: string;
            image: string;
            price: number;
            addons: {addonName: string, price: string | number}[];
          }) => ({
            name: item.name || item.dishName, // Handle both name fields

            description: item.description,

            image: item.image,

            price: item.price,

            addons: item.addons, // Assuming a single price value
          })
        );

        // Update the state with the fetched menu items
        setMenuItems(menuItems);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="flex mt-20">
      <Sidebar handleCategorySelect={handleCategorySelect} />

      <div className="flex-1 p-6 lg:p-12 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">
          Order from Biryani in Australia
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {menuItems.map((item) => (
            <MenuCard
              key={item.dishId} // Use unique dishId as key
              dishId={item.dishId}
              title={item.name}
              description={item.description}
              imageUrl={item.image}
              addOns={item.addons} // Pass addOns to the MenuCard component
              prices={[{ size: "Regular", price: item.price.toString() }]} // Convert price to match expected format
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

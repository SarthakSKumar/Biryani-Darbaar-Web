import React, { useState } from "react";
import axios from "axios";
import { Plus, Minus } from "lucide-react"; // Import icons
import CartModal from "../../Components/CartModal"; // Import CartModal component

interface MenuCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  dishId: string;
  addOns: {addonName: string, price: string | number}[]; // Add this line
}

const MenuCard: React.FC<MenuCardProps> = ({ title, description, imageUrl, price, dishId, addOns }) => {
  // console.log(addOns);
  console.log(dishId);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [isModalOpen, setIsModalOpen] = useState(false); // Add state for modal

  const updateQuantity = (orderId: string, change: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [orderId]: Math.max((prevQuantities[orderId] || 1) + change, 1),
    }));
  };

  const handleAddToCart = async (price: number, quantity: number) => {
    const userId = sessionStorage.getItem("sessionUserId");
    console.log(userId);

    const response = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/cart`, {
      userId: userId,
      dishId: dishId,
      name: title ,
      addons: addOns,
      price: price,
      image: imageUrl,
      description: description,
      quantity: quantity,
    });
    console.log(response.status);
    if (response.status === 201) {
      setIsModalOpen(true); // Open modal on successful add to cart
    }
    
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center">
        <img src={imageUrl} alt={title} className="w-24 h-24 rounded-full object-cover mr-4" />
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 w-full">{description}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="flex items-center">
          <button onClick={() => updateQuantity(dishId, -1)}>
            <Minus className="w-4 h-4" />
          </button>
          <span className="mx-2">{quantities[dishId] || 1}</span>
          <button onClick={() => updateQuantity(dishId, 1)}>
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <button
          className="bg-green-500 text-white min-w-5 rounded-md font-semibold hover:bg-green-600"
          onClick={() => handleAddToCart(price, quantities[dishId] || 1)}
        >
          ${price * (quantities[dishId] || 1)}
        </button>
      </div>
      {isModalOpen && <CartModal onClose={() => setIsModalOpen(false)} />} 
    </div>
  );
};

export default MenuCard;

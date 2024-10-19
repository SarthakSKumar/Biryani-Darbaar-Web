import React from "react";

interface MenuCardProps {
  title: string;
  description: string;
  imageUrl: string;
  prices: { size: string; price: string }[];
}

const MenuCard: React.FC<MenuCardProps> = ({ title, description, imageUrl, prices }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <div className="flex items-center">
        <img src={imageUrl} alt={title} className="w-24 h-24 rounded-full object-cover mr-4" />
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {prices.map((price, index) => (
          <button
            key={index}
            className="bg-green-500 text-white py-1 px-2 rounded-md font-semibold hover:bg-green-600"
          >
            {price.size} ${price.price}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;

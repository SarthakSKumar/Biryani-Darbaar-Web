import React from "react";
import axios from "axios";
interface MenuCardProps {
  title: string;
  description: string;
  imageUrl: string;
  prices: { size: string; price: string }[];
  dishId: string;
  addOns: {addonName: string, price: string | number}[]; // Add this line
}

const MenuCard: React.FC<MenuCardProps> = ({ title, description, imageUrl, prices, dishId, addOns }) => {
  // console.log(addOns);
  
  const handleAddToCart = async (price: string) => {
    const userId = sessionStorage.getItem("sessionUserId");
    console.log(userId);
    const cartResponse = await axios.post(`http://localhost:4200/getCart`, { userId });
    console.log("Kojja");
    
    if (cartResponse.data.length > 0) {
      console.log("Kojja munda kodakaaaa");
      
      console.log(cartResponse.data);
      for (const cartItem of cartResponse.data) {
        console.log(cartItem.dishId, dishId);
        if (cartItem.dishId === dishId) {
          
          const newQuantity = cartItem.quantity + 1;
          console.log(cartItem.cartItemId);
          const response = await axios.put(`http://localhost:4200/cart/${cartItem.cartItemId}`, {
            quantity: newQuantity,
            price: parseFloat(price) * newQuantity,
          });
          if (response.status === 200) {
            // Redirect to Order page or update UI accordingly
          }
          return;
        }
      }
    } 
      const response = await axios.post("http://localhost:4200/cart", {
        userId: userId,
        dishId: dishId,
        name: title,
        price: parseFloat(price),
        image: imageUrl,
        description: description,
        quantity: 1,
        addOns: addOns,
      });
      console.log(response.status);
      if (response.status === 201) {
        // Redirect to Order page or update UI accordingly
      }
    
  };

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
            onClick={() => handleAddToCart(price.price)}
          >
            {price.size} ${price.price}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;

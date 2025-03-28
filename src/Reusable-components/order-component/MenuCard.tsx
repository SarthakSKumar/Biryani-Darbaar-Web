// // MenuCard.tsx
// import React, { useState } from "react";
// import { Plus, Minus, ShoppingCart } from "lucide-react";
// import { useCart } from "../../Components/CartContext"; // Adjusted the path to match the likely location
// import { motion } from "framer-motion";

// interface MenuCardProps {
//   title: string;
//   description: string;
//   imageUrl: string;
//   price: number;
//   dishId: string;
// }

// const MenuCard: React.FC<MenuCardProps> = ({
//   title,
//   description,
//   imageUrl,
//   price,
//   dishId,
// }) => {
//   const { cartItems, addToCart, updateQuantity } = useCart();
//   const [localQuantity, setLocalQuantity] = useState(0);

//   const handleAddToCart = async () => {
//     const newQuantity = localQuantity === 0 ? 1 : localQuantity;
//     setLocalQuantity(newQuantity);
//     await addToCart(
//       { dishId, name: title, description, image: imageUrl, price },
//       newQuantity
//     );
//   };

//   const handleUpdateQuantity = (change: number) => {
//     const newQuantity = Math.max(localQuantity + change, 0);
//     setLocalQuantity(newQuantity);

//     const cartItem = cartItems.find((item) => item.dishId === dishId);
//     if (cartItem) {
//       updateQuantity(cartItem.cartItemId, change);
//     }
//   };

//   const displayQuantity =
//     cartItems.find((item) => item.dishId === dishId)?.quantity || localQuantity;

//   return (
//     <motion.div
//       className="menu-card bg-white shadow-md rounded-lg p-4 mb-6 hover:shadow-lg transition"
//       whileHover={{ scale: 1.02 }}
//     >
//       <div className="flex flex-col md:flex-row md:items-center">
//         <img
//           src={imageUrl}
//           alt={title}
//           className="w-24 h-24 rounded-full object-cover mr-4"
//         />
//         <div>
//           <h3 className="text-xl font-bold text-gray-800">{title}</h3>
//           <p className="text-sm text-gray-500">{description}</p>
//         </div>
//       </div>
//       <div className="mt-4 flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <button
//             onClick={() => handleUpdateQuantity(-1)}
//             className="p-1 rounded-full hover:bg-gray-200"
//           >
//             <Minus className="w-4 h-4 text-red-500" />
//           </button>
//           <span className="text-lg font-semibold">{displayQuantity}</span>
//           <button
//             onClick={() => handleUpdateQuantity(1)}
//             className="p-1 rounded-full hover:bg-gray-200"
//           >
//             <Plus className="w-4 h-4 text-red-500" />
//           </button>
//         </div>
//         <button
//           className="menu-card-btn bg-green-500 text-white px-4 py-2 rounded-md font-semibold flex items-center hover:bg-green-600 transition"
//           onClick={handleAddToCart}
//         >
//           <ShoppingCart className="w-5 h-5 mr-2" />$
//           {price * (displayQuantity || 1)}
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default MenuCard;

// MenuCard.tsx
import React, { useState } from "react";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "../../Components/CartContext";
import { motion } from "framer-motion";

interface MenuCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  dishId: string;
}

const MenuCard: React.FC<MenuCardProps> = ({
  title,
  description,
  imageUrl,
  price,
  dishId,
}) => {
  const { cartItems, addToCart, updateQuantity } = useCart();
  const [localQuantity, setLocalQuantity] = useState(0);

  const handleAddToCart = async () => {
    const newQuantity = localQuantity === 0 ? 1 : localQuantity;
    setLocalQuantity(newQuantity);
    await addToCart(
      { dishId, name: title, description, image: imageUrl, price },
      newQuantity
    );
  };

  const handleUpdateQuantity = (change: number) => {
    const newQuantity = Math.max(localQuantity + change, 0);
    setLocalQuantity(newQuantity);

    const cartItem = cartItems.find((item) => item.dishId === dishId);
    if (cartItem) {
      updateQuantity(cartItem.cartItemId, change);
    }
  };

  const displayQuantity =
    cartItems.find((item) => item.dishId === dishId)?.quantity || localQuantity;

  return (
    <motion.div
      className="menu-card bg-white shadow-md rounded-lg p-4 mb-6 hover:shadow-lg transition"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col md:flex-row md:items-center">
        <img
          src={imageUrl}
          alt={title}
          className="w-24 h-24 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleUpdateQuantity(-1)}
            className="p-1 rounded-full hover:bg-gray-200"
          >
            <Minus className="w-4 h-4 text-red-500" />
          </button>
          <span className="text-lg font-semibold">{displayQuantity}</span>
          <button
            onClick={() => handleUpdateQuantity(1)}
            className="p-1 rounded-full hover:bg-gray-200"
          >
            <Plus className="w-4 h-4 text-red-500" />
          </button>
        </div>
        <button
          className="menu-card-btn bg-green-500 text-white px-4 py-2 rounded-md font-semibold flex items-center hover:bg-green-600 transition"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-5 h-5 mr-2" />$
          {(price * (displayQuantity || 1)).toFixed(2)}{" "}
          {/* Fix decimal places */}
        </button>
      </div>
    </motion.div>
  );
};

export default MenuCard;

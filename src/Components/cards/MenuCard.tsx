import React from "react";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
  dishId,
}) => {
  const { cartItems, updateQuantity, addToCart } = useCart();

  // Get current quantity in cart
  const cartItem = cartItems.find((item) => item.dishId === dishId);
  const currentQuantity = cartItem?.quantity || 0;

  const handleUpdateQuantity = async (change: number, price: number, imageUrl: string) => {
    const cartItem = cartItems.find((item) => item.dishId === dishId);

    if (cartItem) {
      // update existing item quantity
      updateQuantity(cartItem.cartItemId, change);
    } else if (change > 0) {
      // add new item to cart
      await addToCart(
        { dishId, name: title, description, image: imageUrl, price },
        change
      );
    }
  };

  const sizeOptions = [
    { size: "Small", price: 21.9, popular: false },
    { size: "Medium", price: 25.9, popular: true },
    { size: "Large", price: 27.9, popular: false },
  ];

  return (
    <motion.div
      className="bg-white rounded-2xl border transition-all duration-300 p-6 w-full max-w-lg border-neutral-100"
      whileHover={{ scale: 1.02, y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header with image and info */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-neutral-800 mb-2 leading-tight">
            {title}
          </h3>

          {/* Spice level indicator */}
          <div className="flex items-center gap-2 mb-3">
            <img src="/assets/icons/chilli.png" alt="Biryani Darbaar - Spice Level" className="w-5 h-5" />
            <span className="text-sm text-orange-600 font-medium">Medium Spicy</span>
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative">
          <img
            src={imageUrl}
            alt={`Biryani Darbaar - ${title}`}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-md"
          />
          {currentQuantity > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {currentQuantity}
            </div>
          )}
        </div>
      </div>

      {/* Size options */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-neutral-700 mb-3">Select Quantity:</p>
        {sizeOptions.map((option) => (
          <motion.button
            key={option.size}
            className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all duration-200 ${option.popular
              ? 'border-green-500 bg-green-50 hover:bg-green-100'
              : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
              }`}
            onClick={() => handleUpdateQuantity(1, option.price, imageUrl)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <span className="font-medium text-neutral-800">{option.size}</span>
              {option.popular && (
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  Popular
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-lg">
                ${option.price.toFixed(2)}
              </span>
              <Plus className="w-4 h-4 text-green-600" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Quick add section if item already in cart */}
      {currentQuantity > 0 && (
        <motion.div
          className="mt-4 pt-4 border-t border-neutral-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between bg-neutral-50 rounded-lg p-3">
            <span className="text-sm font-medium text-neutral-700">In cart:</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => cartItem && updateQuantity(cartItem.cartItemId, -1)}
                className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors"
              >
                <Minus className="w-4 h-4 text-red-600" />
              </button>
              <span className="font-bold text-lg text-neutral-800 min-w-[2rem] text-center">
                {currentQuantity}
              </span>
              <button
                onClick={() => cartItem && updateQuantity(cartItem.cartItemId, 1)}
                className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors"
              >
                <Plus className="w-4 h-4 text-green-600" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MenuCard;

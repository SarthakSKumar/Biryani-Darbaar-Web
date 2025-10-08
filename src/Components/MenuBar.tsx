import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface SidebarProps {
  handleCategorySelect: (category: string) => void;
  handleOrdersSelect: () => void;
  handleClearOrders: () => void;
  activeCategory: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  handleCategorySelect,
  handleClearOrders,
  activeCategory,
}) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/categories`
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (category: string) => {
    handleClearOrders();
    handleCategorySelect(category);
  };

  return (
    <motion.aside
      className="w-full md:w-80 bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between h-fit md:h-screen md:sticky md:top-24 overflow-y-auto"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <img
          src="/assets/images/icons/spoon.png"
          alt="Biryani Darbaar - Menu"
          className="w-14 h-14"
        />
        <h2 className="text-2xl font-bold text-neutral-900">
          Menu
        </h2>
      </div>

      {/* Categories List */}
      <nav className="flex-1 space-y-2 mb-8">
        {categories.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${activeCategory === category
              ? "bg-primary text-white border border-primary"
              : "text-neutral-700 hover:bg-neutral-100 hover:text-primary border border-transparent"
              }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {category}
          </motion.button>
        ))}
      </nav>

      {/* Promotional Card */}
      <div className="relative rounded-lg overflow-hidden border border-neutral-200 group">
        <img
          src="/assets/images/order-girl.png"
          alt="Biryani Darbaar - First Order Discount"
          className="w-full h-80 object-cover"
        />

        {/* Dark gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Discount Badge */}
        <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-lg border border-neutral-700">
          -20%
        </div>

        {/* Text Content */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-red-500 text-sm font-semibold mb-1 drop-shadow-lg">
            Special Offer
          </p>
          <h3 className="text-white text-2xl font-bold drop-shadow-2xl">
            First Order Discount
          </h3>
        </div>

        {/* Add Button */}
        <button
          className="absolute bottom-4 right-4 bg-white hover:bg-primary text-neutral-900 hover:text-white p-2 rounded-full border border-neutral-200 hover:border-primary transition-all transform hover:scale-110"
          aria-label="Add offer"
        >
          <Plus size={20} className="stroke-current" strokeWidth={3} />
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;

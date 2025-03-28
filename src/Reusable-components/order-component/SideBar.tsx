// SideBar.tsx
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface SidebarProps {
  handleCategorySelect: (category: string) => void;
  handleOrdersSelect: () => void;
  handleClearOrders: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  handleCategorySelect,
  handleOrdersSelect,
  handleClearOrders,
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

  return (
    <motion.div
      className="sidebar sm:w-44 md:w-64 h-screen bg-white shadow-md"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-6 text-xl font-bold text-black">Menu</div>
      <ul className="space-y-6 p-6 text-lg">
        {categories.map((category, index) => (
          <motion.li
            key={index}
            className="text-black font-semibold hover:text-red-500 cursor-pointer transition"
            onClick={() => {
              handleClearOrders();
              handleCategorySelect(category);
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {category}
          </motion.li>
        ))}
      </ul>
      <motion.div
        className="sidebar-orders-btn p-3 bg-red-500 text-white rounded-lg mt-5 cursor-pointer mx-2 hover:bg-red-600 transition"
        onClick={handleOrdersSelect}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="font-bold">Orders</p>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;

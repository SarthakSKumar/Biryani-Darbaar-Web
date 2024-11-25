import { useState, useEffect } from "react";
import axios from "axios";

    interface SidebarProps {
      handleCategorySelect: (category: string) => void;
    }

    const Sidebar: React.FC<SidebarProps> = ({ handleCategorySelect }) => {
      const [categories, setCategories] = useState<string[]>([]);

      useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await axios.get("http://localhost:4200/categories");
            setCategories(response.data);
          } catch (error) {
            console.error("Error fetching categories:", error);
          }
        };

        fetchCategories();
      }, []);

      return (
        <div className="w-64 h-screen bg-white shadow-lg hidden lg:block">
          <div className="p-6 text-xl font-bold">Menu</div>
          <ul className="space-y-6 p-6 text-lg">
            {categories.map((category, index) => (
              <li
                key={index}
                className="text-black font-semibold hover:text-red-600 cursor-pointer"
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </li>
            ))}
          </ul>
          <div className="p-6 bg-red-500 text-white rounded-lg mt-10 mx-6">
            <p className="font-bold">Special Offer</p>
            <p className="text-sm">First Order Discount</p>
          </div>
        </div>
      );
    };

    export default Sidebar;
    
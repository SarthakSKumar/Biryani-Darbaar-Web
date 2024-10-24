import { useEffect, useState} from "react";
import axios from "axios";
import ArchedCard from "../Reusable-components/ArchedCard";
import SpecialOfferComponent from "../Reusable-components/SpecialOfferComponent";
import InfoPage from "../Reusable-components/InfoPage";
import LocationInfo from "../Reusable-components/LocationInfo";
import CustomerReviews from "../Reusable-components/CustomerReview";
import DineInMenuSlider from "../Reusable-components/DineInMenuSlider";
import { motion } from "framer-motion";
import InputSearch from "../Reusable-components/InputSearch";

const Menu = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://biryani-darbar-server.vercel.app/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
  interface Dish {
    image: string;
    name: string;
    description: string;
    price: number;
  }

  const [dishes, setDishes] = useState<{ [key: string]: Dish[] }>({});

  useEffect(() => {
    const fetchDishes = async () => {
      const dishesData: { [key: string]: Dish[] } = {};
      for (const category of categories) {
        try {
          const response = await axios.get(`https://biryani-darbar-server.vercel.app/dishes/category/${category}`);
          dishesData[category] = response.data;
        } catch (error) {
          console.error(`Error fetching data for category ${category}:`, error);
        }
      }
      setDishes(dishesData);
    };

    fetchDishes();
  }, [categories]);
  return (
    <>
    <SpecialOfferComponent />
    <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="ml-10 pt-10 w-1/2"
        >
          <InputSearch placeholder="Search Delicious Food" />
        </motion.div>
    {categories.map((category: string) => (
            <div key={category} className="mt-24">
              <div className="text-4xl font-bold ml-8">
                <span className="text-primary">{category}</span>
              </div>
              <div className="mt-5 text-sm md:text-base ml-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </div>
              <div className="mt-24 flex flex-wrap justify-evenly gap-6 grid grid-cols-3 ml-36 ">
                {dishes[category]?.map((dish, index) => (
                  <ArchedCard
                    key={index}
                    image={dish.image}
                    title={dish.name}
                    description={dish.description || "Delicious dishes"}
                    buttonTitle="Order Now"
                    price={`$${dish.price}`}
                    className="h-79"
                  />
                ))}
              </div>
            </div>
          ))}
          <InfoPage />
          <LocationInfo />
          <CustomerReviews />
          <DineInMenuSlider />
        </>
      );
    };

export default Menu;

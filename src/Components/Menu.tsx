import { useEffect, useState } from "react";
import axios from "axios";
import ArchedCard from "../Reusable-components/ArchedCard";
import SpecialOfferComponent from "../Reusable-components/SpecialOfferComponent";
import InfoPage from "../Reusable-components/InfoPage";
import LocationInfo from "../Reusable-components/LocationInfo";
import CustomerReviews from "../Reusable-components/CustomerReview";
import DineInMenuSlider from "../Reusable-components/DineInMenuSlider";
import { motion } from "framer-motion";
import InputSearch from "../Reusable-components/InputSearch";
import RedButton from "../Reusable-components/RedButton";
import "./Menu.css";
const Menu = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Chicken");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://biryani-darbar-server.vercel.app/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
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
          const response = await axios.get(
            `https://biryani-darbar-server.vercel.app/dishes/category/${category}`
          );
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
      <SpecialOfferComponent
        title="Briyani Darbaar in Atol Park"
        description="I'm Lovin' it!"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="ml-10 mt-10  pt-10 w-1/2"
      ></motion.div>
      <div className="mb-20 ml-10 w-1/2">
        <InputSearch placeholder="Search Delicious Food" />
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-28">
        {categories.map((category, index) => (
          <RedButton
            key={index}
            className="w-60"
            name={category}
            variant={activeCategory === category ? "active" : "inactive"}
            onClick={() => {
              setActiveCategory(category);
              console.log("Category clicked:", category); // Log the clicked category
              const element = document.getElementById(category);
              if (element) {
          element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        ))}
      </div>
      {categories.map((category: string) => (
        <div key={category} className="mt-24">
          <div className="text-4xl font-bold ml-28 -mb-20">
            <span id={category} className="text-primary">{category}</span>
          </div>
          <div className="mt-24 flex-col flex-wrap justify-evenly gap-6 lg:grid lg:grid-cols-3 ml-36 ">
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

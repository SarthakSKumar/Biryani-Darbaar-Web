import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomerReviews from "../sections/CustomerReviewSection";
import LocationInfo from "../sections/LocationSection";
import HeroSection from "../sections/HeroSection";
import SpecialOffersSection from "../sections/SpecialOffersSection";
import ServicesSection from "../sections/ServicesSection";
import MenuCategoriesSection from "../sections/MenuCategoriesSection";
import MobileAppSection from "../sections/MobileAppSection";
import InfoPage from "../sections/InfoSection";

const Home = () => {
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

    const intervalId = setInterval(fetchCategories, 10 * 60 * 1000); // 10 minutes

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>("Biryani's");
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT
          }/dishes/category/${activeCategory}`
        );
        setDishes(response.data);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    fetchDishes();
    const intervalId = setInterval(fetchDishes, 10 * 60 * 1000); // 10 minutes

    return () => clearInterval(intervalId);
  }, [activeCategory]);

  interface Dish {
    image: string;
    dishName?: string;
    name?: string;
    description?: string;
    price: number;
  }

  const [specialDishes, setSpecialDishes] = useState<Dish[]>([]);

  useEffect(() => {
    const fetchSpecialDishes = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/specialOffers`
        );
        setSpecialDishes(response.data);
      } catch (error) {
        console.error("Error fetching special dishes:", error);
      }
    };

    fetchSpecialDishes();
  }, []);

  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/menu?search=${query}`);
  };

  return (
    <div className="flex flex-col gap-20 md:gap-28">
      <HeroSection onSearch={handleSearch} />
      <SpecialOffersSection specialDishes={specialDishes} />
      <ServicesSection />
      <MenuCategoriesSection
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        dishes={dishes}
      />
      <MobileAppSection />
      <LocationInfo />
      <InfoPage />
      <CustomerReviews />
    </div>
  );
};

export default Home;

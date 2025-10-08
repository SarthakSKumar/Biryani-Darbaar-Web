import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoriesAPI, dishesAPI } from "@/apis";
import CustomerReviews from "@/components/sections/CustomerReviewSection";
import LocationInfo from "@/components/sections/LocationSection";
import HeroSection from "@/components/sections/home/HeroSection";
import SpecialOffersSection from "@/components/sections/home/SpecialOffersSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import MenuCategoriesSection from "@/components/sections/home/MenuCategoriesSection";
import MobileAppSection from "@/components/sections/home/MobileAppSection";
import InfoPage from "@/components/sections/InfoSection";
import { Dish } from "@/types";

const Home = () => {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await categoriesAPI.getCategories();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
                setCategories([]);
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
                const data = await dishesAPI.getDishesByCategory(activeCategory);
                setDishes(data);
            } catch (error) {
                console.error("Error fetching dishes:", error);
                setDishes([]);
            }
        };

        fetchDishes();
        const intervalId = setInterval(fetchDishes, 10 * 60 * 1000); // 10 minutes

        return () => clearInterval(intervalId);
    }, [activeCategory]);

    const [specialDishes, setSpecialDishes] = useState<Dish[]>([]);

    useEffect(() => {
        const fetchSpecialDishes = async () => {
            try {
                const data = await dishesAPI.getSpecialOffers();
                setSpecialDishes(data);
            } catch (error) {
                console.error("Error fetching special dishes:", error);
                setSpecialDishes([]);
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

import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import ArchedCard from "@/components/cards/ArchedCard";
import LargeImageView from "@/components/LargeImageView";
import InfoPage from "@/components/sections/InfoSection";
import CustomerReviews from "@/components/sections/CustomerReviewSection";
import ImageSlider from "@/components/sliders/ImageSlider";
import InputSearch from "@/components/InputSearch";
import RedButton from "@/components/RedButton";
import Loading from "@/components/Loading";
import { useLocation } from "react-router-dom";

const Menu = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>("Chicken");
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
    const [isLoadingDishes, setIsLoadingDishes] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const fetchCategories = async () => {
            setIsLoadingCategories(true);
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_ENDPOINT}/categories`
                );
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            } finally {
                setIsLoadingCategories(false);
            }
        };

        fetchCategories();
    }, []);

    const handleSearch = useCallback(
        (query: string) => {
            const category = categories.find((cat) =>
                cat.toLowerCase().includes(query.toLowerCase())
            );
            if (category) {
                setActiveCategory(category);
                const element = document.getElementById(category);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        },
        [categories]
    );

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchQuery = params.get("search");
        if (searchQuery) {
            handleSearch(searchQuery);
        }
    }, [location.search, handleSearch]);

    // Add scroll listener to update active category based on viewport
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset for better UX

            for (const category of categories) {
                const element = document.getElementById(category);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveCategory(category);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [categories]);

    interface Dish {
        image: string;
        dishName: string;
        description: string;
        price: number;
    }

    const [dishes, setDishes] = useState<{ [key: string]: Dish[] }>({});

    useEffect(() => {
        const fetchDishes = async () => {
            setIsLoadingDishes(true);
            const dishesData: { [key: string]: Dish[] } = {};
            for (const category of categories) {
                try {
                    const response = await axios.get(
                        `${import.meta.env.VITE_API_ENDPOINT}/dishes/category/${category}`
                    );
                    dishesData[category] = response.data;
                } catch (error) {
                    console.error(`Error fetching data for category ${category}:`, error);
                }
            }
            setDishes(dishesData);
            setIsLoadingDishes(false);
        };

        if (categories.length > 0) {
            fetchDishes();
        }
    }, [categories]);

    return (
        <div className="flex flex-col gap-20 md:gap-28">
            <div className="container-custom section-spacing mt-12">
                <div
                    className="absolute inset-0 max-h-screen"
                    style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url("/background.png")`,
                    }}
                />
                <LargeImageView
                    title="Biryani Darbaar in Athol Park"
                    description="Enjoy authentic biryani with fresh ingredients!"
                />
                <div className="flex justify-center">
                    <InputSearch
                        placeholder="Search for categories or dishes..."
                        onSearch={handleSearch}
                    />
                </div>
                {isLoadingCategories ? (
                    <Loading text="Loading categories..." />
                ) : (
                    <div className="flex flex-row justify-center items-center flex-wrap gap-3 mt-12">
                        {categories.map((category, index) => (
                            <RedButton
                                key={index}
                                className="w-60 flex-shrink-0"
                                name={category}
                                variant={activeCategory === category ? "active" : "inactive"}
                                onClick={() => {
                                    setActiveCategory(category);
                                    const element = document.getElementById(category);
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
            <ImageSlider />

            <div className="container-custom py-12">


                {isLoadingDishes ? (
                    <Loading text="Loading delicious dishes..." />
                ) : (
                    categories.map((category: string) => (
                        <div key={category}>
                            <h2
                                id={category}
                                className="text-4xl md:text-5xl font-bold text-primary mb-12 scroll-mt-24"
                            >
                                {category}
                            </h2>

                            {/* For mobile scrolling */}
                            <div className="flex overflow-x-auto gap-6 lg:hidden pb-4">
                                {dishes[category]?.map((dish, index) => (
                                    <div key={index} className="min-w-[280px]">
                                        <ArchedCard
                                            image={dish.image}
                                            title={dish.dishName}
                                            description={dish.description || "Delicious dishes"}
                                            buttonTitle="Order Now"
                                            price={`$${dish.price}`}
                                            className="h-full"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Show grid on larger screens */}
                            <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4">
                                {dishes[category]?.map((dish, index) => (
                                    <ArchedCard
                                        key={index}
                                        image={dish.image}
                                        title={dish.dishName}
                                        description={dish.description || "Delicious dishes"}
                                        buttonTitle="Order Now"
                                        price={`$${dish.price}`}
                                        className="h-full"
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
            <InfoPage />
            <CustomerReviews />
        </div>

    );
};

export default Menu;

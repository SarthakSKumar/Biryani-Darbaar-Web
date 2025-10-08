import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { categoriesAPI, dishesAPI } from "@/apis";
import ArchedCard from "@/components/cards/ArchedCard";
import LargeImageView from "@/components/LargeImageView";
import InfoPage from "@/components/sections/InfoSection";
import CustomerReviews from "@/components/sections/CustomerReviewSection";
import DiscountSection from "@/components/sections/DiscountSection";
import InputSearch from "@/components/InputSearch";
import Loading from "@/components/Loading";
import ErrorFallback from "@/components/ErrorFallback";

const Menu = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>("");
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
    const [isLoadingDishes, setIsLoadingDishes] = useState(false);
    const [categoryError, setCategoryError] = useState(false);
    const [dishesError, setDishesError] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const fetchCategories = async () => {
            setIsLoadingCategories(true);
            setCategoryError(false);
            try {
                const data = await categoriesAPI.getCategories();
                setCategories(data);
                // Set first category as active by default
                if (data.length > 0) {
                    setActiveCategory(data[0]);
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
                setCategoryError(true);
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
        dishName?: string;
        name?: string;
        description?: string;
        price: number;
    }

    const [dishes, setDishes] = useState<{ [key: string]: Dish[] }>({});

    useEffect(() => {
        const fetchDishes = async () => {
            setIsLoadingDishes(true);
            setDishesError(false);
            const dishesData: { [key: string]: Dish[] } = {};
            let hasError = false;

            for (const category of categories) {
                try {
                    const data = await dishesAPI.getDishesByCategory(category);
                    dishesData[category] = data;
                } catch (error) {
                    console.error(`Error fetching data for category ${category}:`, error);
                    hasError = true;
                }
            }
            setDishes(dishesData);
            setDishesError(hasError);
            setIsLoadingDishes(false);
        };

        if (categories.length > 0) {
            fetchDishes();
        }
    }, [categories]);

    return (
        <div className="flex flex-col gap-20 md:gap-28">
            <div className="container-custom section-spacing mt-12">
                <LargeImageView
                    title="Biryani Darbaar in Athol Park"
                    description="Enjoy authentic biryani with fresh ingredients!"
                />
                <div className="flex justify-center py-8">
                    <InputSearch
                        placeholder="Search for categories or dishes..."
                        onSearch={handleSearch}
                    />
                </div>
                <div className="flex flex-row justify-center items-center flex-wrap gap-3 mt-12">
                    {isLoadingCategories ? (
                        <Loading text="Loading categories..." />
                    ) : categoryError ? (
                        <ErrorFallback
                            message="Failed to load categories"
                            onRetry={() => window.location.reload()}
                        />
                    ) : (
                        <div className="flex flex-row justify-center items-center flex-wrap gap-3 mt-12">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`w-60 flex-shrink-0 px-6 py-3 rounded-lg font-semibold transition-all ${activeCategory === category
                                            ? 'bg-primary text-white border-2 border-primary shadow-lg'
                                            : 'bg-white text-neutral-700 border-2 border-neutral-300 hover:border-primary hover:text-primary'
                                        }`}
                                    onClick={() => {
                                        setActiveCategory(category);
                                        const element = document.getElementById(category);
                                        if (element) {
                                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <DiscountSection />

            <div className="container-custom py-12">


                {isLoadingDishes ? (
                    <Loading text="Loading delicious dishes..." />
                ) : dishesError ? (
                    <ErrorFallback
                        message="Failed to load dishes"
                        onRetry={() => window.location.reload()}
                    />
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
                                            title={dish.dishName || dish.name || "Delicious Dish"}
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
                                        title={dish.dishName || dish.name || "Delicious Dish"}
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

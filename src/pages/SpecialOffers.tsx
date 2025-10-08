import LargeImageView from "@/components/LargeImageView";
import ArchedCard from "@/components/cards/ArchedCard";
import { useEffect, useState } from "react";
import { dishesAPI } from "@/apis";
import DineInMenuSection from "@/components/sections/specialOffer/DineInMenuSection";
import DiscountSection from "@/components/sections/DiscountSection";

const SpecialOffer = () => {
    interface Dish {
        image: string;
        name?: string;
        dishName?: string;
        description?: string;
        price: number;
    }

    const [dishes, setDishes] = useState<Dish[]>([]);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const data = await dishesAPI.getSpecialOffers();
                setDishes(data);
            } catch (error) {
                console.error("Error fetching dishes:", error);
            }
        };

        fetchDishes();
    }, []);

    return (
        <div className="flex flex-col gap-20 md:gap-28">
            <div className="container-custom section-spacing mt-12">
                <LargeImageView
                    title="Special Offers"
                    description="Discover our exclusive deals and limited-time promotions on your favorite dishes."
                />
            </div>

            <DiscountSection />

            <div className="container-custom">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Today <span className="text-primary">special</span> offers
                    </h1>
                </div>

                <div className="mt-12">
                    {/* For mobile scrolling */}
                    <div className="flex overflow-x-auto gap-6 lg:hidden pb-4">
                        {dishes.map((dish, index) => (
                            <div key={index} className="min-w-[270px]">
                                <ArchedCard
                                    image={dish.image}
                                    title={dish.dishName || dish.name || "Delicious Dish"}
                                    description={dish.description || "Delicious dishes"}
                                    buttonTitle="Order Now"
                                    price={`$${dish.price.toString()}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Show grid on larger screens */}
                    <div className="hidden lg:grid lg:grid-cols-4 gap-4">
                        {dishes.map((dish, index) => (
                            <ArchedCard
                                key={index}
                                image={dish.image}
                                title={dish.dishName || dish.name || "Delicious Dish"}
                                description={dish.description || "Delicious dishes"}
                                buttonTitle="Order Now"
                                price={`$${dish.price.toString()}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <DineInMenuSection />
        </div>
    );
};

export default SpecialOffer;

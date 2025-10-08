import LargeImageView from "@/components/LargeImageView";
import ArchedCard from "@/components/cards/ArchedCard";
import { useEffect, useState } from "react";
import axios from "axios";
import DineInMenuSlider from "@/components/sliders/DineInMenuSlider";
import ImageSlider from "@/components/sliders/ImageSlider";

const SpecialOffer = () => {
    interface Dish {
        image: string;
        name: string;
        description: string;
        price: number;
    }

    const [dishes, setDishes] = useState<Dish[]>([]);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_ENDPOINT}/specialOffers`
                );
                setDishes(response.data);
            } catch (error) {
                console.error("Error fetching dishes:", error);
            }
        };

        fetchDishes();
    }, []);

    return (
        <>
            <div className="pt-24">
                <div className="container-custom">
                    <LargeImageView
                        title="Special Offer"
                        description="Discover our exclusive deals and limited-time promotions on your favorite dishes."
                    />
                </div>
            </div>

            {/* Image Slider */}
            <div className="section-spacing">
                <div className="container-custom">
                    <ImageSlider />
                </div>
            </div>

            {/* Today Special Offers Section */}
            <div className="py-20">
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
                                        title={dish.name}
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
                                    title={dish.name}
                                    description={dish.description || "Delicious dishes"}
                                    buttonTitle="Order Now"
                                    price={`$${dish.price.toString()}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Dine In Menu Slider Section */}
            <div className="container-custom">
                <DineInMenuSlider />
            </div>
        </>
    );
};

export default SpecialOffer;

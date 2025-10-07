import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ArchedCard from "../components/ArchedCard";
import Loading from "../components/Loading";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Dish {
    image: string;
    dishName?: string;
    name?: string;
    description?: string;
    price: number;
}

interface SpecialOffersSectionProps {
    specialDishes: Dish[];
}

const SpecialOffersSection: React.FC<SpecialOffersSectionProps> = ({ specialDishes }) => {
    return (
        <div className="w-full">
            <div className="container-custom">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold">
                        <span className="text-primary">Special</span> Offers Today
                    </h2>
                    <p className="mt-6 text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
                        Chicken Biryani is a delicious savory rice dish that is loaded with
                        spicy marinated chicken, caramelized onions, and flavorful saffron
                        rice.
                    </p>
                </div>

                <div className="mt-12 mb-4">
                    {specialDishes.length > 0 ? (
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={16}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                            pagination={{ clickable: true }}
                            navigation
                            className="arched"
                            style={{
                                "--swiper-navigation-color": "#d3d3d3",
                                "--swiper-navigation-size": "30px",
                                "--swiper-pagination-color": "#d3d3d3",
                                "--swiper-pagination-bullet-inactive-color": "#f0f0f0",
                                "--swiper-pagination-bottom": "-25px",
                            } as React.CSSProperties}
                        >
                            {specialDishes.map((dish, index) => (
                                <SwiperSlide key={index}>
                                    <ArchedCard
                                        image={dish.image}
                                        title={dish.dishName || dish.name || "Delicious Dish"}
                                        description={
                                            dish.description || "Delicious dish available now!"
                                        }
                                        buttonTitle="Order Now"
                                        price={`$${dish.price}`}
                                        className="h-fit w-[310px]"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <Loading text="Loading special offers..." />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpecialOffersSection;

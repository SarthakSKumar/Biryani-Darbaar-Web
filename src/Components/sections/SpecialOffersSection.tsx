import ArchedCard from "@/components/cards/ArchedCard";
import Loading from "@/components/Loading";
import UnifiedSlider from "@/components/sliders/UnifiedSlider";

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
    // Ensure specialDishes is always an array
    const dishes = Array.isArray(specialDishes) ? specialDishes : [];
    
    const sliderItems = dishes.map((dish) => ({
        content: (
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
        ),
    }));

    return (
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
                {dishes.length > 0 ? (
                    <UnifiedSlider
                        items={sliderItems}
                        slidesPerView={1}
                        autoplayDelay={3000}
                        autoplay={true}
                        spaceBetween={24}
                        loop={true}
                        pagination={true}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 24 },
                            768: { slidesPerView: 3, spaceBetween: 24 },
                            1024: { slidesPerView: 4, spaceBetween: 24 },
                        }}
                        className="arched"
                    />
                ) : (
                    <Loading text="Loading special offers..." />
                )}
            </div>
        </div>
    );
};

export default SpecialOffersSection;

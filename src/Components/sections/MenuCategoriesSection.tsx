import RedButton from "@/components/RedButton";
import ArchedCard from "@/components/cards/ArchedCard";
import Loading from "@/components/Loading";

interface Dish {
    image: string;
    dishName?: string;
    name?: string;
    description?: string;
    price: number;
}

interface MenuCategoriesSectionProps {
    categories: string[];
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    dishes: Dish[];
}

const MenuCategoriesSection: React.FC<MenuCategoriesSectionProps> = ({
    categories,
    activeCategory,
    setActiveCategory,
    dishes,
}) => {
    return (
        <div className="container-custom">
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold">
                    <span className="text-primary">Menu</span> that{" "}
                    <span className="text-primary">Always</span> makes you <br />
                    Fall in <span className="text-primary">Love</span>
                </h2>
            </div>

            {/* Category Buttons */}
            <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-4 mt-12">
                {categories.map((category, index) => (
                    <RedButton
                        key={index}
                        className="w-60 flex-shrink-0"
                        name={category}
                        variant={activeCategory === category ? "active" : "inactive"}
                        onClick={() => {
                            setActiveCategory(category);
                            console.log("Category clicked:", category);
                        }}
                    />
                ))}
            </div>

            {/* Dishes Section */}
            <div className="mt-14">
                <h3 className="text-4xl font-bold text-center">
                    {activeCategory}
                </h3>

                {dishes.length > 0 ? (
                    <>
                        {/* Mobile scrolling */}
                        <div className="flex overflow-x-auto gap-6 mt-8 lg:hidden">
                            {dishes.map((dish, index) => (
                                <div key={index} className="min-w-[270px]">
                                    <ArchedCard
                                        image={dish.image}
                                        title={dish.dishName || dish.name || "Delicious Dish"}
                                        description={
                                            dish.description || "Delicious dish available now!"
                                        }
                                        buttonTitle="Order Now"
                                        price={`$${dish.price}`}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Desktop grid */}
                        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mt-8">
                            {dishes.map((dish, index) => (
                                <ArchedCard
                                    key={index}
                                    image={dish.image}
                                    title={dish.dishName || dish.name || "Delicious Dish"}
                                    description={
                                        dish.description || "Delicious dish available now!"
                                    }
                                    buttonTitle="Order Now"
                                    price={`$${dish.price}`}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <Loading text="Loading dishes..." />
                )}
            </div>
        </div>
    );
};

export default MenuCategoriesSection;

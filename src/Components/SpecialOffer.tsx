import SpecialOfferComponent from "../Reusable-components/SpecialOfferComponent";
import ArchedCard from "../Reusable-components/ArchedCard";
import "./home.css";
import DineInMenuSlider from "../Reusable-components/DineInMenuSlider";

import { useEffect, useState } from "react";
import axios from "axios";

const SpecialOffer = () => {
  interface Dish {
    image: string;
    title: string;
    description: string;
    price: number;
  }

  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get(
          "https://biryani-darbar-server.vercel.app/dishes/special"
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
      {/* Special Offer Component with animation */}
      <SpecialOfferComponent />

      <div className="mt-14 text-center">
        <div className="mt-10 flex flex-wrap justify-evenly gap-6 ">
          {dishes.map((dish, index) => (
            <ArchedCard
              key={index}
              image={dish.image}
              title={dish.title || "Chicken Biryani"}
              description={dish.description || "Delicious dishes"}
              buttonTitle="Order Now"
              price={dish.price.toString()}
              className="h-79"
            />
          ))}
        </div>
      </div>
      <DineInMenuSlider />
    </>
  );
};

export default SpecialOffer;

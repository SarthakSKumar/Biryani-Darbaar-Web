import SpecialOfferComponent from "../Reusable-components/SpecialOfferComponent";
import { motion } from "framer-motion";
import InputSearch from "../Reusable-components/InputSearch";

import ArchedCard from "../Reusable-components/ArchedCard";
import "./home.css";
import DineInMenuSlider from "../Reusable-components/DineInMenuSlider";
import "./SpecialOrders.css";
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
        const response = await axios.get("http://localhost:3000/specialOffers");
        setDishes(response.data);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    fetchDishes();
  }, []);

  return (
    <>
      <SpecialOfferComponent
        title="SPECIAL OFFER"
        description="I'm Lovin' it!"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="search1  ml-6 md:ml-10  pt-10 md:w-1/2 w-3/4 desktop:mt-32 laptop:mt-32 dp1:mt-10 dp3:mt-10"
      >
        <InputSearch placeholder="Search Delicious Food" />
      </motion.div>

      <div className="tso md:mt-24 text-center">
        <h1 className="text-4xl font-bold dp3:text-6xl">
          Today <span className="text-red-500">special</span> offers
        </h1>
        <p className="mt-6 lg:ml-10 lg:mr-10 dp3:text-3xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="mt-10 md:ml-44">
          {/* For mobile scrolling */}
          <div className="flex overflow-x-auto gap-4 lg:hidden">
            {" "}
            {/* Flex container for horizontal scrolling */}
            {dishes.map((dish, index) => (
              <div key={index} className="min-w-[270px]">
                {" "}
                {/* Fixed width to scroll one by one */}
                <ArchedCard
                  image={dish.image}
                  title={dish.title || "Chicken Biryani"}
                  description={dish.description || "Delicious dishes"}
                  buttonTitle="Order Now"
                  price={`$${dish.price.toString()}`}
                  className="h-79"
                />
              </div>
            ))}
          </div>

          {/* Show grid on larger screens */}
          <div className=" hidden lg:grid lg:grid-cols-3  gap-4 desktop:-ml-24 laptop:-ml-36 dp1:ml-10 dp2:ml-10 dp3:ml-24">
            {dishes.map((dish, index) => (
              <ArchedCard
                key={index}
                image={dish.image}
                title={dish.title || "Chicken Biryani"}
                description={dish.description || "Delicious dishes"}
                buttonTitle="Order Now"
                price={`$${dish.price.toString()}`}
                className="h-79"
              />
            ))}
          </div>
        </div>
      </div>
      <DineInMenuSlider />
    </>
  );
};

export default SpecialOffer;

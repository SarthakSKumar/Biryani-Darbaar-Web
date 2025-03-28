import SpecialOfferComponent from "../Reusable-components/SpecialOfferComponent";
import ArchedCard from "../Reusable-components/ArchedCard";
import "./home.css";
import "./SpecialOrders.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion
import InfoPage from "../Reusable-components/InfoPage";
import CustomerReviews from "../Reusable-components/CustomerReview";
// import chefImage from "../assets/Chef.png";

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
      {/* Yellow Background Section: Only for SpecialOfferComponent */}
      <div className="yellow-background-section">
        <SpecialOfferComponent
          title="SPECIAL OFFER"
          description="I'm Lovin' it!"
        />
      </div>

      {/* Updated Section: Special Offers – Delicious Deals Await! */}
      <motion.div
        className="multiple-service-section flex flex-col md:flex-row justify-between items-start py-12 px-4 md:px-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left: Chef Image */}

        {/* Right: Content */}
        <motion.div
          className="w-full md:w-2/3 text-left md:pl-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4 text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Special Offers – Delicious Deals Await!
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            At Biryani Darbaar, we believe that great food tastes even better
            with amazing deals! Whether you’re a fan of our rich, aromatic
            Hyderabadi Biryani or our flavorful Indian dishes, we have special
            offers to make your dining experience even more enjoyable.
          </motion.p>

          {/* Limited-Time Offers */}
          <motion.h3
            className="text-xl md:text-2xl font-bold text-red-500 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            🔥 Limited-Time Offers 🔥
          </motion.h3>
          <ul className="space-y-3 mb-6">
            {[
              {
                text: "Family Feast Deal – Order 2 Large Biryanis and get 1 Small Biryani FREE! Perfect for a family treat!",
                emoji: "🎉",
              },
              {
                text: "Biryani & Kebab Combo – Enjoy a Large Chicken or Lamb Biryani with a side of Chicken Tikka or Seekh Kebab for just [Insert Price].",
                emoji: "🍗",
              },
              {
                text: "Meal for One – Get a Regular Biryani + Soft Drink for a special price of [Insert Price].",
                emoji: "🥤",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start text-base md:text-lg text-gray-600"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <span className="text-red-500 mr-2">{item.emoji}</span>
                {item.text}
              </motion.li>
            ))}
          </ul>

          {/* Weekly Specials */}
          <motion.h3
            className="text-xl md:text-2xl font-bold text-red-500 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            🎊 Weekly Specials 🎊
          </motion.h3>
          <ul className="space-y-3 mb-6">
            {[
              {
                text: "Monday Madness – Flat 10% OFF on all orders above [Insert Amount].",
                emoji: "📅",
              },
              {
                text: "Weekend Delight – FREE dessert with every order of $50 or more on Saturdays & Sundays.",
                emoji: "📅",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start text-base md:text-lg text-gray-600"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <span className="text-red-500 mr-2">{item.emoji}</span>
                {item.text}
              </motion.li>
            ))}
          </ul>

          {/* How to Avail These Offers */}
          <motion.h3
            className="text-xl md:text-2xl font-bold text-red-500 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            💥 How to Avail These Offers?
          </motion.h3>
          <ul className="space-y-3 mb-6">
            {[
              {
                text: "Order online through our website www.biryanidarbaar.com",
                emoji: "✅",
              },
              {
                text: "Apply the promo code [Insert Code] at checkout (if applicable).",
                emoji: "✅",
              },
              {
                text: "Call or visit us and mention the offer to our team.",
                emoji: "✅",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start text-base md:text-lg text-gray-600"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <span className="text-red-500 mr-2">{item.emoji}</span>
                {item.text}
              </motion.li>
            ))}
          </ul>

          {/* Closing Paragraph and Call to Action */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
          >
            Hurry! These special deals won’t last forever. Treat yourself to
            authentic Hyderabadi flavors at unbeatable prices!
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-600 font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9 }}
          >
            <span className="text-red-500 mr-2">📍</span> Visit Us or Order
            Online Now!
          </motion.p>
        </motion.div>
        {/* <motion.div
          className="w-full md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={chefImage}
            alt="Chef"
            className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/320?text=Image+Not+Found"; // Fallback if image fails to load
            }}
          />
        </motion.div> */}
      </motion.div>

      {/* Today Special Offers Section: Outside Yellow Background */}
      <div className="tso md:mt-12 text-center">
        <h1 className="text-4xl font-bold dp3:text-6xl">
          Today <span className="text-red-500">special</span> offers
        </h1>
        <p className="mt-6 lg:ml-10 lg:mr-10 dp3:text-3xl"></p>
        <div className="mt-10 md:ml-44">
          {/* For mobile scrolling */}
          <div className="flex overflow-x-auto gap-4 lg:hidden">
            {dishes.map((dish, index) => (
              <div key={index} className="min-w-[270px]">
                <ArchedCard
                  image={dish.image}
                  title={dish.name}
                  description={dish.description || "Delicious dishes"}
                  buttonTitle="Order Now"
                  price={`$${dish.price.toString()}`}
                  className="h-79"
                />
              </div>
            ))}
          </div>

          {/* Show grid on larger screens */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-4 desktop:-ml-24 laptop:-ml-36 dp1:ml-10 dp2:ml-10 dp3:ml-24">
            {dishes.map((dish, index) => (
              <ArchedCard
                key={index}
                image={dish.image}
                title={dish.name}
                description={dish.description || "Delicious dishes"}
                buttonTitle="Order Now"
                price={`$${dish.price.toString()}`}
                className="h-79"
              />
            ))}
          </div>
        </div>
      </div>
      <InfoPage />
      <CustomerReviews />
    </>
  );
};

export default SpecialOffer;

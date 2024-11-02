import { useEffect, useState } from "react";
import axios from "axios";
import InputSearch from "../Reusable-components/InputSearch";
import RedButton from "../Reusable-components/RedButton";
import RedWhip from "../Reusable-components/RedWhip";
import ArchedCard from "../Reusable-components/ArchedCard";
import order from "../assets/ordericon.png";
import cater from "../assets/cateringicon.png";
import girl from "../assets/Girl.png";
import circle1 from "../assets/mealcircle1.png";
import circle2 from "../assets/mealcircle2.png";
import circle3 from "../assets/mealcircle3.png";
import circle4 from "../assets/mealcircle4.png";
import img247 from "../assets/24.7.png";
import booking from "../assets/booking.png";
import orderB from "../assets/order.png";
import "./home.css";
import { motion } from "framer-motion";
import CustomerReviews from "../Reusable-components/CustomerReview";
import smily from "../assets/smilyicon.svg";
import star from "../assets/Star.svg";
import card1 from "../assets/card1.png";
import righttop from "../assets/right top corner.png";
import lefttop from "../assets/left top corner.png";
import rightbottom from "../assets/right lower corner.svg";
import leftbottom from "../assets/left lower corner.svg";
import chef from "../assets/Chef.png";
import leaves from "../assets/leaves.png";
import wire from "../assets/wire.svg";
import spices from "../assets/spices.png";
import android from "../assets/download1.png";
import apple from "../assets/download2.png";
import roundbg from "../assets/roundbg.png";
import chef2 from "../assets/chef2.png";

const Home = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://biryani-darbar-server.vercel.app/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();

    const intervalId = setInterval(fetchCategories, 10 * 60 * 1000); // 10 minutes

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>("Chicken");
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get(
          `https://biryani-darbar-server.vercel.app/dishes/category/${activeCategory}`
        );
        setDishes(response.data);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    fetchDishes();
    const intervalId = setInterval(fetchDishes, 10 * 60 * 1000); // 10 minutes

    return () => clearInterval(intervalId);
  }, [activeCategory]);

  interface Dish {
    image: string;
    dishName?: string;
    name?: string;
    description?: string;
    price: number;
  }

  const [specialDishes, setSpecialDishes] = useState<Dish[]>([]);

  useEffect(() => {
    // Fetch special dishes from the API endpoint
    fetch("https://biryani-darbar-server.vercel.app/dishes/special")
      .then((response) => response.json())
      .then((data) => setSpecialDishes(data))
      .catch((error) => console.error("Error fetching special dishes:", error));
  }, []);

  return (
    <>
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center p-6 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left md:ml-20 mb-20 -mt-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="text-left text-4xl md:text-6xl font-bold">
            <div>Experience The <br /> Ultimate Taste Best</div>
            <div>
              <span className="text-primary">Biryani In Adelaide</span>
            </div>
          </motion.div>
          <RedWhip className="mx-auto md:ml-80 mt-2" />
          <motion.div
            className="text-left text-2xl md:text-3xl mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Specializing in Mughlai cuisine
          </motion.div>
          <motion.div
            className="flex items-center md:justify-start bg-primary bg-opacity-10 rounded-2xl p-4 w-48 h-7 mt-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-center bg-primary rounded-full w-5 h-5 mr-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4.004 4.004 0 015.656 0L10 6.343l1.172-1.171a4.004 4.004 0 015.656 5.656l-6.343 6.343a.75.75 0 01-1.06 0L3.172 10.83a4.004 4.004 0 010-5.656z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="text-black text-xs font-medium">
              People Trust us
            </div>
          </motion.div>
          <motion.div className="mt-3">
            <InputSearch placeholder="Search Food" />
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <RedButton
              className="w-60"
              image={order}
              alt="order"
              name="ORDER FOOD"
              variant="active"
            />
            <div className="ml-4">
              <RedButton
                className="w-60"
                image={cater}
                alt="cater"
                name="BOOK-CATERING"
                variant="active"
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden md:block mr-20 -mt-20 mb-36"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <br />
          <div className="relative w-44 h-10 bg-white md:ml-72 ml-10 lg:ml-72 rounded-3xl flex justify-between items-center">
            <img className="w-9 " src={smily} alt="" />
            <div className="flex flex-col">
              <div className="text-xs mr-2 font-semibold">
                Our Happy Customer
              </div>
              <div className="flex  ">
                <img className="h-3 text-xs mt-0" src={star} alt="" />
                <span className="text-xs ml-1">4.9</span>
                <span className="text-xs ml-1">(1.989 Reviews)</span>
              </div>
            </div>
          </div>
          <div className="w-44 relative bg-white h-14 flex justify-start items-center flex-shrink-0 rounded-lg md:-ml-20 -ml-5 lg:-ml-10 -mb-28">
            <img className="w-12 ml-2 " src={card1} alt="" />
            <div className="flex flex-col ">
              <span className="whitespace-nowrap text-xs ml-3 -mt-0 font-bold">
                CHICKEN BIRYANI
              </span>
              <div className="ml-4 mt-1">
                <span className=" text-xs mt-4 ml-3">$</span>9.50
              </div>
            </div>
          </div>

          <div className="h-[410px] w-[410px] rounded-full bg-primary z-10 overflow-hidden mx-auto md:mx-0">
            <img
              src={girl}
              alt=""
              className="max-w-55 max-h-[500px] ml-5 -mt-24"
            />
          </div>
          <div className="w-[485px] h-[225px] border-[23px] border-shade  rounded-b-full border-t-0 -mt-48 md:-ml-9 -ml-4"></div>
          <motion.img
            className="-mt-56 -ml-20 w-32"
            src={circle1}
            alt=""
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            className=" w-44"
            src={circle2}
            alt=""
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            className="w-44  ml-48 -mt-32"
            src={circle3}
            alt=""
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            className="w-40 ml-80 -mt-72 -mr-5"
            src={circle4}
            alt=""
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
      <div className="mt-20 text-center">
  <div className="text-4xl font-bold">
    Today <span className="text-primary">Special</span> Offers
  </div>
  <div className="mt-5 text-sm md:text-base">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
  </div>
  <div className="mt-5 lg:ml-20 ml-10">
    {specialDishes.length > 0 ? (
      <div className="flex overflow-x-auto gap-6 lg:hidden"> {/* Flex for mobile scrolling */}
        {specialDishes.map((dish, index) => (
          <div className="min-w-[270px]"> {/* Fixed width for scrolling one by one */}
            <ArchedCard
              key={index}
              image={dish.image}
              title={dish.dishName || dish.name || "Delicious Dish"}
              description={dish.description || "Delicious dish available now!"}
              buttonTitle="Order Now"
              price={`$${dish.price}`}
              className="h-79"
            />
          </div>
        ))}
      </div>
    ) : (
      <div>Loading special offers...</div>
    )}
    <div className="hidden lg:grid lg:grid-cols-4 gap-6"> {/* Show grid on larger screens */}
      {specialDishes.map((dish, index) => (
        <ArchedCard
          key={index}
          image={dish.image}
          title={dish.dishName || dish.name || "Delicious Dish"}
          description={dish.description || "Delicious dish available now!"}
          buttonTitle="Order Now"
          price={`$${dish.price}`}
          className="h-79"
        />
      ))}
    </div>
  </div>
</div>

      <div className="segment flex flex-col md:flex-row justify-between">
        <div className="hidden  md:block">
          <div className="flex relative top-28 left-20">
            <img className=" " src={lefttop} alt="" />

            <img className=" " src={righttop} alt="" />
          </div>

          <div className="flex relative top-28 left-20">
            <img className=" " src={leftbottom} alt="" />

            <img className="" src={rightbottom} alt="" />
          </div>
          <div>
            <img
              className="relative -mt-[390px] ml-32 w-[350px] "
              src={chef}
              alt=""
            />
          </div>
          <img className="ml-[450px] -mt-[350px] " src={wire} alt="" />
          <img
            className="ml-[340px] -mt-[390px] relative"
            src={spices}
            alt=""
          />
          <img className="ml-32 mt-56 relative" src={leaves} alt="" />
        </div>
        <div className="flex flex-col md:mr-44 mr-18 mt-10">
          <div className="text-4xl md:text-6xl font-bold text-center ">
            We are <span className="text-primary">more</span> than <br />
            <span className="text-primary">multiple</span> service
          </div>
          <div className="mt-8 text-center">
            This is a type of resturent which typically serves food and drink,
            in addition to light <br /> refreshments such as baked goods or
            snacks. The term comes frome the rench <br /> word meaning food
          </div>
          <div className="ml-2 grid gap-4 grid-cols-2 md:grid-cols-2 grid-rows-3 mt-20">
            <div className="flex justify-between items-center w-32 font-medium">
              <img src={orderB} alt="" />
              Online Order
            </div>
            <div className="flex justify-between items-center w-32 font-medium">
              <img src={img247} alt="" />
              24/7 Services
            </div>
            <div className="flex justify-between items-center w-36 font-medium">
              <img src={booking} alt="" />
              Pre-Reservation
            </div>
            <div className="flex justify-between items-center w-56 font-medium">
              <img src={booking} alt="" />
              Organized Foodhut Place
            </div>
            <div className="flex justify-between items-center w-32 font-medium">
              <img src={booking} alt="" />
              Super Chef
            </div>
            <div className="flex justify-between items-center w-32 font-medium">
              <img src={booking} alt="" />
              Clean Kitchen
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 mr-36">
            <RedButton name="About Us" variant="active" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div className="text-center text-4xl font-bold">
          <span className="text-primary">Menu</span> That{" "}
          <span className="text-primary">Always</span> Make You <br />
          Fall In <span className="text-primary">Love</span>
        </div>
      </div>
      <br />

      <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-4 mt-4">
  {categories.map((category, index) => (
    <RedButton
      key={index}
      className="w-60 flex-shrink-0" // Keeps the button size consistent in the scrollable view
      name={category}
      variant={activeCategory === category ? "active" : "inactive"}
      onClick={() => {
        setActiveCategory(category);
        console.log("Category clicked:", category); // Log the clicked category
      }}
    />
  ))}
</div>

      <div className="mt-14 text-center">
  <div className="text-4xl font-bold">
    {activeCategory} <span className="text-primary">Dishes</span>
  </div>

  <div className="mt-5 ml-5 lg:ml-36">
    {/* For mobile scrolling */}
    {dishes.length > 0 ? (
      <div className="flex overflow-x-auto gap-6 lg:hidden"> {/* Flex container for horizontal scrolling */}
        {dishes.map((dish, index) => (
          <div key={index} className="min-w-[270px]"> {/* Fixed width to scroll one by one */}
            <ArchedCard
              image={dish.image}
              title={dish.dishName || dish.name || "Delicious Dish"}
              description={dish.description || "Delicious dish available now!"}
              buttonTitle="Order Now"
              price={`$${dish.price}`}
              className="h-79"
            />
          </div>
        ))}
      </div>
    ) : (
      <div>Loading dishes...</div>
    )}

    {/* Show grid on larger screens */}
    <div className="hidden lg:grid lg:grid-cols-3 gap-6">
      {dishes.map((dish, index) => (
        <ArchedCard
          key={index}
          image={dish.image}
          title={dish.dishName || dish.name || "Delicious Dish"}
          description={dish.description || "Delicious dish available now!"}
          buttonTitle="Order Now"
          price={`$${dish.price}`}
          className="h-79"
        />
      ))}
    </div>
  </div>
</div>

      <div className="segment">
        <div className="flex flex-col justify-around">
          <div className=" mt-10 text-center text-2xl md:text-left md:text-6xl font-bold md:mt-32 md:ml-16">
            It's Now <span className="text-primary">More Easy </span> to{" "}
            <span className="text-primary">Order</span> <br />
            by Our Mobile <span className="text-primary">App</span>
          </div>
          <div className=" ml-8 mr-8 mt-6 text-center md:text-left md:text-xl md:mt-16 md:ml-16">
            All you need to do is downlode one of the best delivery apps, <br />
            make a and most companies are opting for mobile app <br />
            devlopment for food delivery
          </div>
          <div className="flex justify-start items-center  md:w-96 md:mt-10 md:ml-10">
            <img className="md:w-96" src={android} alt="" />
            <img className="md:w-96 md:mt-2 mr-56" src={apple} alt="" />
          </div>
        </div>
        <div className="mb-20">
          <img className="ml-[950px] -mt-[250px]" src={roundbg} alt="" />
          <div className="w-[540px] h-[275px] border-[23px] border-shader  rounded-t-full border-b-0 ml-[920px] -mt-[520px]"></div>
          <img
            className="ml-[970px] -mt-[280px] h-[500px] "
            src={chef2}
            alt=""
          />
          <img className="ml-[1250px] -mt-[500px]" src={spices} alt="" />
          <img className="ml-[1300px] mt-52" src={leaves} alt="" />
        </div>
      </div>
      <CustomerReviews />
    </>
  );
};

export default Home;

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
import chickenbiryani from "../assets/chickenbiryani.svg";
import chickentikka from "../assets/chickentikka.svg";
import haleem from "../assets/haleem.svg";
import chicken65 from "../assets/chicken65.svg";
import chef from "../assets/Chef.png";
import img247 from "../assets/24.7.png";
import booking from "../assets/booking.png";
import orderB from "../assets/order.png";
import "./home.css";
import { motion } from "framer-motion";
import CustomerReviews from "../Reusable-components/CustomerReview";

const Home = () => {
  return (
    <>
      <motion.div
        className="bg-[linear-gradient(180deg,rgba(234,31,39,0.06)_0%,rgba(234,31,39,0)_100%)] flex flex-col md:flex-row justify-between items-center p-6 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left md:ml-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="text-4xl md:text-6xl font-bold">
            <div>Experience The Ultimate Taste Best</div>
            <div>
              <span className="text-primary">Biryani In Adelaide</span>
            </div>
          </motion.div>
          <RedWhip className="mx-auto md:ml-80 mt-2" />
          <motion.div
            className="text-2xl md:text-3xl mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Specializing in Mughlai cuisine
          </motion.div>
          <motion.div
            className="flex items-center justify-center md:justify-start bg-primary bg-opacity-10 rounded-2xl p-4 w-48 h-7 my-4 mt-5"
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
            <div className="text-black text-xs font-medium">People Trust us</div>
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
          className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="h-[300px] md:h-[410px] w-[300px] md:w-[410px] rounded-full bg-primary z-10 overflow-hidden">
              <img
                src={girl}
                alt="Girl with Biryani"
                className="max-w-full max-h-full ml-5 -mt-24"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <motion.img
                className="absolute top-0 left-0 w-24"
                src={circle1}
                alt=""
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.img
                className="absolute bottom-0 left-0 w-28"
                src={circle2}
                alt=""
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.img
                className="absolute top-0 right-0 w-28"
                src={circle3}
                alt=""
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />
              <motion.img
                className="absolute bottom-0 right-0 w-24"
                src={circle4}
                alt=""
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="mt-14 text-center">
        <div className="text-4xl font-bold">
          Today <span className="text-primary">Special</span> Offers
        </div>
        <div className="mt-5 text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
        <div className="mt-5 flex flex-wrap justify-evenly gap-6 ">
          {[chickenbiryani, chickentikka, haleem, chicken65].map((item, index) => (
            <ArchedCard
              key={index}
              image={item}
              title="Delicious Dish"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              buttonTitle="Order Now"
              price="$28.00"
              className="h-79 "
            />
          ))}
        </div>
      </div>
      <div className="bg-yellow-50 min-h-screen flex items-center justify-center p-6">
      <div className="mt-20 px-6 md:px-0 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Text */}
        <div className="flex flex-col md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold">
            We are <span className="text-red-500">more</span> than <br />
            <span className="text-red-500">multiple</span> service
          </h1>
          <p className="mt-8 text-sm md:text-base">
            This is a type of restaurant which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes from the French word meaning food.
          </p>

          {/* Service Grid */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            {[
              { src: orderB, label: "Online Order" },
              { src: img247, label: "24/7 Services" },
              { src: booking, label: "Pre-Reservation" },
              { src: booking, label: "Organized Food Place" },
              { src: booking, label: "Super Chef" },
              { src: booking, label: "Clean Kitchen" },
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-3 font-medium">
                <img src={service.src} alt={service.label} className="w-6 h-6" />
                {service.label}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button className="bg-red-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-600 transition duration-300">
              About Us
            </button>
          </div>
        </div>

        {/* Right Section - Chef Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <img
            src={chef} // Replace with your actual chef image path
            alt="Chef"
            className="w-3/4 h-auto rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
    <CustomerReviews />
      
    </>
  );
};

export default Home;

import { motion } from "framer-motion";
import { FaClock, FaShoppingCart, FaMotorcycle } from "react-icons/fa";
import biryani from "../assets/biryani.png";
import "./css/special.css";
interface SpecialProps {
  title: string;
  description: string;
}
const SpecialOfferComponent: React.FC<SpecialProps>  = ({title, description}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="card ml-5 mr-5 md:ml-10 md:mr-10 mb-4 py-1 px-6 md:px-16 laptop:px-20 rounded-lg shadow-lg relative flex flex-wrap  justify-between items-center opacity-5 "
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 space-y-6"
      >
        <div className=" break-words w-40 md:whitespace-nowrap md:mt-0 mt-2 laptop:mt-8">
        <h1 className="words1 text-gray-700 md:text-lg desktop:ml-0 laptop:-ml-16">{description}</h1>
        <h1 className="words text-3xl lg:text-5xl md:text-5xl font-bold desktop:ml-0 laptop:-ml-16">{title}</h1>
        </div>

        {/* Order Information */}
        <div className="flex items-center space-x-6">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center text-white bg-black md:px-4 md:py-2 lg:h-12 rounded-full mt-12 lg:text-base lg:mb-20"
          >
            <FaShoppingCart className="mr-2" />
            <p className="text-sm md:text-lg">Minimum Order: 12 GBP</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center text-white bg-black lg:h-12 md:px-4 md:py-2 lg:mb-20 rounded-full mt-12"
          >
            <FaMotorcycle className="mr-2" />
            <p className="text-sm md:text-lg lg:text-base">Delivery in 20-25 Minutes</p>
          </motion.div>
        </div>

        {/* Open Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="open bg-red-600 text-white md:px-6 md:py-3 px-3 py-1 rounded-br-lg rounded-tr-lg shadow-md inline-block fixed -bottom-28 -left-20 ml-14 md:ml-0"
        >
          <FaClock className="inline-block mr-2" />
          Open until 3:00 AM
        </motion.div>
        </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative flex justify-center md:w-1/3 mt-6 md:mt-0 mb-5"
      >
        <motion.img
          src={biryani}
          alt="Special Offer Dish"
          className="dish rounded-lg shadow-lg md:w-full md:h-auto md:ml-4 ml-44 md:mt-0 -mt-60  lg:ml-28 dp:mt-5 dp1:mt-5"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-0 -left-12 bg-white md:p-1 rounded-lg shadow-lg flex flex-col items-center md:ml-0 ml-48 mb-20 md:mb-0 lg:ml-12"
        >
          <p className="md:text-4xl text-3xl font-semibold">3.4</p>
          <div className="flex text-yellow-500 mb-2 text-sm">
            <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-400">★</span>
          </div>
          <p className="text-gray-600 md:text-sm text-xs">1,360 reviews</p>
        </motion.div>
      </motion.div>

      {/* Search Input */}


    </motion.div>

  );
};

export default SpecialOfferComponent;

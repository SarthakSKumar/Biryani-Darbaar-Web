import { motion } from "framer-motion";
// import { FaMotorcycle } from "react-icons/fa";
import { useState, useEffect } from "react";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import "./css/special.css";

interface SpecialProps {
  title: string;
  description: string;
}

const images = [image1, image2, image3, image4, image5, image6];

const SpecialOfferComponent: React.FC<SpecialProps> = ({
  title,
  description,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  // Image slider logic with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true);
      }, 500); // Fade transition duration
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`card mx-5 md:mx-10 mb-4 py-1 px-6 md:px-16 rounded-lg shadow-lg relative flex flex-col justify-center items-center ${
        fade ? "bg-fade-in" : "bg-fade-out"
      }`}
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-4"
        >
          <h1 className="text-gray-200 text-lg md:text-xl lg:text-2xl">
            {description}
          </h1>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            {title}
          </h1>

          {/* Delivery Information */}
          {/* <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center text-white bg-black bg-opacity-70 px-4 py-2 rounded-full mt-6"
          >
            <FaMotorcycle className="mr-2" />
            <p className="text-sm md:text-lg">Delivery in 20-25 Minutes</p>
          </motion.div> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SpecialOfferComponent;

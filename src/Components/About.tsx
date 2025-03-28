//import ArchedCard from "../Reusable-components/ArchedCard";
//import chickenbiryani from "../assets/chickenbiryani.svg";
//import InputSearch from "../Reusable-components/InputSearch";
//import RedButton from "../Reusable-components/RedButton";

import React from "react";
import "./about.css"; // Import the CSS file
import { motion } from "framer-motion"; // Import Framer Motion
import LocationInfo from "../Reusable-components/LocationInfo";
import CustomerReviews from "../Reusable-components/CustomerReview";
import InfoPage from "../Reusable-components/InfoPage";

const About: React.FC = () => {
  return (
    <>
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and 50px below
        animate={{ opacity: 1, y: 0 }} // Fade in and move to final position
        transition={{ duration: 0.6, ease: "easeOut" }} // 0.6s duration with easeOut
      >
        <section className="hero">
          <motion.h1
            initial={{ opacity: 0, x: -100 }} // Start invisible and 100px to the left
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to final position
            transition={{ duration: 0.8 }} // 0.8s duration
          >
            About Us
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }} // Start invisible
            animate={{ opacity: 1 }} // Fade in
            transition={{ delay: 0.5 }} // Start after 0.5s delay
          >
            Bringing the True Taste of Hyderabadi Biryani to Australia
          </motion.h3>
          <motion.h4
            initial={{ opacity: 0, scale: 0.8 }} // Start invisible and scaled down
            animate={{ opacity: 1, scale: 1 }} // Fade in and scale to full size
            transition={{ duration: 0.6 }} // 0.6s duration
          >
            At Biryani Darbaar, we bring you the authentic taste of Hyderabad
            right here in Australia! If you love bold flavors, aromatic spices,
            and melt-in-your-mouth biryani, you're in for a treat. Our biryani
            isn't just food—it's an experience, a royal feast that has been
            enjoyed for centuries in the land of the Nizams.
          </motion.h4>
        </section>

        <section className="content">
          <motion.h3
            initial={{ opacity: 0, x: -100 }} // Start invisible and 100px to the left
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to final position
            transition={{ duration: 0.8 }} // 0.8s duration
          >
            What Makes Our Biryani Special?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }} // Start invisible and scaled down
            animate={{ opacity: 1, scale: 1 }} // Fade in and scale to full size
            transition={{ duration: 0.6 }} // 0.6s duration
          >
            Hyderabadi Biryani is not your regular rice dish—it's a slow-cooked
            masterpiece. We use the finest basmati rice, juicy meat, and a
            unique blend of handpicked spices, all layered and cooked to
            perfection using the traditional Dum Pukht method. The result? A
            rich, aromatic, and flavor-packed biryani that will transport you
            straight to the streets of Hyderabad.
          </motion.p>

          <motion.img
            src="https://lh3.googleusercontent.com/p/AF1QipODwck4_Y4UsH3IAoWOuf_W7LB2fW_cmZ3zKrYU=s1360-w1360-h1020"
            alt="Hyderabadi Dish"
            className="full-width-image"
            initial={{ opacity: 0, x: 100 }} // Start invisible and 100px to the right
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to final position
            transition={{ duration: 0.8 }} // 0.8s duration
          />

          <motion.h3
            initial={{ opacity: 0, x: -100 }} // Start invisible and 100px to the left
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to final position
            transition={{ duration: 0.8 }} // 0.8s duration
          >
            More Than Just Biryani
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }} // Start invisible and scaled down
            animate={{ opacity: 1, scale: 1 }} // Fade in and scale to full size
            transition={{ duration: 0.6 }} // 0.6s duration
          >
            While our biryani is the star, we also serve various classic
            Hyderabadi dishes. Every dish is made with love and authenticity,
            from the creamy Haleem and spicy Mirchi Ka Salan to delicious
            curries and sizzling kebabs. And for those with a sweet tooth, our
            Qubani Ka Meetha (a traditional apricot dessert) is the perfect way
            to end your meal.
          </motion.p>
          <motion.img
            src="https://static.vecteezy.com/system/resources/thumbnails/024/650/050/small_2x/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai-free-photo.jpg"
            alt="Hyderabadi Dish"
            className="full-width-image"
            initial={{ opacity: 0, x: 100 }} // Start invisible and 100px to the right
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to final position
            transition={{ duration: 0.8 }} // 0.8s duration
          />

          <motion.h3
            initial={{ opacity: 0, x: -100 }} // Start invisible and 100px to the left
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to final position
            transition={{ duration: 0.8 }} // 0.8s duration
          >
            For Our Aussie Food Lovers
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }} // Start invisible and scaled down
            animate={{ opacity: 1, scale: 1 }} // Fade in and scale to full size
            transition={{ duration: 0.6 }} // 0.6s duration
          >
            We know Australia loves good food, and if you're a fan of Indian
            cuisine, you'll love our Hyderabadi flavors. Whether you're a
            die-hard biryani lover or trying it for the first time, we promise a
            hearty, flavorful, and unforgettable meal. So come over and enjoy a
            plate of real Hyderabadi Biryani—because great food is meant to be
            shared, and we can't wait to share ours with you! 🍛🔥 Visit us
            today and taste the magic.
          </motion.p>
        </section>
      </motion.div>
      <InfoPage />
      <LocationInfo />
      <CustomerReviews />
    </>
  );
};

export default About;

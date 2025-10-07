import React from "react";
import { motion } from "framer-motion";
import LocationInfo from "@/components/sections/LocationSection";
import CustomerReviews from "@/components/sections/CustomerReviewSection";
import InfoPage from "@/components/sections/InfoSection";

const About: React.FC = () => {
  return (
    <>
      <motion.div
        className="relative min-h-screen pt-"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Hero Section */}
        <section className="container-custom section-spacing mt-12">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-primary mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Bringing the True Taste of Hyderabadi Biryani to Australia
          </motion.h3>
          <motion.p
            className="text-lg text-neutral-600 w-full leading-relaxed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At Biryani Darbaar, we bring you the authentic taste of Hyderabad
            right here in Australia! If you love bold flavors, aromatic spices,
            and melt-in-your-mouth biryani, you're in for a treat. Our biryani
            isn't just food—it's an experience, a royal feast that has been
            enjoyed for centuries in the land of the Nizams.
          </motion.p>
        </section>

        {/* What Makes Our Biryani Special - Left/Right Layout */}
        <section className="container-custom flex flex-col gap-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What Makes Our Biryani Special?
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Hyderabadi Biryani is not your regular rice dish—it's a slow-cooked
                masterpiece. We use the finest basmati rice, juicy meat, and a
                unique blend of handpicked spices, all layered and cooked to
                perfection using the traditional Dum Pukht method. The result? A
                rich, aromatic, and flavor-packed biryani that will transport you
                straight to the streets of Hyderabad.
              </p>
            </motion.div>
            <motion.img
              src="https://static.vecteezy.com/system/resources/thumbnails/024/650/050/small_2x/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai-free-photo.jpg"
              alt="Delicious Hyderabadi Biryani"
              className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </section>

        {/* More Than Just Biryani - Right/Left Layout */}
        <section className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800"
              alt="Variety of Indian Dishes"
              className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-xl order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                More Than Just Biryani
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                While our biryani is the star, we also serve various classic
                Hyderabadi dishes. Every dish is made with love and authenticity,
                from the creamy Haleem and spicy Mirchi Ka Salan to delicious
                curries and sizzling kebabs. And for those with a sweet tooth, our
                Qubani Ka Meetha (a traditional apricot dessert) is the perfect way
                to end your meal.
              </p>
            </motion.div>
          </div>
        </section>

        {/* For Our Aussie Food Lovers - Left/Right Layout */}
        <section className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                For Our Aussie Food Lovers
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                We know Australia loves good food, and if you're a fan of Indian
                cuisine, you'll love our Hyderabadi flavors. Whether you're a
                die-hard biryani lover or trying it for the first time, we promise a
                hearty, flavorful, and unforgettable meal. So come over and enjoy a
                plate of real Hyderabadi Biryani—because great food is meant to be
                shared, and we can't wait to share ours with you! 🍛🔥 Visit us
                today and taste the magic.
              </p>
            </motion.div>
            <motion.img
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800"
              alt="Restaurant Ambience"
              className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </section>
      </motion.div>

      <div className="flex flex-col gap-20 md:gap-28">
        <InfoPage />
        <LocationInfo />
        <CustomerReviews />
      </div>
    </>
  );
};

export default About;

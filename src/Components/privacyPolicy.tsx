import React from "react";
import "./privacyPolicy.css"; // Import the CSS file
import { motion } from "framer-motion"; // Import Framer Motion
import LocationInfo from "../Reusable-components/LocationInfo";
import CustomerReviews from "../Reusable-components/CustomerReview";
import InfoPage from "../Reusable-components/InfoPage";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <motion.div
        className="privacy-policy-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <section className="hero hero-left">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Last Updated: March 23, 2025
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            At Biryani Darbaar, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy outlines
            how we collect, use, and safeguard your data when you visit our
            website or use our services. 🍚
          </motion.p>
        </section>

        <section className="content content-left">
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            1. Information We Collect
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            We may collect the following types of information: <br />
            <strong>Personal Information:</strong> Name, email address, phone
            number, and payment details when you place an order or book catering
            services. <br />
            <strong>Non-Personal Information:</strong> Browser type, IP address,
            and website usage data to improve our services.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            2. How We Use Your Information
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Your information helps us: <br />
            - Process orders and deliver food to you 🍗 <br />
            - Communicate updates, promotions, and offers 📧 <br />- Improve our
            website and customer experience 💻
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            3. How We Protect Your Data
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            We implement industry-standard security measures to protect your
            data, including encryption and secure payment gateways. However, no
            method is 100% secure, and we cannot guarantee absolute security. 🔒
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            4. Sharing Your Information
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            We do not sell your personal information. We may share it with:{" "}
            <br />
            - Delivery partners to fulfill your orders 🚚 <br />- Legal
            authorities if required by law 📜
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            5. Your Choices
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            You can: <br />
            - Opt-out of promotional emails at any time 📩 <br />- Request
            access to or deletion of your personal data by contacting us 📞
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            6. Contact Us
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            If you have any questions about this Privacy Policy, please reach
            out to us at: <br />
            <strong>Email:</strong> support@biryanidarbaar.com 📧 <br />
            <strong>Phone:</strong> +61 123 456 789 ☎️
          </motion.p>
        </section>
      </motion.div>
      <InfoPage />
      <LocationInfo />
      <CustomerReviews />
    </>
  );
};

export default PrivacyPolicy;

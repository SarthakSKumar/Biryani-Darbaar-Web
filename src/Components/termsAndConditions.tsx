import React from "react";
import "./termsAndConditions.css"; // Import the CSS file
import { motion } from "framer-motion"; // Import Framer Motion
import LocationInfo from "../Reusable-components/LocationInfo";
import CustomerReviews from "../Reusable-components/CustomerReview";
import InfoPage from "../Reusable-components/InfoPage";

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <motion.div
        className="terms-and-conditions-container"
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
            Terms and Conditions
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
            Welcome to Biryani Darbaar! These Terms and Conditions govern your
            use of our website and services. By accessing or using our services,
            you agree to be bound by these terms. If you do not agree, please do
            not use our services. 📜
          </motion.p>
        </section>

        <section className="content content-left">
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            1. Use of Our Services
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            You agree to use our services only for lawful purposes. You must
            not: <br />
            - Use our services to harm others or violate any laws 🚫 <br />
            - Attempt to gain unauthorized access to our systems 🔐 <br />-
            Misrepresent your identity or provide false information ℹ️
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            2. Ordering and Payments
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            When you place an order: <br />
            - You agree to provide accurate payment information 💳 <br />
            - All payments are processed securely, and refunds are subject to
            our refund policy 💸 <br />- We reserve the right to refuse service
            or cancel orders at our discretion 📦
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            3. Delivery and Catering
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            For delivery and catering services: <br />
            - Delivery times are estimates and may vary 🚚 <br />- You are
            responsible for providing accurate delivery information 📍 <br />-
            Catering orders must be placed at least 48 hours in advance 🍴
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            4. Intellectual Property
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            All content on our website, including images, logos, and recipes, is
            the property of Biryani Darbaar and protected by copyright laws. You
            may not: <br />
            - Reproduce or distribute our content without permission 📸 <br />-
            Use our trademarks or branding without consent ©️
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            5. Limitation of Liability
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Biryani Darbaar is not liable for: <br />
            - Any indirect or consequential damages arising from your use of our
            services ⚖️ <br />- Issues caused by third-party services, such as
            delivery delays 🚚 <br />- Errors in menu items or pricing due to
            unforeseen circumstances 📋
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            6. Changes to These Terms
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            We may update these Terms and Conditions from time to time. Any
            changes will be posted on this page with an updated date. Your
            continued use of our services after changes constitutes your
            acceptance of the new terms. 📅
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            7. Contact Us
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            If you have any questions about these Terms and Conditions, please
            contact us at: <br />
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

export default TermsAndConditions;

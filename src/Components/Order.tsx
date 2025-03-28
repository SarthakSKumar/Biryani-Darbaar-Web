// Orders.tsx
import SpecialOfferComponent from "../Reusable-components/SpecialOfferComponent";
import MainOrderLayout from "../Reusable-components/order-component/MainOrderLayout";
import InfoPage from "../Reusable-components/InfoPage";
import LocationInfo from "../Reusable-components/LocationInfo";
import CustomerReviews from "../Reusable-components/CustomerReview";
import { CartProvider } from "./CartProvider.tsx"; // Updated import
import "./Orders.css";
import { motion } from "framer-motion";

const Order = () => {
  return (
    <CartProvider>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SpecialOfferComponent
          title="Biryani in Australia"
          description="The rich flavors of Hyderabad biryani"
        />
        <MainOrderLayout />
        <InfoPage />
        <LocationInfo />
        <CustomerReviews />
      </motion.div>
    </CartProvider>
  );
};

export default Order;

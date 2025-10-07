// Orders.tsx
import LargeImageView from "../Reusable-components/LargeImageView.tsx";
import MainOrderLayout from "../Reusable-components/order-component/MainOrderLayout.tsx";
import InfoPage from "../sections/InfoSection.tsx";
import LocationInfo from "../sections/LocationSection.tsx";
import { CartProvider } from "./CartProvider.tsx";
import { motion } from "framer-motion";

const Order = () => {
    return (
        <CartProvider>
            <div className="flex flex-col gap-20 md:gap-28">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <LargeImageView
                        title="Biryani in Australia"
                        description="The rich flavors of Hyderabad biryani"
                    />
                    <MainOrderLayout />
                    <InfoPage />
                    <LocationInfo />
                </motion.div>
            </div>
        </CartProvider>
    );
};

export default Order;

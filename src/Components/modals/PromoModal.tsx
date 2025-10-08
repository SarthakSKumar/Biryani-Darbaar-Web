import React, { useState, ChangeEvent, MouseEvent } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { PromoModalProps } from "@/types";

const PromoModal: React.FC<PromoModalProps> = ({ onClose, onApplyPromo }) => {
  const [promoCode, setPromoCode] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleApplyPromo = async (): Promise<void> => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/validate-promo`,
        { promoCode }
      );
      if (response.data.success) {
        onApplyPromo(response.data.finalDiscount);
        onClose();
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Error applying promo:", error);
      setError("Invalid promo code");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPromoCode(e.target.value);
  };

  const handleBackdropClick = (): void => {
    onClose();
  };

  const handleContentClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return (
    <motion.div
      className="promo-modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        className="promo-modal-content bg-white p-6 rounded-lg relative w-96"
        onClick={handleContentClick}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          <X className="w-6 h-6 text-neutral-600 hover:text-red-500 transition" />
        </button>
        <h1 className="text-2xl font-bold mb-4 text-black">Apply Promo Code</h1>
        <input
          type="text"
          value={promoCode}
          onChange={handleInputChange}
          className="border p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Enter promo code"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleApplyPromo}
          className="bg-red-500 text-white py-2 px-4 rounded-lg w-full hover:bg-red-600 transition"
        >
          Apply
        </button>
      </motion.div>
    </motion.div>
  );
};

export default PromoModal;

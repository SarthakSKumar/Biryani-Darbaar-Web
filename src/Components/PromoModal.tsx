import React, { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";

interface PromoModalProps {
  onClose: () => void;
  onApplyPromo: (discount: number) => void;
}

const PromoModal: React.FC<PromoModalProps> = ({ onClose, onApplyPromo }) => {
  const [promoCode, setPromoCode] = useState("");
  const [error, setError] = useState("");

  const handleApplyPromo = async () => {
    try {
      const response = await axios.post("http://localhost:3000/validate-promo", { promoCode });
      if (response.data.success) {
        onApplyPromo(response.data.finalDiscount);
        onClose();
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.log(err);
      setError("Invalid promo code");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-2 right-2">
          <X className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold mb-4">Apply Promo Code</h1>
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="border p-2 rounded w-full mb-4"
          placeholder="Enter promo code"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={handleApplyPromo}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default PromoModal;

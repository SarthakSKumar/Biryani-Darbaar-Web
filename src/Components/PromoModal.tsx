// import React, { useState } from "react";
// import axios from "axios";
// import { X } from "lucide-react";

// interface PromoModalProps {
//   onClose: () => void;
//   onApplyPromo: (discount: number) => void;
// }

// const PromoModal: React.FC<PromoModalProps> = ({ onClose, onApplyPromo }) => {
//   const [promoCode, setPromoCode] = useState("");
//   const [error, setError] = useState("");

//   const handleApplyPromo = async () => {
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/validate-promo`, { promoCode });
//       if (response.data.success) {
//         onApplyPromo(response.data.finalDiscount);
//         onClose();
//       } else {
//         setError(response.data.message);
//       }
//     } catch (err) {
//       console.log(err);
//       setError("Invalid promo code");
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-4 rounded-lg relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button onClick={onClose} className="absolute top-2 right-2">
//           <X className="w-6 h-6" />
//         </button>
//         <h1 className="text-xl font-bold mb-4">Apply Promo Code</h1>
//         <input
//           type="text"
//           value={promoCode}
//           onChange={(e) => setPromoCode(e.target.value)}
//           className="border p-2 rounded w-full mb-4"
//           placeholder="Enter promo code"
//         />
//         {error && <p className="text-red-500">{error}</p>}
//         <button
//           onClick={handleApplyPromo}
//           className="bg-blue-500 text-white py-2 px-4 rounded"
//         >
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PromoModal;

// PromoModal.tsx
import React, { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface PromoModalProps {
  onClose: () => void;
  onApplyPromo: (discount: number) => void;
}

const PromoModal: React.FC<PromoModalProps> = ({ onClose, onApplyPromo }) => {
  const [promoCode, setPromoCode] = useState("");
  const [error, setError] = useState("");

  const handleApplyPromo = async () => {
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

  return (
    <motion.div
      className="promo-modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      onClick={onClose}
    >
      <motion.div
        className="promo-modal-content bg-white p-6 rounded-lg relative w-96"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          <X className="w-6 h-6 text-gray-600 hover:text-red-500 transition" />
        </button>
        <h1 className="text-2xl font-bold mb-4 text-black">Apply Promo Code</h1>
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
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

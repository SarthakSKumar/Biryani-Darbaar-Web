// CartModal.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { X, Plus, Minus, Trash, Coins } from "lucide-react";
import PromoModal from "./PromoModal";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./PaymentGate";
import { useCart } from "./CartContext";
import { motion } from "framer-motion";

const stripePromise = loadStripe(
  "pk_test_51QI9zGP1mrjxuTnQyyTUejvj7utgaGHnYp3BAB4VNGDmHkpqd5xCJmV3Q9QVpI3302xjpR8K8zWxIzIzI1GfBV1t00UAvTLEY7"
);

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [user, setUser] = useState({
    customerName: "",
    customerPhone: "",
    customerAddress: "",
  });
  const [reward, setReward] = useState(0);
  const [rewardDiscount, setRewardDiscount] = useState(0);
  const [applyRewardDiscount, setApplyRewardDiscount] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);

  const userId = sessionStorage.getItem("sessionUserId");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/user/${userId}`
        );
        setReward(response.data.reward);
        setRewardDiscount(response.data.discount);
        setUser({
          customerName: response.data.userName,
          customerPhone: response.data.phoneNumber,
          customerAddress: response.data.address,
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [userId]);

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountedTotal = grandTotal * (1 - discount);

  useEffect(() => {
    setFinalTotal(
      applyRewardDiscount ? discountedTotal - rewardDiscount : discountedTotal
    );
  }, [applyRewardDiscount, discountedTotal, rewardDiscount]);

  const handleRewardDiscount = async (
    reward: number,
    userId: string,
    dollar: number
  ) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/apply-reward`,
        { reward, userId, dollar }
      );
      if (response.status === 200) {
        setReward(response.data.reward);
        setFinalTotal(response.data.totalPrice);
      }
    } catch (error) {
      console.error("Error applying reward:", error);
    }
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  return (
    <>
      <div className="cart-container">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-black">Cart Items</h1>
          <button
            onClick={onClose}
            className="text-neutral-600 hover:text-red-500 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="cart-items flex-1">
          {cartItems.length === 0 ? (
            <p className="text-neutral-600">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <motion.div
                key={item.cartItemId}
                className="cart-item bg-white shadow-md rounded-lg p-4 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-neutral-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-neutral-500">{item.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.cartItemId, -1)}
                      className="p-1 rounded-full hover:bg-neutral-200"
                    >
                      <Minus className="w-4 h-4 text-red-500" />
                    </button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.cartItemId, 1)}
                      className="p-1 rounded-full hover:bg-neutral-200"
                    >
                      <Plus className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold text-neutral-600">
                      ${(item.price * item.quantity).toFixed(2)}{" "}
                      {/* Fix decimal places */}
                    </span>
                    <button
                      className="text-red-500 hover:text-red-600 transition"
                      onClick={() => removeFromCart(item.cartItemId)}
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
        <div className="cart-summary flex flex-col gap-4 p-4 bg-neutral-50 rounded-lg mt-4">
          <div className="text-xl font-bold text-black">
            Total: ${grandTotal.toFixed(2)}
          </div>
          <div className="text-md font-semibold text-neutral-600">
            Delivery fees: $2
          </div>
          <hr className="border-neutral-300" />
          <div
            className="text-red-500 cursor-pointer hover:text-red-600 transition"
            onClick={() => setShowPromoModal(true)}
          >
            Apply Promo
          </div>
          {discount > 0 && grandTotal >= 100 && (
            <div className="text-md font-semibold text-green-600">
              Discount Applied: {discount * 100}%
            </div>
          )}
          {reward && grandTotal >= 100 && reward > 10 && (
            <h5
              onClick={() =>
                userId && handleRewardDiscount(reward, userId, discountedTotal)
              }
              className="flex items-center justify-between cursor-pointer text-red-500 hover:text-red-600 transition"
            >
              Apply Reward
              <span className="flex items-center">
                {reward}
                <Coins size={28} color="#f1c40f" className="ml-2" />
              </span>
            </h5>
          )}
          {rewardDiscount > 0 && finalTotal >= 100 && (
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={applyRewardDiscount}
                onChange={() => setApplyRewardDiscount(!applyRewardDiscount)}
              />
              <span className="ml-2 text-md font-semibold text-green-600">
                Apply Reward Discount: ${rewardDiscount.toFixed(2)}{" "}
                {/* Fix decimal places */}
              </span>
            </div>
          )}
          <div className="text-xl font-bold text-black">
            Grand Total: ${(finalTotal + 2).toFixed(2)}{" "}
            {/* Fix decimal places */}
          </div>
          <button
            className="cart-checkout-btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
      {showPromoModal && (
        <PromoModal
          onClose={() => setShowPromoModal(false)}
          onApplyPromo={(discount) => {
            setDiscount(discount);
          }}
        />
      )}
      {showCheckout && (
        <Elements stripe={stripePromise}>
          <CheckoutPage
            amount={finalTotal + 2}
            order={cartItems.map((item) => ({
              cartItemId: item.cartItemId,
              name: item.name,
              quantity: item.quantity,
              price: item.price,
            }))}
            user={{
              data: {
                userName: user.customerName,
                phoneNumber: user.customerPhone,
                address: user.customerAddress,
                userId: userId || "Ppj6w2GfgMb2JMNBC9Isq96XfVs2",
              },
            }}
          />
        </Elements>
      )}
    </>
  );
};

export default CartModal;

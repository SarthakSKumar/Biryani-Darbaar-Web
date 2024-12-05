import React, { useEffect, useState } from "react";
import axios from "axios";
import { X, Plus, Minus, Trash } from "lucide-react";
import PromoModal from "./PromoModal";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./PaymentGate";

// Load Stripe instance with your public key
const stripePromise = loadStripe("pk_test_51QI9zGP1mrjxuTnQyyTUejvj7utgaGHnYp3BAB4VNGDmHkpqd5xCJmV3Q9QVpI3302xjpR8K8zWxIzIzI1GfBV1t00UAvTLEY7");

interface CartModalProps {
  onClose: () => void;
}

interface CartItem {
  cartItemId: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [user, setUser] = useState({customerName: "", customerPhone: "", customerAddress: ""});
  const userId = sessionStorage.getItem("sessionUserId");
  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await axios.post("http://localhost:3000/getCart");
      console.log(response.data);
      setCartItems(response.data);

      // Initialize quantities state with the fetched data
      const initialQuantities = response.data.reduce(
        (acc: { [key: string]: number }, item: CartItem) => {
          acc[item.cartItemId] = item.quantity;
          return acc;
        },
        {}
      );
      setQuantities(initialQuantities);
    };
    fetchCartItems();
  }, []);

  

  const updateQuantity = (orderId: string, change: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [orderId]: Math.max((prevQuantities[orderId] || 1) + change, 1),
    }));
  };

  const handleDeleteItem = async (itemId: string) => {
    await axios.delete(`http://localhost:3000/cart/${itemId}`);
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartItemId !== itemId)
    );
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[itemId];
      return newQuantities;
    });
  };

  const grandTotal = cartItems.reduce((total, item) => {
    return total + item.price * (quantities[item.cartItemId] || item.quantity);
  }, 0);

  const discountedTotal = grandTotal * (1 - discount);
  const fetchUser = async () => {
    const response = await axios.get(`http://localhost:3000/user/${userId}`);
    console.log(response.data);
    setUser({
      customerName: response.data.fullName,
      customerPhone: response.data.phoneNumber,
      customerAddress: response.data.address
    });
  }

  return (
    <>
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
          <h1 className="text-xl font-bold mb-4">Cart Items</h1>
          <div className="flex gap-10">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div
                  key={item.cartItemId}
                  className="bg-white shadow-xl rounded-lg p-4 mb-6"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="flex items-center">
                      <button onClick={() => updateQuantity(item.cartItemId, -1)}>
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="mx-2">
                        {quantities[item.cartItemId] || item.quantity}
                      </span>
                      <button onClick={() => updateQuantity(item.cartItemId, 1)}>
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded-md font-semibold hover:bg-red-600 w-8"
                      onClick={() => handleDeleteItem(item.cartItemId)}
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                    <span className="font-semibold">
                      $
                      {item.price *
                        (quantities[item.cartItemId] || item.quantity)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xl font-bold mt-4">Total: ${grandTotal}</div>
              <div className="text-md font-semibold text-zinc-600">
                Delivery fees: $2
              </div>
              <hr />
              <div
                className="text-red-600 cursor-pointer"
                onClick={() => setShowPromoModal(true)}
              >
                Apply Promo
              </div>
              {discount > 0 ? (
                <div className="text-md font-semibold text-green-600">
                  Discount Applied: {discount * 100}%
                </div>
              ) : (
                promoMessage && (
                  <div className="text-md font-semibold text-red-600">
                    {promoMessage}
                  </div>
                )
              )}
              <div className="text-xl font-bold mt-4">
                Grand Total: ${discountedTotal + 2}
              </div>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded "
                onClick={() => 
                  {setShowCheckout(true);
                    fetchUser();
                  }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPromoModal && (
        <PromoModal
          onClose={() => setShowPromoModal(false)}
          onApplyPromo={(discount) => {
            setDiscount(discount);
            setPromoMessage("");
          }}
        />
      )}
      {showCheckout && (
        <Elements stripe={stripePromise}>
          <CheckoutPage
            amount={discountedTotal + 2}
            order={cartItems.map(item => ({
              cartItemId: item.cartItemId,
              name: item.name,
              quantity: quantities[item.cartItemId] || item.quantity,
              price: item.price
            }))}
            user={{ data: { userName: user.customerName, phoneNumber: user.customerPhone, address: user.customerAddress, userId: userId || "Ppj6w2GfgMb2JMNBC9Isq96XfVs2" } }} // Example user data
          />
        </Elements>
      )}
    </>
  );
};

export default CartModal;

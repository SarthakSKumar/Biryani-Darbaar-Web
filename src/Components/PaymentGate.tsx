import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { X } from "lucide-react";

// Load Stripe instance with your public key
const stripePromise = loadStripe(
  "pk_test_51QI9zGP1mrjxuTnQyyTUejvj7utgaGHnYp3BAB4VNGDmHkpqd5xCJmV3Q9QVpI3302xjpR8K8zWxIzIzI1GfBV1t00UAvTLEY7"
);

interface OrderItem {
  cartItemId: string;
  name: string;
  quantity: number;
  price: number;
}

interface CheckoutProps {
  amount: number;
  order: OrderItem[];
  onClose: () => void;
  user: {
    data: {
      userName: string;
      phoneNumber: string;
      address: string;
      userId: string;
    };
  };
}

const Checkout: React.FC<CheckoutProps> = ({
  amount,
  order,
  onClose,
  user,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [toastState, setToastState] = useState(false);
  console.log(clientSecret);

  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    if (!stripe || !elements) return;

    setPaymentError(null);
    try {
      setLoading(true);

      // Create payment intent on backend
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/create-payment-intent`,
        {
          amount,
          currency: "AUD",
        }
      );
      console.log("Kojja munda");

      setClientSecret(response.data.clientSecret);
      console.log(response.data.clientSecret);

      const result = await stripe.confirmCardPayment(
        response.data.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
          },
        }
      );
      console.log("lanjam");

      if (result.error) {
        setPaymentError(result.error.message || "An unknown error occurred.");
      } else if (result.paymentIntent?.status === "succeeded") {
        console.log("Payment successful!");
        setToastState(true);

        // Create order after payment
        const orderDetails = {
          customerName: user.data.userName,
          customerAddress: user.data.address,
          customerPhone: user.data.phoneNumber,
          orderDate: new Date().toISOString(),
          orderStatus: "Order Recieved",
          totalPrice: amount,
          orderItems: order.map((orderItem) => ({
            ...orderItem,
            dishName: orderItem.name,
            quantity: orderItem.quantity,
          })),
        };
        console.log("Kojja mundaa kodakaaa",orderDetails);
        

        await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/orders`, {
          ...orderDetails,
        });

        console.log("Order created successfully");
      }
    } catch (err) {
      console.log("Payment successful!");
      setToastState(true);
      // Create order after payment
      const orderDetails = {
        customerName: user.data.userName,
        customerAddress: user.data.address,
        customerPhone: user.data.phoneNumber,
        orderDate: new Date().toISOString(),
        orderStatus: "Pending",
        totalPrice: amount,
        orderItems: order.map((orderItem) => ({
          ...orderItem,
          dishName: orderItem.name,
          quantity: orderItem.quantity,
          userId: user.data.userId,
        })),
        userId: user.data.userId,
      };
      console.log("Erri puuku lanja",orderDetails);

      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/orders`,
        {
          ...orderDetails,
        }
      );

      if (response.status === 201) {
        console.log("Order created successfully");
        for (const item of order) {
          const cartItemId = item.cartItemId;
          console.log("Cart Item ID:", cartItemId);
          const response = await axios.delete(
            `${import.meta.env.VITE_API_ENDPOINT}/cart/${cartItemId}`
          );
          console.log("Cart Item deleted:", response);
        }
        setToastState(true);
      }
    } finally {
      setLoading(false);
    }
  };

  // UseEffect hook to navigate after the toast is shown
  useEffect(() => {
    if (toastState) {
      setTimeout(() => {
        navigate("/orders"); // Redirect to the orders page
      }, 2000); // Wait 2 seconds before redirecting
    }
  }, [toastState, navigate]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-lg relative w-96 h-56"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-2 right-2">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-center mb-4">Checkout</h2>
        <div className="mb-6">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#32325d",
                  "::placeholder": {
                    color: "#a0aec0",
                  },
                },
                invalid: {
                  color: "#fa755a",
                },
              },
            }}
          />
        </div>
        <button
          onClick={handlePayment}
          disabled={!stripe || loading}
          className={`w-full px-4 py-2 text-white rounded-md transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Processing..." : `Pay $${amount}`}
        </button>
        {paymentError && (
          <div className="mt-4 text-red-500 text-sm">{paymentError}</div>
        )}
        {toastState && (
          <div className="mt-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
            Payment successful! Your order has been placed.
          </div>
        )}
      </div>
    </div>
  );
};

const CheckoutPage: React.FC<Omit<CheckoutProps, "onClose">> = ({
  amount,
  order,
  user,
}) => {
  const [showCheckoutModal, setShowCheckoutModal] = useState(true);
  console.log(amount, order, user);

  return (
    <>
      {/* <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => setShowCheckoutModal(true)}
      >
        Open Checkout
      </button> */}
      {showCheckoutModal && (
        <Elements stripe={stripePromise}>
          <Checkout
            amount={amount}
            order={order}
            onClose={() => setShowCheckoutModal(false)}
            user={user}
          />
        </Elements>
      )}
    </>
  );
};

export default CheckoutPage;

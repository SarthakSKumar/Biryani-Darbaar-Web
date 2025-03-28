// MainOrderLayout.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuCard from "./MenuCard";
import Sidebar from "./SideBar";
import CartModal from "../../Components/CartModal";
import { Check, CheckCheck } from "lucide-react";
import { motion } from "framer-motion";

interface Order {
  orderId: string;
  orderItems: {
    dishId: string;
    dishName: string;
    quantity: number;
    price: number;
  }[];
  totalPrice: number;
  orderDate: string;
  orderStatus: string;
  customerAddress: string;
}

const MainOrderLayout: React.FC = () => {
  interface MenuItem {
    dishId: string;
    name: string;
    description: string;
    image: string;
    price: number;
    addons: { addonName: string; price: string | number }[];
  }

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [showCart, setShowCart] = useState(false); // State to toggle cart visibility
  const [orders, setOrders] = useState<Order[]>([]);

  const handleCategorySelect = (category: string) => {
    console.log("Category selected:", category);
    axios
      .get(`${import.meta.env.VITE_API_ENDPOINT}/dishes/category/${category}`)
      .then((response) => {
        const data = response.data;
        const menuItems = data.map(
          (item: {
            dishId: string;
            name?: string;
            dishName?: string;
            description: string;
            image: string;
            price: number;
            addons: { addonName: string; price: string | number }[];
          }) => ({
            dishId: item.dishId,
            name: item.name || item.dishName,
            description: item.description,
            image: item.image,
            price: item.price,
            addons: item.addons,
          })
        );
        setMenuItems(menuItems);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleOrdersSelect = async () => {
    const userId = sessionStorage.getItem("sessionUserId");
    if (!userId) return;

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/ordersByUser/${userId}`
      );
      const sortedOrders = response.data.sort(
        (a: Order, b: Order) =>
          new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
      );
      setOrders(sortedOrders);
      setMenuItems([]);
      setShowCart(false); // Hide cart when viewing orders
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleClearOrders = () => {
    setOrders([]);
    setShowCart(false); // Hide cart when clearing orders
  };

  useEffect(() => {
    handleCategorySelect("Biryani's");
  }, []);

  return (
    <motion.div
      className="orders-layout flex flex-col md:flex-row mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Sidebar
        handleCategorySelect={handleCategorySelect}
        handleOrdersSelect={handleOrdersSelect}
        handleClearOrders={handleClearOrders}
      />

      <div className="flex-1 flex flex-col md:flex-row">
        <motion.div
          className="orders-content flex-1 p-6 lg:p-12 bg-gray-100"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-black">
            Order from Biryani in Australia
          </h1>
          {orders.length > 0 ? (
            <div className="space-y-6">
              {orders.map((order) => (
                <motion.div
                  key={order.orderId}
                  className="order-card bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-semibold text-black">
                      Order ID: {order.orderId}
                    </h4>
                    <p className="order-status">
                      {order.orderStatus === "Completed" ? (
                        <CheckCheck size={30} color="#318CE7" />
                      ) : (
                        <Check size={30} color="#318CE7" />
                      )}
                    </p>
                  </div>
                  <div className="mb-4 text-gray-600">
                    <p>
                      <strong>Order Status:</strong> {order.orderStatus}
                    </p>
                    <p>
                      <strong>Delivery Address:</strong> {order.customerAddress}
                    </p>
                    <p>
                      <strong>Order Date:</strong>{" "}
                      {new Date(order.orderDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-black">Items:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {order.orderItems &&
                        order.orderItems.map((item) => (
                          <li key={item.dishId}>
                            {item.dishName} - {item.quantity} x ${item.price}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="mt-4 text-gray-600">
                    <p>
                      <strong>Total Price:</strong> ${order.totalPrice}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.dishId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MenuCard
                    dishId={item.dishId}
                    title={item.name}
                    description={item.description}
                    imageUrl={item.image}
                    price={item.price}
                  />
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              className="orders-basket-btn bg-red-500 text-white py-3 px-8 rounded-lg font-bold text-xl hover:bg-red-600 transition"
              onClick={() => setShowCart(!showCart)}
            >
              {showCart ? "Hide Basket" : "My Basket"}
            </button>
          </motion.div>
        </motion.div>

        {showCart && !orders.length && (
          <motion.div
            className="cart-sidebar w-full md:w-1/3 p-6 bg-white shadow-md"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CartModal onClose={() => setShowCart(false)} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MainOrderLayout;

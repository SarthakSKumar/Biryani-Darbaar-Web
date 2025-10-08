// MainOrderLayout.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuCard from "@/components/cards/MenuCard";
import Sidebar from "@/components/MenuBar"
import Cart from "@/components/modals/CartModal";
import Loading from "@/components/Loading";
import ErrorFallback from "@/components/ErrorFallback";
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
  const [showCart, setShowCart] = useState(false); // State to toggle cart popup visibility
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("Biryani's");

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    setLoading(true);
    setError(false);
    axios
      .get(
        `${import.meta.env.VITE_API_ENDPOINT
        }/dishes/category/${encodeURIComponent(category)}`
      )
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
        setError(true);
      })
      .finally(() => {
        setLoading(false);
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
    <div className="container-custom">
      <motion.div
        className="flex flex-col md:flex-row py-20 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Sidebar
          handleCategorySelect={handleCategorySelect}
          handleOrdersSelect={handleOrdersSelect}
          handleClearOrders={handleClearOrders}
          activeCategory={activeCategory}
        />

        <div className="flex-1 flex flex-col">
          <motion.div
            className="flex-1 p-6 lg:p-12 rounded-2xl border"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900 ">
                Order from Biryani Darbaar
              </h1>
              {orders.length > 0 ? (
                <div className="space-y-6">
                  {orders.map((order) => (
                    <motion.div
                      key={order.orderId}
                      className="bg-white p-6 rounded-lg border border-neutral-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xl font-semibold text-neutral-900">
                          Order ID: {order.orderId}
                        </h4>
                        <div>
                          {order.orderStatus === "Completed" ? (
                            <CheckCheck size={30} color="#318CE7" />
                          ) : (
                            <Check size={30} color="#318CE7" />
                          )}
                        </div>
                      </div>
                      <div className="mb-4 text-neutral-600 space-y-1">
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
                        <h4 className="text-lg font-semibold text-neutral-900 mb-2">Items:</h4>
                        <ul className="list-disc list-inside text-neutral-600 space-y-1">
                          {order.orderItems &&
                            order.orderItems.map((item) => (
                              <li key={item.dishId}>
                                {item.dishName} - {item.quantity} x ${item.price}
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="mt-4 text-neutral-600">
                        <p className="text-lg font-semibold">
                          <strong>Total Price:</strong> ${order.totalPrice}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : loading ? (
                <Loading text="Loading delicious dishes..." />
              ) : error ? (
                <ErrorFallback
                  message="Failed to load dishes"
                  onRetry={() => handleCategorySelect(activeCategory)}
                />
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

              {/* Button to display cart */}
              <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  className="bg-primary text-white py-3 px-8 rounded-lg font-bold text-xl hover:bg-red-600 transition-all border border-primary"
                  onClick={() => setShowCart(!showCart)}
                >
                  {showCart ? "Hide Cart" : "View Cart"}
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Cart Popup - More horizontal with max height */}
        {showCart && !orders.length && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
            onClick={() => setShowCart(false)}
          >
            <div
              className="w-full max-w-4xl max-h-[75vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Cart onClose={() => setShowCart(false)} />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MainOrderLayout;

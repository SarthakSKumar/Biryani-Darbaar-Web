import React, { useState } from "react";
import axios from "axios";
import MenuCard from "./MenuCard";
import Sidebar from "./SideBar";
import CartModal from "../../Components/CartModal";
import { Check, CheckCheck } from "lucide-react"; // Import icons

interface Order {
  orderId: string;
  orderItems: { dishId: string; dishName: string; quantity: number; price: number }[]; // Fix type errors
  totalPrice: number;
  orderDate: string;
  orderStatus: string;
  customerAddress: string; // Add missing property
}

const MainOrderLayout: React.FC = () => {
  interface MenuItem {
    dishId: string;
    name: string;
    description: string;
    image: string;
    price: number; // Single price value
    addons: { addonName: string; price: string | number }[]; // Add addOns property
  }

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Add state for modal
  const [orders, setOrders] = useState<Order[]>([]); // Add state for orders

  const handleCategorySelect = (category: string) => {
    axios
      .get(`https://api.darbaarkitchen.com/dishes/category/${category}`)
      .then((response) => {
        const data = response.data;
        console.log(data);

        // Map the response data to match the structure we need for the state
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
            name: item.name || item.dishName, // Handle both name fields

            description: item.description,

            image: item.image,

            price: item.price,

            addons: item.addons, // Assuming a single price value
          })
        );

        // Update the state with the fetched menu items
        setMenuItems(menuItems);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleOrdersSelect = async () => {
    const userId = sessionStorage.getItem("sessionUserId");
    console.log("Lanja munda", userId);

    if (!userId) return;

    try {
      const response = await axios.get(
        `https://api.darbaarkitchen.com/ordersByUser/${userId}`
      );
      const sortedOrders = response.data.sort(
        (a: Order, b: Order) =>
          new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
      );
      setOrders(sortedOrders);
      setMenuItems([]); // Clear menu items when orders are selected
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleClearOrders = () => {
    setOrders([]); // Clear orders
  };

  return (
    <div className="flex mt-20">
      <Sidebar
        handleCategorySelect={handleCategorySelect}
        handleOrdersSelect={handleOrdersSelect}
        handleClearOrders={handleClearOrders} // Pass handleClearOrders to Sidebar
      />

      <div className="flex-1 p-6 lg:p-12 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">
          Order from Biryani in Australia
        </h1>
        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.orderId} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">Order ID: {order.orderId}</h4>
                  <p className="order-status">
                    {order.orderStatus === "Completed" ? (
                      <CheckCheck size={30} color="#318CE7" />
                    ) : (
                      <Check size={30} />
                    )}
                  </p>
                </div>
                <div className="mb-4">
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
                  <h4 className="text-lg font-semibold">Items:</h4>
                  <ul className="list-disc list-inside">
                    {order.orderItems &&
                      order.orderItems.map((item) => (
                        <li key={item.dishId}>
                          {item.dishName} - {item.quantity} x ${item.price}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <p>
                    <strong>Total Price:</strong> ${order.totalPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {menuItems.map((item) => (
              <MenuCard
                key={item.dishId} // Use unique dishId as key
                dishId={item.dishId}
                title={item.name}
                description={item.description}
                imageUrl={item.image}
                addOns={item.addons} // Pass addOns to the MenuCard component
                price={item.price} // Convert price to match expected format
              />
            ))}
          </div>
        )}

        {/* My Basket Button */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-red-500 text-white py-3 px-8 rounded-lg font-bold text-xl hover:bg-red-600"
            onClick={() => setIsModalOpen(true)}
          >
            My Basket
          </button>
        </div>
      </div>
      {isModalOpen && <CartModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default MainOrderLayout;

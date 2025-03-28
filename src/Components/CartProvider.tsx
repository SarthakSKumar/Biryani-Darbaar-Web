// CartProvider.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "./CartContext";

// Define the CartItem type
interface CartItem {
  cartItemId: string;
  dishId: string;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const userId = sessionStorage.getItem("sessionUserId");
        if (!userId) return;

        const response = await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/getCart`,
          { userId }
        );
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItems();
  }, []);

  const addToCart = async (
    item: Omit<CartItem, "cartItemId" | "quantity">,
    quantity: number
  ) => {
    const userId = sessionStorage.getItem("sessionUserId");
    if (!userId || quantity <= 0) return;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/cart`,
        {
          userId,
          dishId: item.dishId,
          name: item.name,
          addons: [], // Addons not used in this context
          price: item.price,
          image: item.image,
          description: item.description,
          quantity,
        }
      );

      if (response.status === 201) {
        const newItem = {
          ...item,
          cartItemId: response.data.cartItemId,
          quantity,
        };
        setCartItems((prevItems) => {
          const existingItem = prevItems.find((i) => i.dishId === item.dishId);
          if (existingItem) {
            return prevItems.map((i) =>
              i.dishId === item.dishId
                ? { ...i, quantity: i.quantity + quantity }
                : i
            );
          }
          return [...prevItems, newItem];
        });
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const updateQuantity = (cartItemId: string, change: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: Math.max(item.quantity + change, 0) }
            : item
        )
        .filter((item) => item.quantity > 0);

      // Update the backend
      const item = updatedItems.find((i) => i.cartItemId === cartItemId);
      if (item) {
        axios.put(`${import.meta.env.VITE_API_ENDPOINT}/cart/${cartItemId}`, {
          quantity: item.quantity,
        });
      } else {
        axios.delete(`${import.meta.env.VITE_API_ENDPOINT}/cart/${cartItemId}`);
      }

      return updatedItems;
    });
  };

  const removeFromCart = async (cartItemId: string) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_ENDPOINT}/cart/${cartItemId}`
      );
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.cartItemId !== cartItemId)
      );
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const clearCart = async () => {
    try {
      for (const item of cartItems) {
        await axios.delete(
          `${import.meta.env.VITE_API_ENDPOINT}/cart/${item.cartItemId}`
        );
      }
      setCartItems([]);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

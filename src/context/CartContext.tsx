// CartContext.tsx
import { createContext, useContext } from "react";

interface CartItem {
  cartItemId: string;
  dishId: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    item: Omit<CartItem, "cartItemId" | "quantity">,
    quantity: number
  ) => Promise<void>;
  updateQuantity: (cartItemId: string, change: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

/**
 * Cart-related type definitions
 */

export interface CartItem {
  cartItemId: string;
  dishId: string;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    item: Omit<CartItem, "cartItemId" | "quantity">,
    quantity: number
  ) => Promise<void>;
  updateQuantity: (cartItemId: string, change: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
}

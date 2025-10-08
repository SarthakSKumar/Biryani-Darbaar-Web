import axiosInstance from "../lib/axiosInterceptor";

// ============================================================================
// Types & Interfaces
// ============================================================================

export interface CartItem {
  cartItemId: string;
  dishId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  addons?: { name: string; price: number }[];
}

export interface GetCartData {
  userId: string;
}

export interface AddToCartData {
  userId: string;
  dishId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  addons?: { name: string; price: number }[];
}

export interface AddToCartResponse {
  cartItemId: string;
}

export interface UpdateCartData {
  userId: string;
  quantity: number;
}

// ============================================================================
// API Functions
// ============================================================================

/**
 * Fetch cart items for a user
 */
export const getCartItems = async (data: GetCartData): Promise<CartItem[]> => {
  const response = await axiosInstance.post("/getCart", data);
  return response.data || [];
};

/**
 * Add item to cart
 */
export const addToCart = async (
  data: AddToCartData
): Promise<AddToCartResponse> => {
  const response = await axiosInstance.post("/cart", data);
  return response.data;
};

/**
 * Update cart item quantity
 */
export const updateCartItem = async (
  cartItemId: string,
  data: UpdateCartData
): Promise<void> => {
  await axiosInstance.put(`/cart/${cartItemId}`, data);
};

/**
 * Delete single cart item
 */
export const deleteCartItem = async (cartItemId: string): Promise<void> => {
  await axiosInstance.delete(`/cart/${cartItemId}`);
};

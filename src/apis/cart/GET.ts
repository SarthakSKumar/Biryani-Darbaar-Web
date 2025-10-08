import axiosInstance from "../axiosInterceptor";

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

/**
 * Fetch cart items for a user
 */
export const getCartItems = async (data: GetCartData): Promise<CartItem[]> => {
  const response = await axiosInstance.post("/getCart", data);
  return response.data || [];
};

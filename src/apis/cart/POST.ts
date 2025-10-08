import axiosInstance from "../../lib/axiosInterceptor";

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

/**
 * Add item to cart
 */
export const addToCart = async (
  data: AddToCartData
): Promise<AddToCartResponse> => {
  const response = await axiosInstance.post("/cart", data);
  return response.data;
};

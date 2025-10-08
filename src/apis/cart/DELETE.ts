import axiosInstance from "../axiosInterceptor";

/**
 * Delete single cart item
 */
export const deleteCartItem = async (cartItemId: string): Promise<void> => {
  await axiosInstance.delete(`/cart/${cartItemId}`);
};

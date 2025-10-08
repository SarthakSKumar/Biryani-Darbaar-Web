import axiosInstance from '../axiosInterceptor';

export interface UpdateCartData {
  userId: string;
  quantity: number;
}

/**
 * Update cart item quantity
 */
export const updateCartItem = async (cartItemId: string, data: UpdateCartData): Promise<void> => {
  await axiosInstance.put(`/cart/${cartItemId}`, data);
};

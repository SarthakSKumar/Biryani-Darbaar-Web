import axiosInstance from '../axiosInterceptor';

/**
 * Delete cart items after order creation
 */
export const deleteCartItemsAfterOrder = async (cartItemIds: string[]): Promise<void> => {
  await Promise.all(
    cartItemIds.map((cartItemId) => axiosInstance.delete(`/cart/${cartItemId}`))
  );
};

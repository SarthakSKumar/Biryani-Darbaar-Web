import axiosInstance from '../axiosInterceptor';

export interface OrderItem {
  dishId: string;
  dishName: string;
  cartItemId: string;
  quantity: number;
  price: number;
}

export interface Order {
  orderId: string;
  orderItems: OrderItem[];
  totalPrice: number;
  orderDate: string;
  orderStatus: string;
  customerAddress: string;
}

/**
 * Fetch orders for a user
 */
export const getOrders = async (userId: string): Promise<Order[]> => {
  const response = await axiosInstance.get(`/orders/${userId}`);
  return response.data || [];
};

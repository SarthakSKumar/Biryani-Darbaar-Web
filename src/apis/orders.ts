import axiosInstance from "../lib/axiosInterceptor";

// ============================================================================
// Types & Interfaces
// ============================================================================

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

export interface CreateOrderData {
  userId: string;
  userName: string;
  phoneNumber: string;
  address: string;
  orderItems: {
    cartItemId: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  totalPrice: number;
}

export interface CreateOrderResponse {
  orderId: string;
}

// ============================================================================
// API Functions
// ============================================================================

/**
 * Fetch orders for a user
 */
export const getOrders = async (userId: string): Promise<Order[]> => {
  const response = await axiosInstance.get(`/orders/${userId}`);
  return response.data || [];
};

/**
 * Create a new order
 */
export const createOrder = async (
  data: CreateOrderData
): Promise<CreateOrderResponse> => {
  const response = await axiosInstance.post("/orders", data);
  return response.data;
};

/**
 * Delete cart items after order creation
 */
export const deleteCartItemsAfterOrder = async (
  cartItemIds: string[]
): Promise<void> => {
  await Promise.all(
    cartItemIds.map((cartItemId) => axiosInstance.delete(`/cart/${cartItemId}`))
  );
};

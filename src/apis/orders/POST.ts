import axiosInstance from "../axiosInterceptor";

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

/**
 * Create a new order
 */
export const createOrder = async (
  data: CreateOrderData
): Promise<CreateOrderResponse> => {
  const response = await axiosInstance.post("/orders", data);
  return response.data;
};

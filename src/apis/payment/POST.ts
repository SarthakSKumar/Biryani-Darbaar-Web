import axiosInstance from '../axiosInterceptor';

export interface CreatePaymentIntentData {
  amount: number;
  currency: string;
}

export interface CreatePaymentIntentResponse {
  clientSecret: string;
}

/**
 * Create Stripe payment intent
 */
export const createPaymentIntent = async (data: CreatePaymentIntentData): Promise<CreatePaymentIntentResponse> => {
  const response = await axiosInstance.post('/create-payment-intent', data);
  return response.data;
};

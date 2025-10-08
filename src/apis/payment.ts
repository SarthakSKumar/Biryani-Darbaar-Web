import axiosInstance from "../lib/axiosInterceptor";

// ============================================================================
// Types & Interfaces
// ============================================================================

export interface CreatePaymentIntentData {
  amount: number;
  currency: string;
}

export interface CreatePaymentIntentResponse {
  clientSecret: string;
}

// ============================================================================
// API Functions
// ============================================================================

/**
 * Create Stripe payment intent
 */
export const createPaymentIntent = async (
  data: CreatePaymentIntentData
): Promise<CreatePaymentIntentResponse> => {
  const response = await axiosInstance.post("/create-payment-intent", data);
  return response.data;
};

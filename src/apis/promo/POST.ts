import axiosInstance from '../axiosInterceptor';

export interface ValidatePromoData {
  promoCode: string;
}

export interface ValidatePromoResponse {
  success: boolean;
  message?: string;
  finalDiscount: number;
}

/**
 * Validate and apply promo code
 */
export const validatePromoCode = async (data: ValidatePromoData): Promise<ValidatePromoResponse> => {
  const response = await axiosInstance.post('/validate-promo', data);
  return response.data;
};

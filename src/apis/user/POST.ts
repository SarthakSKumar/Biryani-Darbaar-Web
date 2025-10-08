import axiosInstance from "../axiosInterceptor";

export interface ApplyRewardData {
  reward: number;
  userId: string;
  dollar: number;
}

export interface ApplyRewardResponse {
  reward: number;
  totalPrice: number;
}

/**
 * Apply reward discount to an order
 */
export const applyReward = async (
  data: ApplyRewardData
): Promise<ApplyRewardResponse> => {
  const response = await axiosInstance.post("/apply-reward", data);
  return response.data;
};

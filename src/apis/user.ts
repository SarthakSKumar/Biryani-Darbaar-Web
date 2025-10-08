import axiosInstance from "../lib/axiosInterceptor";

// ============================================================================
// Types & Interfaces
// ============================================================================

export interface User {
  userId: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  role: string;
  isGoldMember: boolean;
  reward: number;
  discount: number;
}

export interface ApplyRewardData {
  reward: number;
  userId: string;
  dollar: number;
}

export interface ApplyRewardResponse {
  reward: number;
  totalPrice: number;
}

// ============================================================================
// API Functions
// ============================================================================

/**
 * Fetch user details by userId
 */
export const getUserById = async (userId: string): Promise<User> => {
  const response = await axiosInstance.get(`/user/${userId}`);
  return response.data;
};

/**
 * Apply reward discount to an order
 */
export const applyReward = async (
  data: ApplyRewardData
): Promise<ApplyRewardResponse> => {
  const response = await axiosInstance.post("/apply-reward", data);
  return response.data;
};

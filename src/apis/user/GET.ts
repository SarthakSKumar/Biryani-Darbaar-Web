import axiosInstance from '../axiosInterceptor';

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

/**
 * Fetch user details by userId
 */
export const getUserById = async (userId: string): Promise<User> => {
  const response = await axiosInstance.get(`/user/${userId}`);
  return response.data;
};

import axiosInstance from '../axiosInterceptor';
import { RefreshTokenResponse } from './POST';

/**
 * Refresh access token using refresh token
 */
export const refreshAccessToken = async (refreshToken: string): Promise<RefreshTokenResponse> => {
  const response = await axiosInstance.post('/auth/refresh-token', { refreshToken });
  return response.data;
};

/**
 * Logout user and invalidate tokens
 */
export const logoutUser = async (accessToken?: string): Promise<void> => {
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  await axiosInstance.post('/auth/logout', {}, { headers });
};

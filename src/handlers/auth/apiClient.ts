import axios from 'axios';
import { getAccessToken, getRefreshToken, saveTokens, clearAuthData } from './authStorage';
import { refreshAccessToken } from './authApi';

const API_BASE_URL = import.meta.env.VITE_API_ENDPOINT;

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor to add access token
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();
        
        if (!refreshToken) {
          // No refresh token, clear auth and redirect
          clearAuthData();
          window.location.href = '/';
          return Promise.reject(error);
        }

        // Try to refresh the token
        const response = await refreshAccessToken(refreshToken);
        
        if (response.success) {
          const { accessToken } = response.data;
          const currentRefresh = getRefreshToken();
          
          if (currentRefresh) {
            saveTokens(accessToken, currentRefresh);
          }

          // Retry the original request with new token
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, clear auth and redirect
        clearAuthData();
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;

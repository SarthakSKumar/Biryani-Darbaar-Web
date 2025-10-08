import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_ENDPOINT;

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    sessionId: string;
    user: {
      userId: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      address: string;
      role: string;
      isGoldMember: boolean;
    };
  };
}

export interface RefreshTokenResponse {
  success: boolean;
  data: {
    accessToken: string;
    expiresIn: string;
  };
}

// Register a new user
export const registerUser = async (
  data: RegisterData
): Promise<AuthResponse> => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, data);
  return response.data;
};

// Login user
export const loginUser = async (data: LoginData): Promise<AuthResponse> => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
  return response.data;
};

// Refresh access token
export const refreshAccessToken = async (
  refreshToken: string
): Promise<RefreshTokenResponse> => {
  const response = await axios.post(`${API_BASE_URL}/auth/refresh-token`, {
    refreshToken,
  });
  return response.data;
};

// Logout user
export const logoutUser = async (accessToken?: string): Promise<void> => {
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  await axios.post(`${API_BASE_URL}/auth/logout`, {}, { headers });
};

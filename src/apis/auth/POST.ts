import axiosInstance from "../../lib/axiosInterceptor";

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

export interface LoginWithGoogleData {
  idToken: string;
}

export interface SignupWithGoogleData {
  idToken: string;
  phoneNumber: string;
  address: string;
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

/**
 * Register a new user with email and password
 */
export const registerUser = async (
  data: RegisterData
): Promise<AuthResponse> => {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data;
};

/**
 * Login user with email and password
 */
export const loginUser = async (data: LoginData): Promise<AuthResponse> => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

/**
 * Login user with Google OAuth
 */
export const loginWithGoogle = async (
  data: LoginWithGoogleData
): Promise<{ sessionId: string; sessionUserId: string }> => {
  const response = await axiosInstance.post("/login", data);
  return response.data;
};

/**
 * Signup user with Google OAuth
 */
export const signupWithGoogle = async (
  data: SignupWithGoogleData
): Promise<void> => {
  await axiosInstance.post("/signup", data);
};

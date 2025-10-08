/**
 * API-related type definitions
 * All types used in API requests and responses
 */

// ============================================================================
// Auth API Types
// ============================================================================

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

export interface LoginWithGoogleResponse {
  sessionId: string;
  sessionUserId: string;
}

// ============================================================================
// Cart API Types
// ============================================================================

export interface ApiCartItem {
  cartItemId: string;
  dishId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  addons?: { name: string; price: number }[];
}

export interface GetCartData {
  userId: string;
}

export interface AddToCartData {
  userId: string;
  dishId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  addons?: { name: string; price: number }[];
}

export interface AddToCartResponse {
  cartItemId: string;
}

export interface UpdateCartData {
  userId: string;
  quantity: number;
}

// ============================================================================
// Contact API Types
// ============================================================================

export interface ContactFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  description: string;
}

// ============================================================================
// Dishes API Types
// ============================================================================

export interface ApiDish {
  dishId: string;
  name?: string;
  dishName?: string;
  category?: string;
  description: string;
  image: string;
  price: number;
  goldPrice?: number;
  available: boolean;
  offerAvailable: boolean;
  discount: number;
  addons?: { addonName: string; price: string | number }[];
}

// ============================================================================
// Orders API Types
// ============================================================================

export interface ApiOrderItem {
  dishId: string;
  dishName: string;
  cartItemId: string;
  quantity: number;
  price: number;
}

export interface ApiOrder {
  orderId: string;
  orderItems: ApiOrderItem[];
  totalPrice: number;
  orderDate: string;
  orderStatus: string;
  customerAddress: string;
}

export interface CreateOrderData {
  userId: string;
  userName: string;
  phoneNumber: string;
  address: string;
  orderItems: {
    cartItemId: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  totalPrice: number;
}

export interface CreateOrderResponse {
  orderId: string;
}

// ============================================================================
// Payment API Types
// ============================================================================

export interface CreatePaymentIntentData {
  amount: number;
  currency: string;
}

export interface CreatePaymentIntentResponse {
  clientSecret: string;
}

// ============================================================================
// Promo API Types
// ============================================================================

export interface ValidatePromoData {
  promoCode: string;
}

export interface ValidatePromoResponse {
  success: boolean;
  message?: string;
  finalDiscount: number;
}

// ============================================================================
// User API Types
// ============================================================================

export interface ApiUser {
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

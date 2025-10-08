/**
 * Custom hook return type definitions
 */

import { Dish } from "./common.types";

// ============ Firebase/Auth Types ============
export interface FirebaseUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface AuthHookReturn {
  isAuthenticated: boolean;
  user: FirebaseUser | null;
  loading: boolean;
}

// ============ Data Fetching Hook Types ============
export interface UseDishesReturn {
  dishes: Dish[];
  loading: boolean;
  error: Error | null;
}

export interface UseCategoriesReturn {
  categories: string[];
  loading: boolean;
  error: Error | null;
}

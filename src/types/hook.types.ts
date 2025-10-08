/**
 * Custom hook return type definitions
 */

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

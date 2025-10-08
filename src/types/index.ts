// Error type for API calls and error handling
export interface ApiError {
  message: string;
  response?: {
    data?: {
      message?: string;
    };
  };
}

// Type guard to check if error is ApiError
export const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as ApiError).message === "string"
  );
};

// Helper to extract error message
export const getErrorMessage = (error: unknown): string => {
  if (isApiError(error)) {
    return error.response?.data?.message || error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred";
};

// Export all type modules
export * from "./api.types";
export * from "./cart.types";
export * from "./common.types";
export * from "./component.types";
export * from "./hook.types";
export * from "./order.types";

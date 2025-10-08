import axiosInstance from "../lib/axiosInterceptor";

// ============================================================================
// Types & Interfaces
// ============================================================================

export interface ContactFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  description: string;
}

// ============================================================================
// API Functions
// ============================================================================

/**
 * Submit contact form
 */
export const submitContactForm = async (
  data: ContactFormData
): Promise<void> => {
  await axiosInstance.post("/contact", data);
};

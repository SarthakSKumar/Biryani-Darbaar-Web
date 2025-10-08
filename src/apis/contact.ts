import axiosInstance from "../lib/axiosInterceptor";
import type { ContactFormData } from "@/types/api.types";

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

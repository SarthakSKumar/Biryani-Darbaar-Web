import axiosInstance from "../axiosInterceptor";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  description: string;
}

/**
 * Submit contact form
 */
export const submitContactForm = async (
  data: ContactFormData
): Promise<void> => {
  await axiosInstance.post("/contact", data);
};

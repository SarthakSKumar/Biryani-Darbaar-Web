import axiosInstance from "../../lib/axiosInterceptor";

export interface Dish {
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

/**
 * Fetch dishes by category
 */
export const getDishesByCategory = async (
  category: string
): Promise<Dish[]> => {
  const response = await axiosInstance.get(
    `/dishes/category/${encodeURIComponent(category)}`
  );
  return response.data || [];
};

/**
 * Fetch special offer dishes
 */
export const getSpecialOffers = async (): Promise<Dish[]> => {
  const response = await axiosInstance.get("/specialOffers");
  return response.data || [];
};

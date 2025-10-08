import { useState, useEffect } from "react";
import axios from "axios";
import { API_ENDPOINT } from "@/config";
import { UseCategoriesReturn } from "@/types/hook.types";

/**
 * Custom hook for fetching categories
 * Eliminates repeated category-fetching logic
 */
export const useCategories = (): UseCategoriesReturn => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_ENDPOINT}/categories`);
        setCategories(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

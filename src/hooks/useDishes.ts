import { useState, useEffect } from "react";
import axios from "axios";
import { API_ENDPOINT } from "@/config/constants";
import { Dish } from "@/types";

/**
 * Custom hook for fetching dishes by category
 * Consolidates dish-fetching logic across pages
 */
export const useDishes = (category: string) => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!category) return;

    const fetchDishes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_ENDPOINT}/dishes/category/${encodeURIComponent(category)}`
        );
        setDishes(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching dishes:", err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, [category]);

  return { dishes, loading, error };
};

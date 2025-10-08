import { useState, useEffect } from "react";
import { dishesAPI } from "@/apis";
import { Dish } from "@/types/common.types";
import { UseDishesReturn } from "@/types/hook.types";

/**
 * Custom hook for fetching dishes by category
 * Consolidates dish-fetching logic across pages
 */
export const useDishes = (category: string): UseDishesReturn => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!category) return;

    const fetchDishes = async (): Promise<void> => {
      setLoading(true);
      try {
        const data = await dishesAPI.getDishesByCategory(category);
        setDishes(data);
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

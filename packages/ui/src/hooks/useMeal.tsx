"use client";

import { QueryClient, useQuery } from "@tanstack/react-query";

// --- 1. CONFIGURATION ---
// Initialize QueryClient outside of components
const queryClient = new QueryClient();

// Updated interface to match Free Food Menus API
export interface Meal {
  id: number;
  slug: string;
  name: string;
  dsc: string;
  price: number;
  img: string;
  rate: number;
  country: string;
}

// --- 2. DATA FETCHING LOGIC ---
const fetchMeal = async (category: string): Promise<Meal[]> => {
  // Ensure the category is safe for the URL
  const safeCategory = encodeURIComponent(category.toLowerCase());
  const res = await fetch(
    `https://free-food-menus-api-two.vercel.app/${safeCategory}`,
  );
  if (!res.ok) {
    // Log the error and throw
    console.error(
      `Error fetching meal category: ${safeCategory}`,
      res.statusText,
    );
    throw new Error(`Failed to fetch meals: ${res.statusText}`);
  }
  return res.json();
};

export const useMeals = (category: string) => {
  // Define constants for readability
  const FIVE_MINUTES = 1000 * 60 * 5;
  const TWENTY_FOUR_HOURS = 1000 * 60 * 60 * 24;

  return useQuery<Meal[], Error>({
    queryKey: ["meals", category],
    queryFn: () => fetchMeal(category),
    staleTime: FIVE_MINUTES,
    gcTime: TWENTY_FOUR_HOURS,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    enabled: !!category,
  });
};

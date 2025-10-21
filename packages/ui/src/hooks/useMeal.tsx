"use client";

import { useQuery } from "@tanstack/react-query";

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

const fetchMeal = async (category: string): Promise<Meal[]> => {
  const res = await fetch(
    `https://free-food-menus-api-two.vercel.app/${category}`,
  );
  if (!res.ok) throw new Error("Failed to fetch meals");
  return res.json();
};

export const useMeals = (category: string) => {
  return useQuery<Meal[], Error>({
    queryKey: ["meals", category],
    queryFn: () => fetchMeal(category),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

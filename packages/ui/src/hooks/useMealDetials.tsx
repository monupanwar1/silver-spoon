"use client";

import { useQuery } from "@tanstack/react-query";

export interface MealDetail {
  name: string;
  img: string;
  dsc: string;
  price: number;
  slug: string;
  id: number;
}

const fetchMealDetail = async (slug: string): Promise<MealDetail> => {
  const res = await fetch(
    `https://free-food-menus-api-two.vercel.app/api/menu/${slug}`,
    { cache: "no-store" },
  );
  if (!res.ok) throw new Error("Failed to fetch meal detail");
  return res.json();
};

export const useMealDetails = (slug: string) => {
  return useQuery<MealDetail, Error>({
    queryKey: ["MealDetail", slug],
    queryFn: () => fetchMealDetail(slug),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

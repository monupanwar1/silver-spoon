"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface MealDetail {
  id: string;
  name: string;
  img: string;
  dsc: string;
  price: number;
  rate: number;
  country: string;
}

export default function MealDemoPage() {
  const params = useParams();
  const { id } = params;

  const [meal, setMeal] = useState<MealDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchMeal = async () => {
      try {
        const res = await fetch(`/api/meal/${id}`);
        if (!res.ok) throw new Error("Failed to fetch meal");
        const data = await res.json();
        setMeal(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!meal) return <div>No meal found</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{meal.name}</h1>
      <Image height={600} width={400} src={meal.img} alt={meal.name} className="w-64 mt-4" />
      <p className="mt-2">{meal.dsc}</p>
      <p className="mt-2 font-semibold">${meal.price}</p>
      <p className="mt-1 text-gray-500">
        Rate: {meal.rate} | Country: {meal.country}
      </p>
    </div>
  );
}

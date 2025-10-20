"use client";

import { Button } from "@repo/ui/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";
import { useMeals } from "@repo/ui/hooks/useMeal";
import Image from "next/image";

const categories = [
  "burgers",
  "pizzas",
  "bbqs",
  "Breads",
  "Porks",
  "sandwiches",
  "sausages",
]; // endpoint names

function MealsTab({ category }: { category: string }) {
  const { data: meals, isLoading, error } = useMeals(category);

  if (isLoading)
    return <p className="text-center mt-10">Loading {category}...</p>;
  if (error)
    return <p className="text-center mt-10">Failed to load {category}</p>;
  if (!meals || meals.length === 0)
    return <p className="text-center mt-10">No {category} available.</p>;

  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {meals.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <Image
              width={600}
              height={400}
              src={item.img}
              alt={item.name}
              unoptimized
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">{item.name}</span>
                <span className="text-gray-900 font-semibold">
                  ₹{item.price}
                </span>
              </div>
              <p className="text-gray-500 text-sm">{item.dsc}</p>
              <Button className="w-full mt-2">Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenuTabs() {
  return (
    <main className="flex flex-col py-20 items-center justify-center">
      <header className="flex justify-center items-center mb-12 space-x-3">
        <h1 className="text-3xl font-bold text-gray-800">SilverSpoon</h1>
      </header>

      <section className="container mx-auto px-4 min-h-screen">
        <Tabs defaultValue="burgers" className="flex items-center justify-center flex-col">
          <TabsList className="flex justify-center mb-8 flex-wrap gap-2">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <MealsTab category={cat} />
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </main>
  );
}

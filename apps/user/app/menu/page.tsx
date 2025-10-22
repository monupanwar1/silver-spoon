"use client";

import { useState } from "react";
// 💡 Import motion
import { Button } from "@repo/ui/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@repo/ui/components/ui/dialog";
import { motion } from "framer-motion";
// 💡 Import Card
import { Card } from "@repo/ui/components/ui/card";
import H1 from "@repo/ui/components/ui/H1";
import P from "@repo/ui/components/ui/P";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";
import { Meal, useMeals } from "@repo/ui/hooks/useMeal";
import Image from "next/image";

// --- Data ---
const categories = [
  "burgers",
  "pizzas",
  "bbqs",
  "breads",
  "porks",
  "sandwiches",
  "sausages",
  "chocolates",
];

// --- Utility ---
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// Helper for image fallback, preventing broken image icons
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.target as HTMLImageElement;
  target.src =
    "https://placehold.co/600x400/e0f2f1/134e4a?text=Image+Not+Available";
};

// --- Custom Spinner Component ---
const Spinner: React.FC = () => (
  <div className="flex justify-center items-center py-12">
    <div
      className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent align-[-0.125em]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  </div>
);

// --- Meal List Component with Animation ---
interface MealListProps {
  category: string;
  onSelectMeal: (meal: Meal) => void;
}

const MealList: React.FC<MealListProps> = ({ category, onSelectMeal }) => {
  const { data: meals, isLoading, isError, error } = useMeals(category);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <p className="text-center text-red-600 mt-8">
        Error loading {capitalize(category)}: {error.message}. Please try again.
      </p>
    );
  }

  if (!meals || meals.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        No {capitalize(category)} found.
      </p>
    );
  }

  return (
    <div className="grid mt-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
      {/* 💡 Map over meals to get the index for staggered delay */}
      {meals.map((meal, index) => (
        <motion.div
          key={meal.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-full"
        >
          {/* Using the clean Shadcn Card structure */}
          <Card
            onClick={() => onSelectMeal(meal)}
            onError={handleImageError}
            className="h-90 w-80 bg-[#fff0da82] border-2 border-[#2D1E2F] rounded-2xl shadow-[6px_6px_0px_#2D1E2F] flex flex-col items-center justify-center text-center px-4 py-6 hover:scale-105 transition-transform duration-300 z-30"
          >
          

            <div className="relative w-full h-48 flex-shrink-0">
              <Image
                src={
                  meal.img ||
                  `https://placehold.co/400x200/4c51bf/ffffff?text=${meal.name}`
                }
                alt={meal.name}
                fill
                className="object-cover"
                onError={handleImageError}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-sm font-bold px-2 py-0.5 rounded-full z-10">
                ⭐ {meal.rate}
              </span>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-lg text-gray-800 line-clamp-1">
                {meal.name}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2 min-h-[2.5rem] mt-1 flex-grow">
                {meal.dsc}
              </p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-green-600 font-bold text-xl">
                  ₹{meal.price.toFixed(2)}
                </p>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Added ${meal.name} to cart!`);
                  }}
                  className="bg-[#FF6B35] hover:bg-[#e85b29] text-white text-lg rounded-xl shadow-[6px_6px_0px_#2D1E2F] hover:shadow-[3px_3px_0px_#2D1E2F] transition-all duration-300"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

// --- Main App Component (Unchanged) ---
export default function Menu() {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  return (
    <main className="min-h-screen mt-20 p-6 font-sans">
      {/* Header */}
      <header className="text-center mb-8">
        <H1>SilverSpoon Menu 🍽️</H1>
        <P>Explore our delicious menu items!</P>
      </header>

      {/* Tabs Component */}
      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="max-w-7xl mx-auto"
      >
        {/* Tabs List */}
        <div className="flex justify-center mb-8">
          <TabsList className="flex flex-wrap h-auto p-1 bg-gray-200 rounded-lg">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-indigo-700 data-[state=active]:shadow-md transition-all duration-300"
              >
                {capitalize(cat)}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Tabs Content */}
        {categories.map((cat) => (
          <TabsContent key={cat} value={cat}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Our {capitalize(cat)} Selection
            </h2>
            <MealList category={cat} onSelectMeal={setSelectedMeal} />
          </TabsContent>
        ))}
      </Tabs>

      {/* --- Dialog (Modal Detail View) --- */}
      <Dialog open={!!selectedMeal} onOpenChange={() => setSelectedMeal(null)}>
        <DialogContent className="max-w-lg sm:max-w-2xl">
          {selectedMeal && (
            <>
              <DialogHeader>
                <DialogTitle>
                  <H1>{selectedMeal.name}</H1>
                </DialogTitle>
                <DialogDescription>
                  <P>{selectedMeal.dsc}</P>
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="relative w-full h-64">
                  <Image
                    src={selectedMeal.img}
                    alt={selectedMeal.name}
                    fill
                    className="rounded-lg object-cover"
                    onError={handleImageError}
                    sizes="100vw"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <P>₹{selectedMeal.price.toFixed(2)}</P>
                  <P>⭐ {selectedMeal.rate} / 5</P>
                </div>
                <P>Origin: {selectedMeal.country}</P>
                <Button
                  className="bg-[#FF6B35] w-full hover:bg-[#e85b29] text-white text-lg px-8 py-4 rounded-xl shadow-[6px_6px_0px_#2D1E2F] hover:shadow-[3px_3px_0px_#2D1E2F] transition-all duration-300"
                  onClick={() =>
                    alert(
                      `Ordered ${selectedMeal.name} for ₹${selectedMeal.price.toFixed(2)}!`,
                    )
                  }
                >
                  Order Now
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}

"use client";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type Dish = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const dishes: Dish[] = [
  {
    name: "Classic Beef Burger",
    description:
      "Grilled veg patty with cheddar,tomato, and special sauce on a toasted bun.",
    price: "$8.99",
    image: "/burger.jpg",
  },
  {
    name: "Crispy French Fries",
    description:
      "Golden and crispy potato fries served with a side of ketchup.",
    price: "$3.49",
    image: "/french-fries.jpg",
  },
  {
    name: "Margherita Pizza",
    description:
      "Stone-baked pizza topped with fresh mozzarella a drizzle of olive oil.",
    price: "$11.50",
    image: "/pizza.jpg",
  },
];

export default function MenuSection() {
  const [likes, setLikes] = useState(Array(dishes.length).fill(false));
  const toggle = (index:number) => {
    setLikes((prevLikes) =>
      prevLikes.map((liked, i) => (i === index ? !liked : liked)),
    );
  };
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center">
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl font-bold text-[#FF6B35] uppercase tracking-wider"
      >
        our Menu
      </motion.h4>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-[#2D1E2F] mt-2 drop-shadow-[3px_3px_0px_#FF9F68]"
      >
        Our Popular Menu
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center font-medium text-[#4B2E05] mt-4 leading-relaxed"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
        perferendis!
      </motion.p>
      <div className="grid md:grid-cols-3 gap-10 mt-4 ">
        {dishes.map((dish, index) => (
          <motion.div
            key={dish.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="relative h-90 w-80 bg-[#fff0da82] border-2 border-[#2D1E2F] rounded-2xl shadow-[6px_6px_0px_#2D1E2F] flex flex-col items-center justify-center text-center px-4 py-6 hover:scale-105 transition-transform duration-300 z-30">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#FFB26B]/40 blur-2xl rounded-full agp-4" />

              <Image
                src={dish.image}
                alt={dish.name}
                height={600}
                width={1200}
                className="rounded-2xl  relative  mb-4 object-cover h-full "
              />

              <div className="p-4 flex flex-col items-center text-center gap-2">
                <CardTitle>{dish.name}</CardTitle>
                <CardDescription className="font-semibold w-80 text-neutral-900/70">
                  {dish.description}
                </CardDescription>
              </div>
              <div className="w-full h-[2px] border-b bg-neutral-950 "></div>
              <CardFooter className="flex justify-between py-4">
                <p>{dish.price}</p>
                <button onClick={()=>toggle(index)}>
                  {likes[index] ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
                </button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 right-2 text-[8rem] md:text-[14rem] font-extrabold text-[#2D1E2F] select-none"
      >
        MENU
      </motion.div>
      <Button className=" mt-20 bg-[#FF6B35] hover:bg-[#e85b29] text-white text-lg px-8 py-4 rounded-xl shadow-[6px_6px_0px_#2D1E2F] hover:shadow-[3px_3px_0px_#2D1E2F] transition-all duration-300">
        More Menu 🍔
      </Button>
    </section>
  );
}

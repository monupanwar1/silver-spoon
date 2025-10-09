"use client";

import { Button } from "@repo/ui/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative py-20 container px-4 min-h-screen w-full flex-col md:flex-row  items-center justify-center flex ">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,196,122,0.25)_0%,transparent_70%)] pointer-events-none" />
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-xl space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#2D1E2F] leading-tight drop-shadow-[4px_4px_0px_#FF934F]">
          Be The Fastest In <br />
          Delivery Your <span className="text-[#FF6B35]">Food</span>
        </h1>

        <p className="text-lg md:text-xl text-[#4B2E05] font-medium tracking-wide">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          maiores. */}
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
          <Button className="bg-[#FF6B35] hover:bg-[#e85b29] text-white text-lg px-8 py-4 rounded-xl shadow-[6px_6px_0px_#2D1E2F] hover:shadow-[3px_3px_0px_#2D1E2F] transition-all duration-300">
            Get Started 🚀
          </Button>
          <Button
            variant="outline"
            className="border-2 border-[#2D1E2F] text-[#2D1E2F] text-lg px-8 py-4 rounded-xl hover:bg-[#2D1E2F] hover:text-[#FFD8B1] transition-all duration-300 shadow-[4px_4px_0px_#FF6B35]"
          >
            View Menu 🍔
          </Button>
        </div>
      </motion.section>
      {/* right section */}
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 mt-12 md:mt-0"
      >
        <div className="relative">
          {/* glowing background */}
          <div className="absolute -inset-6 bg-[#FFB26B] blur-3xl opacity-40 animate-pulse rounded-full" />
          <Image
            src="https://images.unsplash.com/photo-1551730707-ae4fde676aae?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="retro burger and fries"
            width={650}
            height={450}
            priority
            className="relative rounded-2xl border-4 border-[#2D1E2F] shadow-[10px_10px_0px_#2D1E2F] object-cover h-[400px]"
          />
        </div>
      </motion.section>

      {/* text */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 right-10 text-[8rem] md:text-[12rem] text-[#2D1E2F] font-extrabold select-none"
      >
        90’s
      </motion.div>
    </section>
  );
}

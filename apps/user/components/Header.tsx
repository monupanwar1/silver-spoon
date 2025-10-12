"use client";
import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiForkAndKnife, CiLogin } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const routes = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const activePathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between backdrop-blur-2xl bg-transparent items-center border-b border-black h-14 md:px-9 px-3 fixed top-0 w-full z-50">
      {/* Logo */}
      <h1 className="flex items-center font-bold">
        SilverSpon{" "}
        <span>
          <CiForkAndKnife className="text-orange-500 font-bold text-xl" />
        </span>
      </h1>

      {/* Desktop Nav  ...*/}
      <nav className="hidden md:block h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map((route) => (
            <li
              key={route.path}
              className={cn(
                "transition flex items-center relative text-xl",
                activePathName === route.path
                  ? "text-neutral-900"
                  : "text-neutral-800",
              )}
            >
              <Link href={route.path}>{route.name}</Link>
              {activePathName === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-[#FF8702] h-1 w-full absolute bottom-0"
                />
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Side */}
      <div className="flex space-x-4 items-center">
        {/* Cart */}
        <div className="relative">
          <FaCartShopping className="text-xl" />
          <div className="absolute -top-2 -right-2 rounded-full bg-orange-400 flex items-center justify-center h-4 w-4 text-xs">
            2
          </div>
        </div>

        {/* Login */}
        <Button className="hidden md:flex items-center px-6 py-2 bg-[#FF6B35] hover:bg-[#e85b29] text-white text-md rounded-md shadow-[2px_2px_0px_#2D1E2F] hover:shadow-[3px_3px_0px_#2D1E2F] transition-all duration-300">
          <CiLogin className="mr-2" />
          <span>Login</span>
        </Button>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-14 right-0 w-2/3 h-screen backdrop-blur-3xl bg-[#FFF9EA] p-6 flex flex-col gap-6 md:hidden"
          >
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-lg font-medium",
                  activePathName === route.path
                    ? "text-orange-500"
                    : "text-neutral-800",
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </Link>
            ))}

            <Button className="items-center px-6 py-2 bg-[#FF6B35] hover:bg-[#e85b29] text-white text-md rounded-md shadow-[2px_2px_0px_#2D1E2F] hover:shadow-[3px_3px_0px_#2D1E2F] transition-all duration-300">
              <CiLogin className="mr-2" />
              <span>Login</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

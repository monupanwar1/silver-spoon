import {motion} from "framer-motion";
import React from "react";

interface H1Props{
  children:React.ReactNode
}

export default function H1({children}:H1Props) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-5xl font-extrabold text-[#2D1E2F] mt-2 drop-shadow-[3px_3px_0px_#FF9F68]"
    >
      {children}
    </motion.h1>
  );
}

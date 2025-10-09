"use client";

import Link from "next/link";
import { CiForkAndKnife } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative w-full mt-2  border-t border-[#2D1E2F] text-[#2D1E2F] overflow-hidden">
      {/* Retro background glow */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,100,0.25)_0%,transparent_80%)] pointer-events-none" /> */}

      {/* ✅ fixed width issue: removed 'container' */}
      <div className="w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left relative z-10">
        {/* Brand section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start"
        >
          <h1 className="flex items-center text-3xl font-extrabold tracking-wider drop-shadow-[2px_2px_0px_#FF9F68]">
            SilverSpon
            <span className="ml-1">
              <CiForkAndKnife className="text-[#FF6B35] text-3xl" />
            </span>
          </h1>
          <p className="font-semibold text-[#4B2E05]/80 mt-3">
            Jalan Semangka Raya, Telaga Murni
          </p>
          <div className="flex gap-5 mt-4 text-2xl text-[#2D1E2F]">
            <FaInstagram className="hover:text-[#FF6B35] transition-transform hover:scale-110" />
            <FaFacebook className="hover:text-[#FF6B35] transition-transform hover:scale-110" />
            <FaTwitter className="hover:text-[#FF6B35] transition-transform hover:scale-110" />
          </div>
        </motion.div>

        {/* Company links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center md:items-start"
        >
          <h1 className="font-bold text-2xl mb-2 drop-shadow-[2px_2px_0px_#FFB26B]">
            Company
          </h1>
          <Link href="/about" className="footer-link">
            About us
          </Link>
          <Link href="/career" className="footer-link">
            Career
          </Link>
          <Link href="#how-it-works" className="footer-link">
            How it Works
          </Link>
        </motion.div>

        {/* Policy links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center md:items-start"
        >
          <h1 className="font-bold text-2xl mb-2 drop-shadow-[2px_2px_0px_#FFB26B]">
            Policy
          </h1>
          <Link href="/faq" className="footer-link">
            FAQ
          </Link>
          <Link href="/privacy" className="footer-link">
            Privacy
          </Link>
          <Link href="/shipping" className="footer-link">
            Shipping
          </Link>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center md:items-start"
        >
          <h1 className="font-bold text-2xl mb-2 drop-shadow-[2px_2px_0px_#FFB26B]">
            Get In Touch
          </h1>
          <Link href="/#" className="footer-link">
            +91 123456789
          </Link>
          <p className="font-semibold text-[#4B2E05]/70 mt-1">
            silverspoon@gmail.com
          </p>
        </motion.div>
      </div>

      {/* Footer bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-t border-[#2D1E2F]/30 py-6 text-center text-sm font-semibold text-[#4B2E05]/70 relative z-10"
      >
        © {new Date().getFullYear()} Let&apos;sFood. ALL RIGHTS RESERVED 🍔
      </motion.div>

      {/* Large retro watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-2 right-2 text-[8rem] md:text-[14rem] font-extrabold text-[#2D1E2F] select-none"
      >
        EATS
      </motion.div>
    </footer>
  );
};

export default Footer;

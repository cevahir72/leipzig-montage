"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FlashyCTAProps {
  href: string;
  children: ReactNode;
  variant?: "light" | "primary";
}

export default function FlashyCTA({ href, children, variant = "light" }: FlashyCTAProps) {
  const isLight = variant === "light";

  return (
    <motion.div
      className="relative inline-block group"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <Link
        href={href}
        className={`relative inline-flex items-center gap-2.5 overflow-hidden rounded-lg font-bold text-lg px-11 py-4 cta-shimmer border-2 border-[#F97316] ${
          isLight
            ? "bg-white text-primary shadow-[0_8px_32px_rgba(249,115,22,0.25)] cta-glow-light"
            : "bg-on-primary text-primary shadow-[0_8px_32px_rgba(249,115,22,0.25)] cta-glow"
        } ${isLight ? "" : "cta-shimmer-dark"}`}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
        <span className="relative z-10 flex items-center gap-2.5">
          {children}
          <motion.span
            className="material-symbols-outlined text-xl"
            initial={{ x: 0 }}
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            arrow_forward
          </motion.span>
        </span>
        <span className="cta-sparkle-container">
          <span className="cta-sparkle" />
          <span className="cta-sparkle" />
          <span className="cta-sparkle" />
          <span className="cta-sparkle" />
          <span className="cta-sparkle" />
        </span>
      </Link>
    </motion.div>
  );
}

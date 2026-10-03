"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0, y: isLoading ? 0 : -20 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center">
        {/* Single color architectural logo placeholder */}
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Architectural reveal line */}
          <motion.path
            d="M20 80 L50 20 L80 80 H20 Z"
            stroke="var(--brand)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.text
            x="50"
            y="95"
            textAnchor="middle"
            fill="var(--brand)"
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            SALAAR
          </motion.text>
        </motion.svg>
      </div>
    </motion.div>
  );
}

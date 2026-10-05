"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="salaar-global-loader"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0b0f17] select-none"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {/* Subtle Ambient Gold Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,168,128,0.12)_0%,_transparent_65%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              <div className="p-3.5 rounded-full bg-white/5 border border-[#c5a880]/30 shadow-[0_0_35px_rgba(197,168,128,0.18)]">
                <Image
                  src="/Salaar logo.png"
                  alt="Salaar Properties"
                  width={68}
                  height={68}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <span className="text-xl md:text-2xl font-serif tracking-[0.28em] font-medium uppercase text-white leading-none">
                SALAAR
              </span>
              <span className="text-[10px] uppercase tracking-[0.45em] text-[#c5a880] font-sans font-semibold mt-2">
                PROPERTIES
              </span>
            </motion.div>

            {/* Architectural Gold Progress Line */}
            <div className="w-36 h-[1.5px] bg-white/10 rounded-full mt-7 overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent w-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

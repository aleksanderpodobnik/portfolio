"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      className="fixed bottom-5 right-5 bg-white w-16 h-16 bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white cursor-pointer overflow-hidden"
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          toggleTheme();
        }
      }}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      whileTap={{ rotate: 360 }}
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ y: -30, opacity: 0, rotate: -90 }}
            animate={{
              y: 0,
              opacity: 1,
              rotate: 0,
              scale: [1, 1.2, 1],
            }}
            exit={{ y: 30, opacity: 0, rotate: 90 }}
            transition={{
              duration: 0.5,
              scale: {
                duration: 0.3,
                times: [0, 0.5, 1],
              },
            }}
          >
            <BsSun className="size-8 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: -30, opacity: 0, rotate: -90 }}
            animate={{
              y: 0,
              opacity: 1,
              rotate: 0,
              scale: [1, 1.2, 1],
            }}
            exit={{ y: 30, opacity: 0, rotate: 90 }}
            transition={{
              duration: 0.5,
              scale: {
                duration: 0.3,
                times: [0, 0.5, 1],
              },
            }}
          >
            <BsMoon className="size-8 text-blue-300" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 dark:from-blue-400 dark:to-purple-500 opacity-0"
        animate={{
          scale: [1, 1.5, 2],
          opacity: [0.5, 0.2, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
      />
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import AnimatedMarquee from "./AnimatedMarquee";

const MARQUEE_WORDS = ["Ideas", "Technology", "Insights", "Results"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 px-2 sm:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={itemVariants}
        className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
      >
        Rapid System Intelligence Solutions
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl"
      >
        Set up your IFZA company with speed, simplicity and exceptional value
      </motion.p>

      <motion.div
        variants={slideInVariants}
        className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap"
      >
        <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Where
        </span>
        <AnimatedMarquee words={MARQUEE_WORDS} />
        <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Come Alive
        </span>
      </motion.div>
    </motion.div>
  );
}
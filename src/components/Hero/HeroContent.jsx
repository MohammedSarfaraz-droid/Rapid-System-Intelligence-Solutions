"use client";

import { motion, useReducedMotion } from "framer-motion";
import AnimatedMarquee from "./AnimatedMarquee";

const MARQUEE_WORDS = ["Ideas", "Technology", "Insights", "Results"];

export default function HeroContent() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { duration: 0, staggerChildren: 0 } },
      }
    : {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.15 } },
      };

  const itemVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      };

  const slideInVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, x: 0 },
        visible: { opacity: 1, x: 0, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      };

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
"use client";

import { motion } from "framer-motion";
import AnimatedMarquee from "./AnimatedMarquee";

const MARQUEE_WORDS = ["Ideas", "Technology", "Insights", "Results"];

export default function HeroContent() {
  return (
    <div className="md:col-span-7 flex flex-col justify-center space-y-4 md:space-y-5 px-2">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-white font-bold text-3xl md:text-4xl xl:text-5xl leading-tight"
      >
        Rapid System Intelligence Solutions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-white text-sm md:text-base xl:text-lg leading-relaxed max-w-2xl"
      >
        Set up your IFZA company with speed, simplicity and exceptional value
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex items-center gap-2 md:gap-3 flex-wrap"
      >
        <span className="text-white text-xl md:text-2xl xl:text-4xl font-bold">
          Where
        </span>
        <AnimatedMarquee words={MARQUEE_WORDS} />
        <span className="text-white text-xl md:text-2xl xl:text-4xl font-bold">
          Come Alive
        </span>
      </motion.div>
    </div>
  );
}
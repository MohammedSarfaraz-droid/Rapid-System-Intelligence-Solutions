"use client";

import AnimatedMarquee from "./AnimatedMarquee";

const MARQUEE_WORDS = ["Ideas", "Technology", "Insights", "Results"];

export default function HeroContent() {
  return (
    <div
      className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 px-2 sm:px-0"
    >
      <h1
        className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
      >
        Rapid System Intelligence Solutions
      </h1>

      <p
        className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl"
      >
        Set up your IFZA company with speed, simplicity and exceptional value
      </p>

      <div
        className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap"
      >
        <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Where
        </span>
        <AnimatedMarquee words={MARQUEE_WORDS} />
        <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Come Alive
        </span>
      </div>
    </div>
  );
}
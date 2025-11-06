"use client";

import { motion } from "framer-motion";

const AnimatedMarquee = ({ words = ["Ideas", "Technology", "Insights", "Results"] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.3,
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="
        relative overflow-hidden 
        h-12 sm:h-14 md:h-16 lg:h-[4.5rem] xl:h-20 
        w-56 sm:w-64 md:w-72 lg:w-80 
        backdrop-blur-sm inline-block 
        bg-[#17b212] rounded-xl
      "
    >
      {/* Mobile */}
      <motion.div
        animate={{ y: [0, -48, -96, -144, -192] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute inset-0 sm:hidden"
      >
        {[...words, words[0]].map((word, i) => (
          <div key={`mobile-${i}`} className="h-12 flex items-center justify-center px-4">
            <span className="text-xl font-bold text-white whitespace-nowrap">{word}</span>
          </div>
        ))}
      </motion.div>

      {/* Small */}
      <motion.div
        animate={{ y: [0, -56, -112, -168, -224] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute inset-0 hidden sm:block md:hidden"
      >
        {[...words, words[0]].map((word, i) => (
          <div key={`sm-${i}`} className="h-14 flex items-center justify-center px-6">
            <span className="text-2xl font-bold text-white whitespace-nowrap">{word}</span>
          </div>
        ))}
      </motion.div>

      {/* Medium */}
      <motion.div
        animate={{ y: [0, -64, -128, -192, -256] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute inset-0 hidden md:block lg:hidden"
      >
        {[...words, words[0]].map((word, i) => (
          <div key={`md-${i}`} className="h-16 flex items-center justify-center px-8">
            <span className="text-3xl font-bold text-white whitespace-nowrap">{word}</span>
          </div>
        ))}
      </motion.div>

      {/* Large */}
      <motion.div
        animate={{ y: [0, -80, -160, -240, -320] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute inset-0 hidden lg:block"
      >
        {[...words, words[0]].map((word, i) => (
          <div key={`lg-${i}`} className="h-[4.5rem] lg:h-20 flex items-center justify-center px-8">
            <span className="text-4xl xl:text-5xl font-bold text-white whitespace-nowrap">{word}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedMarquee;

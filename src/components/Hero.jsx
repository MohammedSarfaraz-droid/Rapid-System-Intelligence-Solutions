"use client";

import { motion } from "framer-motion";
import { useForm } from "@/hooks/useForm";
import HeroContent from "./Hero/HeroContent";
import ContactForm from "./Hero/ContactForm";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const { formData, handleChange, handleSubmit } = useForm();

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="relative flex-1 flex items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)]"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-8 md:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 items-center w-full">
          <HeroContent />
          
          <div className="lg:col-span-5 flex items-center w-full">
            <ContactForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
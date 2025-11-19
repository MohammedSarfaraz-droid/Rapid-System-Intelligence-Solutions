"use client";

import { useForm } from "@/hooks/useForm";
import HeroContent from "./Hero/HeroContent";
import ContactForm from "./Hero/ContactForm";

export default function Hero() {
  const { formData, handleChange, handleSubmit } = useForm();

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center min-h-[60vh] py-6 sm:py-8 md:py-8 "
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6  relative z-10 w-full py-6 sm:py-8 md:py-8 lg:py-12 ">
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
    </section>
  );
}
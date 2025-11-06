"use client";

import { useForm } from "@/hooks/useForm";
import HeroContent from "./Hero/HeroContent";
import ContactForm from "./Hero/ContactForm";

export default function Hero() {
  const { formData, handleChange, handleSubmit } = useForm();

  return (
    <section className="relative flex-1 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-4 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          <HeroContent />
          
          <div className="lg:col-span-5 flex items-center">
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
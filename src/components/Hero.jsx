"use client";

import { useForm } from "@/hooks/useForm";
import HeroContent from "./Hero/HeroContent";
import ContactForm from "./Hero/ContactForm";

export default function Hero() {
  const { formData, handleChange, handleSubmit } = useForm();

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center min-h-[100vh] md:min-h-screen pt-20 pb-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Images/RSIS-Banner.png')" }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center w-full">
          <HeroContent />
          
          <div className="md:col-span-5 flex items-center w-full">
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
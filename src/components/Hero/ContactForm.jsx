"use client";

import { motion } from "framer-motion";
import { SERVICE_OPTIONS, COUNTRY_CODES } from "@/constants/heroData";

const formVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3,
    },
  },
};

const inputVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5 + i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const FormInput = ({ type, placeholder, value, onChange, required, className = "", index }) => (
  <motion.input
    custom={index}
    variants={inputVariants}
    initial="hidden"
    animate="visible"
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-3 py-2.5 text-sm sm:text-base border-b border-gray-300 focus:border-[#17b212] focus:outline-none transition-colors ${className}`}
    required={required}
  />
);

const FormSelect = ({ value, onChange, options, placeholder, required, index }) => (
  <motion.div
    custom={index}
    variants={inputVariants}
    initial="hidden"
    animate="visible"
    className="relative"
  >
    <select
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2.5 text-sm sm:text-base border-b border-gray-300 focus:border-[#17b212] focus:outline-none bg-white appearance-none pr-8"
      required={required}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <svg
      className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none fill-gray-700"
      viewBox="0 0 20 20"
    >
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    </svg>
  </motion.div>
);

export default function ContactForm({ formData, handleChange, handleSubmit }) {
  const serviceOptions = SERVICE_OPTIONS.map((service) => ({
    value: service.toLowerCase().replace(/\s+/g, "-"),
    label: service,
  }));

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-auto max-h-[85vh] flex flex-col"
    >
      <div className="flex-shrink-0">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-base sm:text-lg md:text-xl font-bold text-center pt-3 sm:pt-4 pb-2 text-gray-800"
        >
          Let&apos;s Talk
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xs sm:text-sm md:text-base text-white py-2 sm:py-2.5 font-bold text-center bg-[#104ea9]"
        >
          Get a Call Back Shortly!
        </motion.p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 space-y-2.5 sm:space-y-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
      >
        <FormInput
          type="text"
          placeholder="Full name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          required
          index={0}
        />

        <FormInput
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          required
          index={1}
        />

        <motion.div
          custom={2}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-2"
        >
          <select
            value={formData.countryCode}
            onChange={(e) => handleChange("countryCode", e.target.value)}
            className="px-1.5 sm:px-2 py-2.5 text-xs sm:text-sm border-b border-gray-300 focus:border-[#17b212] focus:outline-none bg-white min-w-[80px] sm:min-w-[90px]"
          >
            {COUNTRY_CODES.map(({ code, label }) => (
              <option key={code} value={code}>
                {code} ({label})
              </option>
            ))}
          </select>
          <input
            type="tel"
            placeholder="Your phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="flex-1 px-3 py-2.5 text-sm sm:text-base border-b border-gray-300 focus:border-[#17b212] focus:outline-none transition-colors"
            required
          />
        </motion.div>

        <FormSelect
          value={formData.enquiryFor}
          onChange={(e) => handleChange("enquiryFor", e.target.value)}
          options={serviceOptions}
          placeholder="Select a service..."
          required
          index={3}
        />

        <motion.textarea
          custom={4}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          placeholder="Your enquiry"
          rows={2}
          value={formData.enquiry}
          onChange={(e) => handleChange("enquiry", e.target.value)}
          className="w-full px-3 py-2.5 border-b border-gray-300 text-sm sm:text-base focus:border-[#17b212] focus:outline-none transition-colors resize-none"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-600 text-center pt-1"
        >
          We will handle your personal data in compliance with our{" "}
          <a
            href="/privacy-policy"
            className="text-[#17b212] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center pt-1 sm:pt-2 pb-1 sm:pb-2"
        >
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#17b212] hover:bg-[#15a010] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors text-xs sm:text-sm md:text-base"
          >
            Get a Free Quote
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
}
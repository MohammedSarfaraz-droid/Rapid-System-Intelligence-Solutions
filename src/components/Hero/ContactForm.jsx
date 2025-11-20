"use client";

import { SERVICE_OPTIONS, COUNTRY_CODES } from "@/constants/heroData";

export default function ContactForm({ formData, handleChange, handleSubmit }) {
  const serviceOptions = SERVICE_OPTIONS.map((service) => ({
    value: service.toLowerCase().replace(/\s+/g, "-"),
    label: service,
  }));

  return (
    <div
      className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-auto max-h-[85vh] flex flex-col"
    >
      <div className="flex-shrink-0">
        <h3
          className="text-base md:text-lg font-bold text-center pt-3 md:pt-4 pb-2 text-gray-800"
        >
          Let&apos;s Talk
        </h3>
        <p
          className="text-xs md:text-sm text-white py-2 md:py-2.5 font-bold text-center bg-[#104ea9]"
        >
          Get a Call Back Shortly!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex-1 overflow-y-auto px-3 md:px-5 py-3 md:py-4 space-y-2.5 md:space-y-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
      >
        <input
          type="text"
          placeholder="Full name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`w-full px-3 py-2.5 text-sm md:text-base border-b border-gray-300 focus:border-[#17b212] focus:outline-none transition-colors`}
          required
        />

        <input
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`w-full px-3 py-2.5 text-sm md:text-base border-b border-gray-300 focus:border-[#17b212] focus:outline-none transition-colors`}
          required
        />

        <div
          className="flex gap-2"
        >
          <select
            value={formData.countryCode}
            onChange={(e) => handleChange("countryCode", e.target.value)}
            className="px-1.5 md:px-2 py-2.5 text-xs md:text-sm border-b border-gray-300 focus:border-[#17b212] focus:outline-none bg-white min-w-[80px] md:min-w-[85px]"
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
            className="flex-1 px-3 py-2.5 text-sm md:text-base border-b border-gray-300 focus:border-[#17b212] focus:outline-none transition-colors"
            required
          />
        </div>

        <select
          value={formData.enquiryFor}
          onChange={(e) => handleChange("enquiryFor", e.target.value)}
          required
          className="w-full px-3 py-2.5 text-sm md:text-base border-b border-gray-300 focus:border-[#17b212] focus:outline-none bg-white appearance-none pr-8"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <textarea
          placeholder="Your enquiry"
          rows={2}
          value={formData.enquiry}
          onChange={(e) => handleChange("enquiry", e.target.value)}
          className="w-full px-3 py-2.5 border-b border-gray-300 text-sm md:text-base focus:border-[#17b212] focus:outline-none transition-colors resize-none"
        />

        <p
          className="text-xs text-gray-600 text-center pt-1"
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
        </p>

        <div
          className="flex justify-center pt-1 md:pt-2 pb-1 md:pb-2"
        >
          <button
            type="submit"
            className="bg-[#17b212] hover:bg-[#15a010] text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-full transition-all hover:scale-105 active:scale-95 text-xs md:text-sm"
          >
            Get a Free Quote
          </button>
        </div>
      </form>
    </div>
  );
}
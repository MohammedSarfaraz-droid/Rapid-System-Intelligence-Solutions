import { SERVICE_OPTIONS, COUNTRY_CODES } from "@/constants/heroData";

const FormInput = ({ type, placeholder, value, onChange, required, className = "" }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-3 py-2.5 text-sm border-b border-gray-300 focus:border-[#17b212] focus:outline-none transition-colors ${className}`}
    required={required}
  />
);

const FormSelect = ({ value, onChange, options, placeholder, required }) => (
  <div className="relative">
    <select
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2.5 text-sm border-b border-gray-300 focus:border-[#17b212] focus:outline-none bg-white appearance-none pr-8"
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
  </div>
);

export default function ContactForm({ formData, handleChange, handleSubmit }) {
  const serviceOptions = SERVICE_OPTIONS.map((service) => ({
    value: service.toLowerCase().replace(/\s+/g, "-"),
    label: service,
  }));

  const countryOptions = COUNTRY_CODES.map(({ code, label }) => ({
    value: code,
    label: `${code} (${label})`,
  }));

  return (
    <div className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-auto max-h-[85vh] flex flex-col">
      <div className="flex-shrink-0">
        <h3 className="text-lg sm:text-xl font-bold text-center pt-4 pb-2 text-gray-800">
          Let&apos;s Talk
        </h3>
        <p className="text-sm sm:text-base text-white py-2.5 font-bold text-center bg-[#104ea9]">
          Get a Call Back Shortly!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
      >
        <FormInput
          type="text"
          placeholder="Full name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          required
        />

        <FormInput
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          required
        />

        <div className="flex gap-2">
          <select
            value={formData.countryCode}
            onChange={(e) => handleChange("countryCode", e.target.value)}
            className="px-2 py-2.5 text-sm border-b border-gray-300 focus:border-[#17b212] focus:outline-none bg-white"
          >
            {COUNTRY_CODES.map(({ code, label }) => (
              <option key={code} value={code}>
                {code} ({label})
              </option>
            ))}
          </select>
          <FormInput
            type="tel"
            placeholder="Your phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            className="flex-1"
          />
        </div>

        <FormSelect
          value={formData.enquiryFor}
          onChange={(e) => handleChange("enquiryFor", e.target.value)}
          options={serviceOptions}
          placeholder="Select a service..."
          required
        />

        <textarea
          placeholder="Your enquiry"
          rows={2}
          value={formData.enquiry}
          onChange={(e) => handleChange("enquiry", e.target.value)}
          className="w-full px-3 py-2.5 border-b border-gray-300 text-sm focus:border-[#17b212] focus:outline-none transition-colors resize-none"
        />

        <p className="text-[10px] sm:text-[11px] text-gray-600 text-center pt-1">
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

        <div className="flex justify-center pt-2 pb-2">
          <button
            type="submit"
            className="bg-[#17b212] hover:bg-[#15a010] text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm sm:text-base"
          >
            Get a Free Quote
          </button>
        </div>
      </form>
    </div>
  );
}
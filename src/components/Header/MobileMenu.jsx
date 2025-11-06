"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const CONTACT_LINKS = {
  "Email Us": "mailto:admin@rsisglobal.com",
  "Call Us": "tel:+971525889947",
  "WhatsApp": "https://wa.me/971525889947",
  "Visit Office": "#",
};

// ✅ Reusable Section Component
const Section = ({
  id,
  title,
  items,
  onItemClick,
  expandedSection,
  toggleSection,
  scrollable = false, // new prop
}) => (
  <div className="border-b border-white/20">
    {/* Sticky Header */}
    <button
      onClick={() => toggleSection(id)}
      className={`w-full flex items-center justify-between py-4 text-white text-lg font-bold hover:text-[#17b212] transition-colors 
      ${scrollable ? "sticky top-0 z-20 bg-[#124EA9] shadow-md" : ""}`}
    >
      <span>{title}</span>
      <motion.div
        animate={{ rotate: expandedSection === id ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-white text-base"
      >
        <FaChevronDown />
      </motion.div>
    </button>

    {/* Smooth Dropdown */}
    <AnimatePresence initial={false}>
      {expandedSection === id && (
        <motion.div
          key={id}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: 0.35,
            ease: [0.4, 0, 0.2, 1],
          }}
          className={`overflow-hidden ${
            scrollable ? "max-h-[60vh] overflow-y-auto" : ""
          }`}
        >
          <div className="pb-4 pl-4 space-y-2">
            {items.map(({ label, title, icon: Icon }) => (
              <button
                key={label || title}
                onClick={() => onItemClick?.(label || title)}
                className="w-full flex items-center gap-3 py-2 text-white text-base hover:text-[#17b212] transition-colors text-left"
              >
                <Icon className="text-lg shrink-0" />
                <span>{label || title}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ✅ Main Menu Component
export const MobileMenu = ({
  isOpen,
  onClose,
  companyItems,
  solutionItems,
  servicesCategories,
  contactItems,
}) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) =>
    setExpandedSection(expandedSection === section ? null : section);

  const handleContactClick = (label) => {
    const link = CONTACT_LINKS[label];
    if (link && link !== "#") {
      window.open(link, link.startsWith("http") ? "_blank" : "_self");
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-[#124EA9] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-white text-3xl font-bold hover:text-[#17b212] transition-colors"
          aria-label="Close menu"
        >
          ×
        </button>
      </div>

      {/* Menu Sections */}
      <nav className="flex flex-col h-[calc(100%-80px)] overflow-y-auto px-6">
        <Section
          id="company"
          title="Company"
          items={companyItems}
          expandedSection={expandedSection}
          toggleSection={toggleSection}
        />
        {/* 👇 scrollable dropdown for long list */}
        <Section
          id="solutions"
          title="Our Solutions"
          items={solutionItems}
          expandedSection={expandedSection}
          toggleSection={toggleSection}
          scrollable
        />
        <Section
          id="services"
          title="Services"
          items={servicesCategories}
          expandedSection={expandedSection}
          toggleSection={toggleSection}
        />
        <Section
          id="contact"
          title="Contact Us"
          items={contactItems}
          onItemClick={handleContactClick}
          expandedSection={expandedSection}
          toggleSection={toggleSection}
        />
      </nav>
    </div>
  );
};

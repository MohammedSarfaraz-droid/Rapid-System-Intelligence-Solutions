"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

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
  scrollable = false,
  showSocialLinks = false,
}) => {
  return (
    <div className="border-b border-white/20">
      {/* Sticky Header */}
      <button
        id={`accordion-button-${id}`}
        aria-expanded={expandedSection === id}
        aria-controls={`dropdown-${id}`}
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between px-4 py-2 text-[15px] text-white hover:bg-[#17b212] hover:text-white font-semibold"
      >
        <span>{title}</span>
        <span className="ml-2">{expandedSection === id ? "-" : "+"}</span>
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
              {items.map((item) => {
                const { label, title, icon: Icon, onClick } = item || {};
                return (
                  <li key={label || title}>
                    <button
                      onClick={onClick}
                      className="w-full text-left px-4 py-2 text-[15px] text-white hover:bg-[#17b212] hover:text-white font-semibold flex items-center gap-3"
                    >
                      {Icon && (
                        <span className="bg-white/20 rounded-full p-2 flex items-center justify-center">
                          <Icon size={18} className="shrink-0 text-white" />
                        </span>
                      )}
                      <span>{label || title}</span>
                    </button>
                  </li>
                );
              })}
              {/* Social Media Links */}
              {showSocialLinks && (
                <li className="flex justify-center gap-4 py-2 mt-4">
                  <a
                    href="https://x.com/RsisGlobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/20 hover:bg-[#17b212] rounded-full p-2 transition-colors flex items-center justify-center"
                    aria-label="Twitter"
                  >
                    <RiTwitterXFill size={18} className="text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rapid-system-intelligence-solutions-2b889a380"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/20 hover:bg-[#17b212] rounded-full p-2 transition-colors flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn size={18} className="text-white" />
                  </a>
                  <a
                    href="https://facebook.com/RsisGlobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/20 hover:bg-[#17b212] rounded-full p-2 transition-colors flex items-center justify-center"
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={18} className="text-white" />
                  </a>
                </li>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
        {/* 👇 Scrollable section (no shadow now) */}
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
          showSocialLinks={true}
        />
      </nav>
    </div>
  );
};

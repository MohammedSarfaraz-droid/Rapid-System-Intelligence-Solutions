"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Social Icons as Components
const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} height="1em" width="1em">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 448 512" fill="currentColor" className={className} height="1em" width="1em">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 320 512" fill="currentColor" className={className} height="1em" width="1em">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
  </svg>
);

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
          className="w-full flex items-center justify-between px-4 py-2 text-[15px] text-white hover:bg-[var(--brand-gold)] hover:text-white font-semibold"
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
                      className="w-full text-left px-4 py-2 text-[15px] text-white hover:bg-[var(--brand-gold)] hover:text-white font-semibold flex items-center gap-3"
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
                    className="group bg-white/20 hover:bg-[var(--brand-gold)] rounded-full p-2 transition-colors flex items-center justify-center"
                    aria-label="Twitter"
                  >
                    <XIcon className="text-white w-[18px] h-[18px]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rapid-system-intelligence-solutions-2b889a380"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/20 hover:bg-[var(--brand-gold)] rounded-full p-2 transition-colors flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="text-white w-[18px] h-[18px]" />
                  </a>
                  <a
                    href="https://facebook.com/RsisGlobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/20 hover:bg-[var(--brand-gold)] rounded-full p-2 transition-colors flex items-center justify-center"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="text-white w-[18px] h-[18px]" />
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
          className="text-white text-3xl font-bold hover:text-[var(--brand-gold)] transition-colors"
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

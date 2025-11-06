"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CONTACT_LINKS = {
  "Email Us": "mailto:admin@rsisglobal.com",
  "Call Us": "tel:+971525889947",
  "WhatsApp": "https://wa.me/971525889947",
  "Visit Office": "#",
};

export const MobileMenu = ({ isOpen, onClose, companyItems, solutionItems, servicesCategories, contactItems }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleContactClick = (label) => {
    const link = CONTACT_LINKS[label];
    if (link && link !== "#") {
      window.open(link, link.startsWith('http') ? '_blank' : '_self');
    }
  };

  return (
    <>
      {/* Mobile Menu Slide Panel */}
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

        {/* Menu Content */}
        <nav className="flex flex-col h-[calc(100%-80px)] overflow-y-auto px-6">
          {/* Company Section */}
          <div className="border-b border-white/20">
            <button
              onClick={() => toggleSection("company")}
              className="w-full flex items-center justify-between py-4 text-white text-lg font-bold hover:text-[#17b212] transition-colors"
            >
              <span>Company</span>
              {expandedSection === "company" ? (
                <FaChevronUp size={18} />
              ) : (
                <FaChevronDown size={18} />
              )}
            </button>
            {expandedSection === "company" && (
              <div className="pb-4 pl-4 space-y-2">
                {companyItems.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    className="w-full flex items-center gap-3 py-2 text-white text-base hover:text-[#17b212] transition-colors"
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Our Solutions Section */}
          <div className="border-b border-white/20">
            <button
              onClick={() => toggleSection("solutions")}
              className="w-full flex items-center justify-between py-4 text-white text-lg font-bold hover:text-[#17b212] transition-colors"
            >
              <span>Our Solutions</span>
              {expandedSection === "solutions" ? (
                <FaChevronUp size={18} />
              ) : (
                <FaChevronDown size={18} />
              )}
            </button>
            {expandedSection === "solutions" && (
              <div className="pb-4 pl-4 space-y-2">
                {solutionItems.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    className="w-full flex items-center gap-3 py-2 text-white text-sm hover:text-[#17b212] transition-colors text-left"
                  >
                    <Icon size={16} className="shrink-0" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Services Section */}
          <div className="border-b border-white/20">
            <button
              onClick={() => toggleSection("services")}
              className="w-full flex items-center justify-between py-4 text-white text-lg font-bold hover:text-[#17b212] transition-colors"
            >
              <span>Services</span>
              {expandedSection === "services" ? (
                <FaChevronUp size={18} />
              ) : (
                <FaChevronDown size={18} />
              )}
            </button>
            {expandedSection === "services" && (
              <div className="pb-4 pl-4 space-y-2">
                {servicesCategories.map(({ title, icon: Icon }) => (
                  <button
                    key={title}
                    className="w-full flex items-center gap-3 py-2 text-white text-base hover:text-[#17b212] transition-colors text-left"
                  >
                    <Icon size={18} className="shrink-0" />
                    <span>{title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact Us Section */}
          <div className="border-b border-white/20">
            <button
              onClick={() => toggleSection("contact")}
              className="w-full flex items-center justify-between py-4 text-white text-lg font-bold hover:text-[#17b212] transition-colors"
            >
              <span>Contact Us</span>
              {expandedSection === "contact" ? (
                <FaChevronUp size={18} />
              ) : (
                <FaChevronDown size={18} />
              )}
            </button>
            {expandedSection === "contact" && (
              <div className="pb-4 pl-4 space-y-2">
                {contactItems.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    onClick={() => handleContactClick(label)}
                    className="w-full flex items-center gap-3 py-2 text-white text-base hover:text-[#17b212] transition-colors"
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

"use client";

import { UpArrow } from "./DropdownComponents";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

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

// Desktop Contact Dropdown Component
export const ContactDropdown = ({ items = [], isOpen, onClose, toggleButtonRef }) => {
  const menuRef = useRef(null);

  // Focus management and Escape key handling
  useEffect(() => {
    if (!isOpen) return;
    // Focus the first focusable element in the menu
    const menu = menuRef.current;
    if (menu) {
      // Try to focus the first button inside the menu
      const firstButton = menu.querySelector('button, [tabindex]:not([tabindex="-1"])');
      if (firstButton) {
        firstButton.focus();
      } else {
        menu.focus();
      }
    }
    // Escape key handler
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && onClose) {
        onClose();
        // Return focus to toggle button if available
        if (toggleButtonRef && toggleButtonRef.current) {
          toggleButtonRef.current.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, toggleButtonRef]);

  if (!Array.isArray(items) || items.length === 0) return null;

  const handleContactClick = (label) => {
    const link = CONTACT_LINKS[label];
    if (link && link !== "#") {
      window.open(link, link.startsWith("http") ? "_blank" : "_self");
    }
  };

  return (
    <div
      ref={menuRef}
      role="menu"
      aria-hidden={!isOpen}
      tabIndex={-1}
      className={`absolute left-1/2 -translate-x-1/2 top-full mt-7 w-64 shadow-xl bg-white z-10 transition-all duration-300 ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 invisible"
      }`}
    >
      <UpArrow style={{ left: "50%", transform: "translateX(-50%)" }} />
      <ul className="py-2">
        {Array.isArray(items) && items.map(({ label, icon: Icon }) => (
          <li key={label}>
            <button
              role="menuitem"
              onClick={() => handleContactClick(label)}
              className="w-full text-left px-4 py-2 text-[15px] text-black hover:bg-[var(--brand-gold)] hover:text-white font-semibold flex items-center gap-2"
            >
              <Icon size={18} className="shrink-0" />
              <span>{label}</span>
            </button>
            <hr className="border-t border-gray-200 my-1" />
          </li>
        ))}
        <li className="flex justify-center gap-4 py-2">
          <a
            href="https://x.com/RsisGlobal"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0F4EA9] hover:bg-[var(--brand-gold)] rounded-full p-2 transition-colors flex items-center justify-center"
            aria-label="Twitter"
          >
            <XIcon className="text-white w-[18px] h-[18px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/rapid-system-intelligence-solutions-2b889a380"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0F4EA9] hover:bg-[var(--brand-gold)] rounded-full p-2 transition-colors flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="text-white w-[18px] h-[18px]" />
          </a>
          <a
            href="https://facebook.com/RsisGlobal"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0F4EA9] hover:bg-[var(--brand-gold)] rounded-full p-2 transition-colors flex items-center justify-center"
            aria-label="Facebook"
          >
            <FacebookIcon className="text-white w-[18px] h-[18px]" />
          </a>
        </li>
      </ul>
    </div>
  );
};

ContactDropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    })
  ),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  toggleButtonRef: PropTypes.object,
};

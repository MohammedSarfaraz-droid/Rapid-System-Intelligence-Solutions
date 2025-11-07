"use client";

import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { UpArrow } from "./DropdownComponents";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

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
              className="w-full text-left px-4 py-2 text-[15px] text-black hover:bg-[#17b212] hover:text-white font-semibold flex items-center gap-2"
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
            className="group bg-[#0F4EA9] hover:bg-[#17b212] rounded-full p-2 transition-colors flex items-center justify-center"
            aria-label="Twitter"
          >
            <RiTwitterXFill size={18} className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/rapid-system-intelligence-solutions-2b889a380"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0F4EA9] hover:bg-[#17b212] rounded-full p-2 transition-colors flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} className="text-white" />
          </a>
          <a
            href="https://facebook.com/RsisGlobal"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0F4EA9] hover:bg-[#17b212] rounded-full p-2 transition-colors flex items-center justify-center"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} className="text-white" />
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

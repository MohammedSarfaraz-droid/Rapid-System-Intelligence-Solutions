"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useHeaderState } from "@/hooks/useHeaderState";
import { COMPANY_ITEMS, CONTACT_ITEMS, SOLUTION_ITEMS, SERVICES_CATEGORIES } from "@/constants/headerData";
import { DropdownButton, SimpleDropdown, MegaMenu, ServicesMegaMenu } from "./Header/DropdownComponents";
import { ContactDropdown } from "./Header/ContactDropdown";
import { MobileMenu } from "./Header/MobileMenu";

export default function Header() {
  const { openMenu, scrolled, navRef, toggleMenu } = useHeaderState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [arrowPositions, setArrowPositions] = useState({});
  
  const companyRef = useRef(null);
  const solutionsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const updateArrowPositions = () => {
      const positions = {};
      
      if (solutionsRef.current) {
        const rect = solutionsRef.current.getBoundingClientRect();
        positions.solutions = rect.left + rect.width / 2;
      }
      
      if (servicesRef.current) {
        const rect = servicesRef.current.getBoundingClientRect();
        positions.services = rect.left + rect.width / 2;
      }
      
      setArrowPositions(positions);
    };

    updateArrowPositions();
    window.addEventListener('resize', updateArrowPositions);
    
    return () => window.removeEventListener('resize', updateArrowPositions);
  }, []);

  const headerClasses = `text-white fixed top-0 w-full z-50 transition-colors duration-500 ${
    scrolled ? "bg-[var(--brand-blue)] shadow-lg" : "bg-transparent"
  }`;

  const containerClasses = `mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 h-16 md:h-18 py-4 transition-all duration-300`;

  const logoClasses = "h-10 w-auto md:h-11";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={headerClasses}
    >
      <div className={containerClasses}>
        <Image
          src="/Images/inzone_logo__updated_gif.gif"
          alt="Inzone Logo"
          width={160}
          height={48}
          className={logoClasses}
          priority
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6" ref={navRef}>
          <div
            className="relative"
            onMouseEnter={() => toggleMenu("company")}
            onMouseLeave={() => toggleMenu(null)}
          >
            <DropdownButton
              label="Company"
              isOpen={openMenu === "company"}
              onClick={() => toggleMenu(openMenu === "company" ? null : "company")}
              buttonRef={companyRef}
            />
            <SimpleDropdown items={COMPANY_ITEMS} isOpen={openMenu === "company"} />
          </div>

          <div
            className="relative"
            onMouseEnter={() => toggleMenu("solutions")}
            onMouseLeave={() => toggleMenu(null)}
          >
            <DropdownButton
              label="Our Solutions"
              isOpen={openMenu === "solutions"}
              onClick={() => toggleMenu(openMenu === "solutions" ? null : "solutions")}
              buttonRef={solutionsRef}
            />
            <MegaMenu
              items={SOLUTION_ITEMS}
              isOpen={openMenu === "solutions"}
              arrowLeft={arrowPositions.solutions}
            />
          </div>

          <div
            className="relative"
            onMouseEnter={() => toggleMenu("services")}
            onMouseLeave={() => toggleMenu(null)}
          >
            <DropdownButton
              label="Services"
              isOpen={openMenu === "services"}
              onClick={() => toggleMenu(openMenu === "services" ? null : "services")}
              buttonRef={servicesRef}
            />
            <ServicesMegaMenu
              categories={SERVICES_CATEGORIES}
              isOpen={openMenu === "services"}
              arrowLeft={arrowPositions.services}
            />
          </div>

          <div
            className="relative"
            onMouseEnter={() => toggleMenu("contact")}
            onMouseLeave={() => toggleMenu(null)}
          >
            <DropdownButton
              label="Contact Us"
              isOpen={openMenu === "contact"}
              onClick={() => toggleMenu(openMenu === "contact" ? null : "contact")}
              buttonRef={contactRef}
            />
            <ContactDropdown items={CONTACT_ITEMS} isOpen={openMenu === "contact"} />
          </div>
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        companyItems={COMPANY_ITEMS}
        solutionItems={SOLUTION_ITEMS}
        servicesCategories={SERVICES_CATEGORIES}
        contactItems={CONTACT_ITEMS}
      />
    </motion.header>
  );
}
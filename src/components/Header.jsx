"use client";

import Image from "next/image";
import { useState } from "react";
import { useHeaderState } from "@/hooks/useHeaderState";
import { COMPANY_ITEMS, CONTACT_ITEMS, SOLUTION_ITEMS, SERVICES_CATEGORIES } from "@/constants/headerData";
import { DropdownButton, SimpleDropdown, MegaMenu, ServicesMegaMenu } from "./Header/DropdownComponents";
import { ContactDropdown } from "./Header/ContactDropdown";
import { MobileMenu } from "./Header/MobileMenu";

export default function Header() {
  const { openMenu, scrolled, navRef, toggleMenu } = useHeaderState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerClasses = `text-white sticky top-0 w-full z-50 transition-all duration-300 ${
    scrolled ? "bg-[#0F4EA9] shadow-lg" : "bg-transparent"
  }`;

  const containerClasses = `mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
    scrolled ? "h-8 sm:h-12 py-0" : "h-16 sm:h-20 py-4"
  }`;

  const logoClasses = scrolled ? "h-6 w-auto sm:h-8" : "h-10 w-auto sm:h-12";

  return (
    <header className={headerClasses}>
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
          <DropdownButton
            label="Company"
            isOpen={openMenu === "company"}
            onClick={() => toggleMenu("company")}
          >
            <SimpleDropdown items={COMPANY_ITEMS} isOpen={openMenu === "company"} />
          </DropdownButton>

          <DropdownButton
            label="Our Solutions"
            isOpen={openMenu === "solutions"}
            onClick={() => toggleMenu("solutions")}
          >
            <MegaMenu
              items={SOLUTION_ITEMS}
              isOpen={openMenu === "solutions"}
              arrowLeft="calc(50% + 280px)"
            />
          </DropdownButton>

          <DropdownButton
            label="Services"
            isOpen={openMenu === "services"}
            onClick={() => toggleMenu("services")}
          >
            <ServicesMegaMenu
              categories={SERVICES_CATEGORIES}
              isOpen={openMenu === "services"}
              arrowLeft="calc(50% + 430px)"
            />
          </DropdownButton>

          <DropdownButton
            label="Contact Us"
            isOpen={openMenu === "contact"}
            onClick={() => toggleMenu("contact")}
          >
            <ContactDropdown items={CONTACT_ITEMS} isOpen={openMenu === "contact"} />
          </DropdownButton>
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
    </header>
  );
}
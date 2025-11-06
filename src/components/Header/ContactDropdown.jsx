import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { UpArrow } from "./DropdownComponents";

const CONTACT_LINKS = {
  "Email Us": "mailto:admin@rsisglobal.com",
  "Call Us": "tel:+971525889947",
  "WhatsApp": "https://wa.me/971525889947",
  "Visit Office": "#", // Add office location link if needed
};

const SOCIAL_LINKS = [
  { icon: RiTwitterXFill, href: "https://x.com/RsisGlobal", label: "Twitter" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/rapid-system-intelligence-solutions-2b889a380", label: "LinkedIn" },
];

export const ContactDropdown = ({ items, isOpen }) => {
  const handleContactClick = (label) => {
    const link = CONTACT_LINKS[label];
    if (link && link !== "#") {
      window.open(link, link.startsWith('http') ? '_blank' : '_self');
    }
  };

  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 top-full mt-7 w-[260px] bg-white shadow-xl z-10 transition-all duration-300 ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 invisible"
      }`}
    >
      <UpArrow style={{ left: "50%", transform: "translateX(-50%)" }} />
      <ul className="py-2">
        {items.map(({ label, icon: Icon }) => (
          <li key={label}>
            <button 
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
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0F4EA9] hover:bg-[#17b212] rounded-full p-2 transition-colors flex items-center justify-center"
              aria-label={label}
            >
              <Icon size={18} className="text-white" />
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
};
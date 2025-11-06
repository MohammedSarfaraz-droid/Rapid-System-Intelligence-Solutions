export const Arrow = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 16 16"
    fill="white"
    stroke="white"
    strokeWidth="2"
    className="ml-0.5"
  >
    <polygon points="8,12 3,6 13,6" />
  </svg>
);

export const UpArrow = ({ style }) => (
  <div
    className="absolute -top-[18px]"
    style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.18))", ...style }}
  >
    <svg
      width="24"
      height="18"
      viewBox="0 0 16 16"
      fill="white"
      stroke="white"
      strokeWidth="2"
    >
      <polygon points="8,3 2,15 14,15" />
    </svg>
  </div>
);

export const DropdownButton = ({ label, isOpen, onClick, children }) => (
  <div className="relative">
    <button
      className="text-[16px] font-bold flex items-center gap-1 hover:text-[#1ab213]"
      onClick={onClick}
    >
      {label}
      <span style={{ visibility: isOpen ? "hidden" : "visible" }}>
        <Arrow />
      </span>
    </button>
    {children}
  </div>
);

export const SimpleDropdown = ({ items, isOpen, arrowPosition }) => (
  <div
    className={`absolute left-1/2 -translate-x-1/2 top-full mt-7 w-[260px] bg-white shadow-xl z-10 transition-all duration-300 ${
      isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 invisible"
    }`}
  >
    <UpArrow style={{ left: "50%", transform: "translateX(-50%)", ...arrowPosition }} />
    <ul className="py-2">
      {items.map(({ label, icon: Icon }) => (
        <li key={label}>
          <button className="w-full text-left px-4 py-2 text-[15px] text-black hover:bg-[#17b212] hover:text-white font-semibold flex items-center gap-2">
            <Icon size={18} className="shrink-0" />
            <span>{label}</span>
          </button>
          <hr className="border-t border-gray-200 my-1" />
        </li>
      ))}
    </ul>
  </div>
);

export const MegaMenu = ({ items, isOpen, arrowLeft }) => (
  <div
    className={`fixed left-0 right-0 top-[64px] sm:top-[80px] bg-white shadow-xl z-10 transition-all duration-300 ${
      isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 invisible"
    }`}
  >
    <UpArrow style={{ left: arrowLeft }} />
    <div className="mx-auto max-w-7xl px-6 py-6">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
        {items.map(({ label, icon: Icon }) => (
          <li key={label}>
            <button className="w-full text-left px-4 py-3 text-[14px] text-black hover:bg-[#17b212] hover:text-white font-semibold rounded flex items-start gap-3 transition-colors">
              <Icon size={18} className="shrink-0 mt-0.5" />
              <span className="leading-tight">{label}</span>
            </button>
            <hr className="border-t border-gray-200 my-1" />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const ServicesMegaMenu = ({ categories, isOpen, arrowLeft }) => (
  <div
    className={`fixed left-0 right-0 top-[64px] sm:top-[80px] bg-white shadow-xl z-10 transition-all duration-300 ${
      isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 invisible"
    }`}
  >
    <UpArrow style={{ left: arrowLeft }} />
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-4 px-4">
        {categories.map(({ title, icon: Icon }) => (
          <div key={title}>
            <button className="flex items-center gap-3 py-3 px-4 text-black font-semibold text-[15px] w-full text-left hover:bg-[#17b212] hover:text-white transition-colors rounded mb-0">
              <Icon size={20} className="shrink-0" />
              {title}
            </button>
            <hr className="border-t border-gray-200 my-1" />
          </div>
        ))}
      </div>
    </div>
  </div>
);
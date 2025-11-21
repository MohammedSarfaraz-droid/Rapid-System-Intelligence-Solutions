import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const MobileServiceItem = ({ service, onClick, isOpen }) => (
  <button
    onClick={onClick}
    aria-expanded={isOpen}
    className={`w-full p-5 flex items-center justify-between transition-all duration-300 ${
      isOpen ? 'bg-[var(--brand-blue)]' : 'bg-transparent hover:bg-white/5'
    }`}
  >
    <div className="flex items-center gap-4 text-left">
      <span className={`text-lg font-medium leading-tight ${isOpen ? 'text-white' : 'text-white/90'}`}>
        {service.title}
      </span>
    </div>
    <motion.div
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-[var(--brand-gold)]' : 'text-white/50'}`} />
    </motion.div>
  </button>
);

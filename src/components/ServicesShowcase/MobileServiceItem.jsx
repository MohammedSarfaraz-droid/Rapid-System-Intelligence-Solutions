import { motion } from 'framer-motion';

export const MobileServiceItem = ({ service, onClick }) => (
  <motion.button
    onClick={onClick}
    className="w-full bg-[#21201F] border-b border-gray-700 py-6 px-6 text-left hover:bg-[#2a2927] transition-colors"
    whileHover={{ backgroundColor: '#2a2927' }}
  >
    <div className="flex items-center justify-between">
      <h3 className="text-white text-xl font-bold">{service.title}</h3>
      <span className="text-[#d4af37] text-2xl font-bold">{service.letter}</span>
    </div>
  </motion.button>
);

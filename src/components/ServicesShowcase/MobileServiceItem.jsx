import { motion } from 'framer-motion';

export const MobileServiceItem = ({ service, onClick }) => (
  <motion.button
    onClick={onClick}
    className="w-full bg-[#0F4EA9] border-b border-white/20 py-6 px-6 text-left hover:bg-[#1a5ec4] transition-colors"
    whileHover={{ backgroundColor: '#1a5ec4' }}
  >
    <div className="flex items-center justify-between">
      <h3 className="text-white text-xl font-bold">{service.title}</h3>
      <span className="text-[#17b212] text-2xl font-bold">{service.letter}</span>
    </div>
  </motion.button>
);

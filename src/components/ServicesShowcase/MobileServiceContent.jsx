import { motion } from 'framer-motion';
import { ANIMATION_CONFIG } from './constants';

export const MobileServiceContent = ({ service }) => (
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.easing }}
    className="overflow-hidden bg-[#1a1918] border-b border-gray-700"
  >
    <div className="p-6 space-y-4">
      <h2 className="text-[#d4af37] text-lg font-bold mb-2">{service.subtitle}</h2>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
    </div>
  </motion.div>
);

import { motion } from 'framer-motion';
import { ANIMATION_CONFIG } from './constants';

export const ServiceDescriptionContent = ({ service, isRightSide, isExiting }) => (
  <motion.div 
    className="flex-1 bg-[#f3f3f3] p-12 flex flex-col justify-center overflow-hidden"
    initial={!isExiting ? { opacity: 0, x: isRightSide ? 100 : -100 } : { opacity: 1, x: 0 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.easing }}
  >
    <div className="max-w-2xl ml-auto text-right space-y-6">
      <h2 
        className="text-[#21201F] leading-none"
        style={{ fontSize: 'clamp(2rem, 3.4vw, 3.4rem)' }}
      >
        {service.title}
      </h2>
      
      <strong className="block text-[#d4af37] text-xl md:text-2xl font-bold leading-tight">
        {service.subtitle}
      </strong>
      
      <p 
        className="text-[#21201F] font-light leading-relaxed"
        style={{ fontFamily: '"Hind", sans-serif' }}
      >
        {service.description}
      </p>
    </div>
  </motion.div>
);

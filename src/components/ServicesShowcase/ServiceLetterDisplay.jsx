import { motion } from 'framer-motion';
import { ANIMATION_CONFIG } from './constants';

export const ServiceLetterDisplay = ({ service, isRightSide, isExiting }) => (
  <motion.div 
    className="flex-1 relative bg-[#f3f3f3] flex items-center justify-center overflow-hidden"
    initial={!isExiting ? { opacity: 0, x: isRightSide ? 100 : -100 } : { opacity: 1, x: 0 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.easing }}
  >
    <span
      className="font-bold uppercase text-center select-none relative"
      style={{ 
        fontSize: 'clamp(200px, 25vw, 660px)',
        fontFamily: 'TT Firs Neue',
        lineHeight: '1',
        background: `url(${service.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        filter: 'brightness(1.2) contrast(1.1)',
      }}
    >
      {service.letter}
    </span>
  </motion.div>
);

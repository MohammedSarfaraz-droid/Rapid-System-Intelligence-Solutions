import { motion } from 'framer-motion';
import { ANIMATION_CONFIG, PANEL_DIMENSIONS } from './constants';

export const StackedServicePanel = ({ service, onClick }) => (
  <motion.button
    layout="position"
    onClick={onClick}
    className="relative h-full overflow-hidden group cursor-pointer"
    initial={{ width: PANEL_DIMENSIONS.closedWidth }}
    animate={{ width: PANEL_DIMENSIONS.closedWidth }}
    whileHover={{ width: PANEL_DIMENSIONS.hoverWidth }}
    transition={{ 
      duration: 0.15, 
      layout: { duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.easing } 
    }}
  >
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${service.bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/20 transition-colors" />
    </div>
    <div className="relative h-full flex items-end justify-center pb-6">
      <motion.span 
        className="text-white font-medium transform rotate-180 tracking-wider group-hover:-translate-y-2 transition-transform duration-200"
        style={{ 
          writingMode: 'vertical-rl',
          fontSize: '1.25rem',
          letterSpacing: '0.1em',
          fontFamily: 'TT Firs Neue'
        }}
      >
        {service.title}
      </motion.span>
    </div>
  </motion.button>
);

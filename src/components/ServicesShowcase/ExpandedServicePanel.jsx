import { motion } from 'framer-motion';
import { ANIMATION_CONFIG, PANEL_DIMENSIONS } from './constants';
import { ServiceLetterDisplay } from './ServiceLetterDisplay';
import { ServiceDescriptionContent } from './ServiceDescriptionContent';

export const ExpandedServicePanel = ({ service, isExiting, isRightSide }) => (
  <motion.div
    layout="position"
    className="flex h-full overflow-hidden relative"
    initial={isExiting ? { flex: 1 } : { width: PANEL_DIMENSIONS.closedWidth }}
    animate={isExiting ? { width: PANEL_DIMENSIONS.closedWidth, flex: 0 } : { flex: 1 }}
    exit={{ width: PANEL_DIMENSIONS.closedWidth, flex: 0 }}
    transition={{ 
      duration: ANIMATION_CONFIG.duration, 
      ease: ANIMATION_CONFIG.easing
    }}
  >
    <motion.div 
      className="flex flex-1 min-w-0 h-full"
      initial={{ x: isRightSide ? '0%' : '0%' }}
      animate={{ x: 0 }}
      transition={{ 
        duration: ANIMATION_CONFIG.duration, 
        ease: ANIMATION_CONFIG.easing 
      }}
    >
      <ServiceLetterDisplay service={service} isRightSide={isRightSide} isExiting={isExiting} />
      <ServiceDescriptionContent service={service} isRightSide={isRightSide} isExiting={isExiting} />
    </motion.div>
  </motion.div>
);

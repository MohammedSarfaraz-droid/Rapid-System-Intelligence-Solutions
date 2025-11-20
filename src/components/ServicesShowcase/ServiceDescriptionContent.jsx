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
    <div className="max-w-2xl ml-auto font-[400] text-right space-y-6">
      <h2 
        className="text-[#0F4EA9] leading-none"
        style={{ fontSize: 'clamp(2rem, 3.4vw, 2.3rem)' }}
      >
        {service.title}
      </h2>
      
      <strong className="block text-[#17b212] text-xl md:text-2xl font-[600] leading-tight">
        {service.subtitle}
      </strong>
      
      <p 
        className="text-gray-700 font-light leading-relaxed"
        style={{ fontFamily: '"Hind", sans-serif' }}
      >
        {service.description}
      </p>
    </div>
  </motion.div>
);

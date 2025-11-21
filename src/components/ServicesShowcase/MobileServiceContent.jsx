import { motion } from 'framer-motion';
import Image from 'next/image';
import { ANIMATION_CONFIG } from './constants';

export const MobileServiceContent = ({ service }) => (
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.easing }}
    className="overflow-hidden bg-white"
  >
    <div className="relative w-full h-48">
      <Image
        src={service.bgImage}
        alt={service.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
    
    <div className="p-6 space-y-4">
      <h2 className="text-[var(--brand-blue)] text-lg font-bold leading-tight">
        {service.subtitle}
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed font-light">
        {service.description}
      </p>
    </div>
  </motion.div>
);

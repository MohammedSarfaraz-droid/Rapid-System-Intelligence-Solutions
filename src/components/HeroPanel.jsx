'use client';
import { useState } from 'react';
import { SERVICES_DATA, ANIMATION_CONFIG } from './ServicesShowcase/constants';
import { MobileServicesLayout } from './ServicesShowcase/MobileServicesLayout';
import { DesktopServicesLayout } from './ServicesShowcase/DesktopServicesLayout';
import { useMobileDetection } from './ServicesShowcase/useMobileDetection';

export default function ServicesShowcase() {
  const [activeServiceId, setActiveServiceId] = useState('r');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExpandingFromRight, setIsExpandingFromRight] = useState(false);
  const isMobile = useMobileDetection();

  const handleServiceClick = (serviceId) => {
    if (isMobile) {
      setActiveServiceId(activeServiceId === serviceId ? null : serviceId);
      return;
    }

    if (serviceId === activeServiceId || isTransitioning) return;
    
    // Determine expansion direction based on panel positions
    const activeIndex = SERVICES_DATA.findIndex(s => s.id === activeServiceId);
    const clickedIndex = SERVICES_DATA.findIndex(s => s.id === serviceId);
    setIsExpandingFromRight(clickedIndex > activeIndex);
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveServiceId(serviceId);
      setTimeout(() => {
        setIsTransitioning(false);
      }, ANIMATION_CONFIG.transitionDelay);
    }, ANIMATION_CONFIG.transitionDelay);
  };

  return isMobile ? (
    <MobileServicesLayout 
      services={SERVICES_DATA}
      activeServiceId={activeServiceId}
      onServiceClick={handleServiceClick}
    />
  ) : (
    <DesktopServicesLayout 
      services={SERVICES_DATA}
      activeServiceId={activeServiceId}
      onServiceClick={handleServiceClick}
      isExpandingFromRight={isExpandingFromRight}
    />
  );
}


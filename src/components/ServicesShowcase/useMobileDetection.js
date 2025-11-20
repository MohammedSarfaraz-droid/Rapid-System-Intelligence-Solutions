import { useState, useEffect } from 'react';
import { PANEL_DIMENSIONS } from './constants';

export const useMobileDetection = () => {
  // Start with false to avoid hydration mismatch (assume desktop on server)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < PANEL_DIMENSIONS.mobileBreakpoint);
    };
    
    // Check immediately on mount
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkMobile);
      }
    };
  }, []);

  return isMobile;
};

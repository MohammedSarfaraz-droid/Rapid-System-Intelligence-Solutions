"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      
      // --- Customization Options ---
      duration: 2.5, // Increased duration for much smoother, floaty scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      
      orientation: 'vertical', 
      gestureOrientation: 'vertical', 
      
      smoothWheel: true, 
      wheelMultiplier: 0.8, // Slightly reduced speed for more control and weight
      
      touchMultiplier: 2, 
      infinite: false, 
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

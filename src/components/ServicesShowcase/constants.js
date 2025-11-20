// Animation Configuration
export const ANIMATION_CONFIG = {
  duration: 0.2, // in seconds (for Framer Motion)
  easing: [0.25, 0.1, 0.25, 1],
  transitionDelay: 200, // in milliseconds (for setTimeout)
};

export const PANEL_DIMENSIONS = {
  closedWidth: 80,
  hoverWidth: 100,
  mobileBreakpoint: 1024,
};

// Services Data
export const SERVICES_DATA = [
  {
    id: 'r',
    letter: 'R',
    title: 'RAPID SYSTEM INTELLIGENCE SOLUTIONS',
    subtitle: 'DELIVERING SMART, SCALABLE IT SOLUTIONS',
    description: 'Rapid System Intelligence Solutions builds reliable software and engineering platforms that help businesses move faster, scale securely, and make data-driven decisions. We combine product-grade engineering, cloud-first architecture, and practical AI to turn ideas into production.',
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
  },
  {
    id: 'e',
    letter: 'E',
    title: 'ENGINEERING SOLUTIONS',
    subtitle: 'INDUSTRIAL-GRADE SYSTEM DESIGN & INTEGRATION',
    description: 'From embedded systems to IoT and automation, our engineering team delivers robust, maintainable systems — hardware integration, PLC & embedded firmware, industrial software and custom system integration. We focus on reliability, safety, and long-term support.',
    bgImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80'
  },
  {
    id: 's',
    letter: 'S',
    title: 'SOFTWARE PRODUCT DEVELOPMENT',
    subtitle: 'FROM MVPs TO ENTERPRISE PRODUCTS',
    description: 'We design, build, and maintain software products — web backends, APIs, microservices and SaaS platforms. Emphasis on clean architecture, automated testing, and CI pipelines so your product ships faster and stays healthy in production.',
    bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
  },
  {
    id: 'w',
    letter: 'W',
    title: 'WEB & ECOMMERCE SOLUTIONS',
    subtitle: 'FAST, ACCESSIBLE, CONVERSION-FOCUSED WEBSITES',
    description: 'Modern websites and eCommerce platforms built for performance and conversions — responsive design, headless CMS options, SEO-friendly implementations and secure payment integrations. We optimize for speed and business outcomes.',
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    id: 'm',
    letter: 'M',
    title: 'MOBILE & APP DEVELOPMENT',
    subtitle: 'NATIVE & CROSS-PLATFORM APPS THAT ENGAGE',
    description: 'Native iOS/Android and cross-platform apps developed with user-first design, smooth performance and reliable offline behavior. We handle architecture, app store delivery, analytics and post-launch updates.',
    bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80'
  }
];

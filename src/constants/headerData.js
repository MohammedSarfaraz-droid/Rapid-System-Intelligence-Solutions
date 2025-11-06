import {
  FaInfoCircle,
  FaCogs,
  FaBullseye,
  FaUsers,
  FaProjectDiagram,
  FaDatabase,
  FaTools,
  FaLaptopCode,
  FaServer,
  FaGlobe,
  FaSitemap,
  FaNetworkWired,
  FaRobot,
  FaBrain,
  FaShoppingCart,
  FaUserCog,
  FaBriefcase,
  FaRocket,
  FaCode,
  FaLightbulb,
  FaChartLine,
  FaShieldAlt,
  FaHeart,
  FaIndustry,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const COMPANY_ITEMS = [
  { label: "About Us", icon: FaInfoCircle },
  { label: "How We Work", icon: FaCogs },
  { label: "Our Mission & Vision", icon: FaBullseye },
  { label: "Our Team", icon: FaUsers },
];

export const CONTACT_ITEMS = [
  { label: "Email Us", icon: FaEnvelope },
  { label: "Call Us", icon: FaPhoneAlt },
  { label: "WhatsApp", icon: FaWhatsapp },
  { label: "Visit Office", icon: FaMapMarkerAlt },
];

export const SOLUTION_ITEMS = [
  { label: "Software Systems Design & Development", icon: FaProjectDiagram },
  { label: "Data-Driven Software Systems", icon: FaDatabase },
  { label: "Systems Software including updates & patches", icon: FaTools },
  { label: "Software Application Development including updates", icon: FaLaptopCode },
  { label: "Database Development", icon: FaServer },
  { label: "Web Page Development", icon: FaGlobe },
  { label: "Computer Systems & Software Designing", icon: FaSitemap },
  { label: "Planning & Designing Integrated Computer Systems", icon: FaNetworkWired },
  { label: "Artificial Intelligence Innovation & Research", icon: FaRobot },
  { label: "Artificial Intelligence Consultancy", icon: FaBrain },
  { label: "E-commerce Solutions", icon: FaShoppingCart },
  { label: "IT Consultancy", icon: FaUserCog },
  { label: "Business Consultancy", icon: FaBriefcase },
];

export const SERVICES_CATEGORIES = [
  {
    title: "Digital Transformation",
    icon: FaRocket,
    items: [
      "Digital Transformation",
      "Technology Strategy",
      "End-to-End User Experience",
      "Data-Driven Organization",
      "Cloud Migration & Modernization",
    ],
  },
  {
    title: "Engineering Services",
    icon: FaCode,
    items: [
      "Software Product Development",
      "Product Strategy & Roadmapping",
      "Dedicated Team",
      "DevOps & Automation",
      "Process Automation (RPA)",
    ],
  },
  {
    title: "Consulting",
    icon: FaLightbulb,
    items: [
      "Technology Consulting",
      "Data Science Consulting",
      "AI Solutions for Industries",
      "Business Intelligence",
      "UX / UI Consulting & Design",
      "Conversion Rate Optimization",
    ],
  },
  {
    title: "AI & Data Solutions",
    icon: FaChartLine,
    items: [
      "Advanced Data & AI",
      "Generative AI Solutions",
      "Predictive Analytics",
      "Data Engineering & Data Lakes",
    ],
  },
  {
    title: "Security & Infrastructure",
    icon: FaShieldAlt,
    items: [
      "Cybersecurity & Risk Management",
      "IoT & Edge Computing",
      "Cloud Migration & Modernization",
    ],
  },
  {
    title: "Human-Centered & Workplace Solutions",
    icon: FaHeart,
    items: ["Human-Centered Design", "Digital Workplace Solutions"],
  },
  {
    title: "Industry-Specific Solutions",
    icon: FaIndustry,
    items: ["HealthTech & MedTech Platforms"],
  },
];
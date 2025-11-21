import {
  Info,
  Settings,
  Target,
  Users,
  Workflow,
  Database,
  Wrench,
  Laptop,
  Server,
  Globe,
  Network,
  Bot,
  Brain,
  ShoppingCart,
  UserCog,
  Briefcase,
  Rocket,
  Code,
  Lightbulb,
  LineChart,
  Shield,
  Heart,
  Factory,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

export const COMPANY_ITEMS = [
  { label: "About Us", icon: Info },
  { label: "How We Work", icon: Settings },
  { label: "Our Mission & Vision", icon: Target },
  { label: "Our Team", icon: Users },
];

export const CONTACT_ITEMS = [
  { label: "Email Us", icon: Mail },
  { label: "Call Us", icon: Phone },
  { label: "WhatsApp", icon: MessageCircle },
  { label: "Visit Office", icon: MapPin },
];

export const SOLUTION_ITEMS = [
  { label: "Software Systems Design & Development", icon: Workflow },
  { label: "Data-Driven Software Systems", icon: Database },
  { label: "Systems Software including updates & patches", icon: Wrench },
  { label: "Software Application Development including updates", icon: Laptop },
  { label: "Database Development", icon: Server },
  { label: "Web Page Development", icon: Globe },
  { label: "Computer Systems & Software Designing", icon: Network },
  { label: "Planning & Designing Integrated Computer Systems", icon: Network },
  { label: "Artificial Intelligence Innovation & Research", icon: Bot },
  { label: "Artificial Intelligence Consultancy", icon: Brain },
  { label: "E-commerce Solutions", icon: ShoppingCart },
  { label: "IT Consultancy", icon: UserCog },
  { label: "Business Consultancy", icon: Briefcase },
];

export const SERVICES_CATEGORIES = [
  {
    title: "Digital Transformation",
    icon: Rocket,
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
    icon: Code,
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
    icon: Lightbulb,
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
    icon: LineChart,
    items: [
      "Advanced Data & AI",
      "Generative AI Solutions",
      "Predictive Analytics",
      "Data Engineering & Data Lakes",
    ],
  },
  {
    title: "Security & Infrastructure",
    icon: Shield,
    items: [
      "Cybersecurity & Risk Management",
      "IoT & Edge Computing",
      "Cloud Migration & Modernization",
    ],
  },
  {
    title: "Human-Centered & Workplace Solutions",
    icon: Heart,
    items: ["Human-Centered Design", "Digital Workplace Solutions"],
  },
  {
    title: "Industry-Specific Solutions",
    icon: Factory,
    items: ["HealthTech & MedTech Platforms"],
  },
];
import { LuUsers, LuLayers, LuComponent } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbDeviceDesktopCode } from "react-icons/tb";

const uiUx = {
  category: "07 — UI/UX DESIGN",
  metaTitle: "UI/UX Design Services in Hyderabad | User-First Design ",
  metaDescription: "Professional UI/UX design services in Hyderabad. Web & mobile app design, wireframing, prototyping & user research. 500+ projects delivered. Free consultation. ",
  heroTitle: "UI/UX Design Services That Turn Users Into Loyal Customers",
  heroDesc: "Trusted by 500+ businesses to design intuitive, conversion-focused digital experiences for web apps, mobile apps, and SaaS products that users love and businesses grow with.",
  illustration: "/services-media/UIUX Design Services.png",
  title: "UI/UX Design & Interactive Prototyping",
  subtitle: "Core Service",
  description: "Deliver exceptional, user-centered digital products. Our design team focuses on deeply understanding user behaviors, performing accessibility (WCAG) reviews, creating intuitive wireframes, and building state-of-the-art interactive prototypes to elevate user satisfaction and conversion rates.",
  accentColor: "purple",
  bgClass: "bg-purple-500/10",
  borderClass: "border-purple-500/20",
  textColor: "text-purple-400",
  buttonBg: "bg-purple-600 hover:bg-purple-500 text-white",
  offerings: [
    {
      title: "User Research & Persona Mapping",
      desc: "Conduct detailed user interviews, run usability tests, and map comprehensive journey maps to ground every product design decision in verified user needs."
    },
    {
      title: "High-Fidelity Wireframing & Prototyping",
      desc: "Develop advanced interactive prototypes in Figma, giving you complete visualization of screen transitions, animations, and flows before a single line of frontend code is written."
    },
    {
      title: "Design System Engineering & WCAG Audits",
      desc: "Build highly scalable, tokenized design systems to keep user interfaces uniform across mobile and web platforms, alongside complete WCAG accessibility audits."
    }
  ],
  benefits: [
    "User-First Interface Engineering",
    "Figma High-Fidelity Interactive Assets",
    "Unified Modular Design Systems"
  ],
  capabilities: [
    {
      title: "User Research",
      desc: "Target audience personas, journey mapping, and competitive audits",
      icon: LuUsers
    },
    {
      title: "Wireframing",
      desc: "Low-fidelity layouts to map out page logic and structure",
      icon: MdOutlineDashboardCustomize
    },
    {
      title: "Design Systems",
      desc: "Consistent, reusable UI components for scalable development",
      icon: LuComponent
    },
    {
      title: "High-Fi Prototypes",
      desc: "Interactive Figma layouts to test flow and get approvals",
      icon: TbDeviceDesktopCode
    }
  ],
  processHeading: "Our Development Process",
  process: [
    {
      id: "01",
      title: "User Research",
      desc: "Interviews, surveys, user persona mapping, and heuristic reviews"
    },
    {
      id: "02",
      title: "Wireframing",
      desc: "Low-fidelity layouts to map structure and content hierarchy"
    },
    {
      id: "03",
      title: "Design System",
      desc: "Creating UI components, color palettes, and typography rules"
    },
    {
      id: "04",
      title: "Prototyping",
      desc: "Developing interactive high-fidelity clickable Figma designs"
    },
    {
      id: "05",
      title: "Usability Testing",
      desc: "Validating user flows, animations, and preparing developer handoff"
    }
  ],
  techStack: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro", "Zeplin", "Illustrator"],
  faqs: [
    {
      id: 1,
      qNumber: "Q1.",
      question: "What is the difference between UI and UX design?",
      answer: "UX (User Experience) focuses on the overall feel, functionality, and user journey of a product. UI (User Interface) is about the visual elements — colours, typography, and buttons."
    },
    {
      id: 2,
      qNumber: "Q2.",
      question: "Do you redesign existing websites or apps?",
      answer: "Yes — we specialise in revamping outdated digital products, running UX audits to identify pain points and create modernised, high-converting interfaces."
    },
    {
      id: 3,
      qNumber: "Q3.",
      question: "What tools do you use for design and prototyping?",
      answer: "Primarily Figma for collaborative wireframing, UI design, and interactive prototyping — plus Adobe Creative Suite when needed."
    },
    {
      id: 4,
      qNumber: "Q4.",
      question: "Can you provide assets for our development team?",
      answer: "Absolutely — comprehensive design systems, style guides, and fully annotated Figma files for a smooth developer handoff."
    }
  ],
  cta: {
    heading: "Ready to Design a Product Your Users Will Actually Love?",
    description: "Share your product brief — we'll design an experience that's intuitive, conversion-focused, and built to scale with your business.",
    buttonText: "Get a Free Demo",
    buttonLink: "/contact"
  }
};

export default uiUx;

import { LuServer, LuHeadset, LuShield, LuWifi } from "react-icons/lu";

const itSupport = {
  category: "02 — IT SUPPORT",
  metaTitle: "IT Support & Managed Services Company | 24/7 Support",
  metaDescription: "Trusted IT support & managed services company serving businesses worldwide. 24/7 monitoring,cybersecurity & cloud management. 50+ businesses served.",
  heroTitle: "IT Support & Managed Services — Reliable, Proactive & Always On",
  heroDesc: "24/7 IT support and managed services for businesses worldwide: no in-house team needed, no surprise costs, and no downtime.",
  illustration: "/services-media/OurServices/services3.png",
  title: "IT Support & Managed Services",
  subtitle: "Infrastructure Service",
  description: "Comprehensive IT support solutions to ensure your business operations run smoothly and securely 24/7.",
  accentColor: "blue",
  bgClass: "bg-blue-500/10",
  borderClass: "border-blue-500/20",
  textColor: "text-blue-400",
  buttonBg: "bg-blue-500 hover:bg-blue-400 text-white",
  capabilities: [
    {
      title: "24/7 Help Desk",
      desc: "Round-the-clock technical support and troubleshooting for your team",
      icon: LuHeadset
    },
    {
      title: "Network Management",
      desc: "Proactive monitoring and maintenance of your network infrastructure",
      icon: LuWifi
    },
    {
      title: "Server Administration",
      desc: "Optimized server configurations and routine maintenance",
      icon: LuServer
    },
    {
      title: "Security Monitoring",
      desc: "Continuous threat detection and incident response",
      icon: LuShield
    }
  ],
  processHeading: "Our Support Process",
  process: [
    { id: "01", title: "Assessment", desc: "Evaluating current IT infrastructure and identifying needs" },
    { id: "02", title: "Onboarding", desc: "Setting up monitoring tools and support channels" },
    { id: "03", title: "Proactive Monitoring", desc: "Continuous observation to prevent issues before they occur" },
    { id: "04", title: "Resolution", desc: "Rapid response and ticket resolution" }
  ],
  techStack: ["ServiceNow", "Zendesk", "SolarWinds", "Datadog", "Cisco", "Fortinet", "Active Directory", "Microsoft 365"],
  faqs: [
    {
      id: 1,
      qNumber: "Q1.",
      question: "How much do managed IT services cost?",
      answer: "Flat monthly pricing based on your users and devices. No surprise invoices. Contact us for a custom quote anywhere in the world."
    },
    {
      id: 2,
      qNumber: "Q2.",
      question: "How fast do you respond to IT issues?",
      answer: "Critical issues: 15–30 mins. High priority: 1–2 hours. Standard requests: 4–8 hours. All SLA-guaranteed in writing."
    },
    {
      id: 3,
      qNumber: "Q3.",
      question: "Do you offer on-site IT support?",
      answer: "Yes — for local clients. For global clients, we deliver fast, reliable remote support 24/7. No call centers, no scripts."
    },
    {
      id: 4,
      qNumber: "Q4.",
      question: "Do you work with international clients?",
      answer: "Absolutely. We serve businesses across India, the US, the UK, the Middle East, and beyond. Remote-first delivery, any timezone, 24/7."
    },
    {
      id: 5,
      qNumber: "Q5.",
      question: "What's included in managed IT services?",
      answer: "24/7 monitoring, helpdesk (L1–L3), network management, cybersecurity, cloud, and backup & recovery all in one flat monthly price."
    },
    {
      id: 6,
      qNumber: "Q6.",
      question: "Is outsourced IT better than an in-house team?",
      answer: "For most businesses, yes. You get a fully certified team at a fraction of the cost no hiring, no training, no attrition."
    },
    {
      id: 7,
      qNumber: "Q7.",
      question: "How fast do you deliver and onboard?",
      answer: "Most clients are fully onboarded within 1–2 weeks. Fast setup, zero disruption, on-time every time."
    },
    {
      id: 8,
      qNumber: "Q8.",
      question: "Which industries do you support?",
      answer: "IT, fintech, healthcare, manufacturing, retail, and professional services. From 10-user startups to 500+ employee enterprises globally."
    }
  ],
  cta: {
    heading: "Looking for reliable IT support for your business?",
    description: "Tell us your IT challenges; we'll assess, manage, and support your infrastructure end to end. No long-term lock-ins.",
    buttonText: "Get in touch",
    buttonLink: "/contact"
  }
};

export default itSupport;

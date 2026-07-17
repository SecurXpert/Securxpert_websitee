import { LuHeadset, LuUsers, LuTrendingUp, LuBriefcase } from "react-icons/lu";

const bpoServices = {
  category: "04 — BPO SERVICES",
  metaTitle: "BPO Services in Hyderabad | Top Business Process Outsourcing Firm ",
  metaDescription: "Trusted business process outsourcing company in India. Customer support, data entry, back office & finance/HR outsourcing. Flat pricing. Free quote. ",
  heroTitle: "Business Process Outsourcing — Efficient, Reliable & Cost-Effective ",
  heroDesc: "Trusted by businesses across India to handle back-office operations, customer support, data management, and more — so your team focuses only on growth. ",
  illustration: "/services-media/Business Process Outsourcing (BPO).png",
  title: "Business Process Outsourcing",
  subtitle: "Operations Service",
  description: "Streamline your operations with our dedicated BPO services, offering scalable teams for customer support, data entry, and back-office tasks.",
  accentColor: "purple",
  bgClass: "bg-purple-500/10",
  borderClass: "border-purple-500/20",
  textColor: "text-purple-400",
  buttonBg: "bg-purple-500 hover:bg-purple-400 text-white",
  capabilities: [
    { title: "Customer Support", desc: "Omnichannel support including voice, chat, and email", icon: LuHeadset },
    { title: "Back-Office Operations", desc: "Data entry, processing, and administrative support", icon: LuBriefcase },
    { title: "Sales & Telemarketing", desc: "Lead generation, telemarketing, and sales support", icon: LuTrendingUp },
    { title: "HR & Recruitment", desc: "End-to-end talent acquisition and HR management", icon: LuUsers }
  ],
  processHeading: "BPO Onboarding Process",
  process: [
    { id: "01", title: "Requirements Analysis", desc: "Understanding the processes to be outsourced" },
    { id: "02", title: "Resource Allocation", desc: "Selecting and training the dedicated team" },
    { id: "03", title: "Transition", desc: "Shadowing and process handover" },
    { id: "04", title: "Operations & QA", desc: "Go-live with continuous quality assurance" }
  ],
  techStack: ["Salesforce", "Zendesk", "HubSpot", "RingCentral", "Five9", "SAP", "Oracle", "Microsoft Dynamics"],
  faqs: [
    {
      id: 1,
      qNumber: "Q1.",
      question: "How much do BPO services cost in India?",
      answer: "Pricing depends on service type, volume, and team size. Flat monthly pricing with no hidden charges — contact us for a custom quote."
    },
    {
      id: 2,
      qNumber: "Q2.",
      question: "What BPO services do you offer?",
      answer: "Customer support, data entry, back office, finance & accounting, HR outsourcing, and IT help desk — all under one roof."
    },
    {
      id: 3,
      qNumber: "Q3.",
      question: "Do you sign an NDA before starting?",
      answer: "Yes. NDA signed before any discussion begins — your data and processes are fully protected, no exceptions."
    },
    {
      id: 4,
      qNumber: "Q4.",
      question: "How quickly can you onboard our processes?",
      answer: "Most clients are fully onboarded within 1–2 weeks."
    },
    {
      id: 5,
      qNumber: "Q5.",
      question: "Do you work with startups or only large enterprises?",
      answer: "Both — from 10-person startups to 500+ employee enterprises."
    },
    {
      id: 6,
      qNumber: "Q6.",
      question: "Is my data secure with your team?",
      answer: "Yes. Strict data security protocols, access controls, and ISO 27001-aligned practices."
    },
    {
      id: 7,
      qNumber: "Q7.",
      question: "Can we scale the team up or down?",
      answer: "Yes — scale up during peak seasons or down anytime, with no long-term lock-ins."
    },
    {
      id: 8,
      qNumber: "Q8.",
      question: "How do we get started?",
      answer: "Book a free consultation. We understand your requirements, document your processes, and go live within 2 weeks."
    }
  ],
  cta: {
    heading: "Ready to Streamline Your Business Operations?",
    description: "Tell us what you need handled — we'll take it off your plate, deliver it accurately, and free your team to focus on what matters.",
    buttonText: "Get a Free Consultation",
    buttonLink: "/contact",
    secondaryButtonText: "Contact Us Today",
    secondaryButtonLink: "/contact"
  }
};

export default bpoServices;

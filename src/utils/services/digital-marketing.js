import { LuSearch, LuShare2, LuTrendingUp } from "react-icons/lu";

const digitalMarketing = {
  category: "06 — DIGITAL MARKETING",
  metaTitle: "Digital Marketing Services in Hyderabad | Grow Fast ",
  metaDescription: "Result-oriented digital marketing agency in Hyderabad. SEO, PPC, social media, content & email marketing. 500+ companies scaled. Book a free strategy call. ",
  heroTitle: "Real Business Growth through Digital Marketing Services",
  heroDesc: "Data-driven strategies to grow organic traffic, generate quality leads, and build brand authority trusted by 500+ businesses across industries.",
  illustration: "/services-media/Digital Marketing Solutions.png",
  title: "Digital Audits & Search Optimization",
  subtitle: "Core Service",
  description: "Gain full control over your digital assets. We perform thorough threat assessments, network vulnerability scans, cloud IAM reviews, and search engine optimization (SEO) audits to protect and scale your online presence.",
  accentColor: "blue",
  bgClass: "bg-blue-500/10",
  borderClass: "border-blue-500/20",
  textColor: "text-blue-400",
  buttonBg: "bg-blue-600 hover:bg-blue-500 text-white",
  offerings: [
    {
      title: "Penetration Testing & Audits",
      desc: "Simulate active threat scenarios, investigate system leaks, test network configurations, and verify employee training states against phishing attacks."
    },
    {
      title: "Compliance Readiness (SOC2 / ISO 27001)",
      desc: "We perform readiness audits and configure necessary technical barriers to prepare your infrastructure for compliance verification quickly."
    },
    {
      title: "Cloud & Search Performance Audit",
      desc: "Comprehensive review of IAM rules, Docker/Kubernetes container security configurations, serverless environments, alongside SEO and performance optimizations."
    }
  ],
  benefits: [
    "Simulated Exploit Execution",
    "Actionable Remediation Reports",
    "24/7 Threat Brief Consultation"
  ],
  capabilities: [
    {
      title: "SEO Optimization",
      desc: "Improve search engine ranking and organic traffic growth",
      icon: LuSearch
    },
    {
      title: "Social Media Marketing",
      desc: "Engage audiences and grow brand presence on top channels",
      icon: LuShare2
    },
    {
      title: "Paid Advertising",
      desc: "High-conversion PPC, Google Ads, and social media campaigns",
      icon: LuTrendingUp
    },
    {
      title: "Analytics & Reports",
      desc: "Data-driven insights to measure ROI and optimization",
      icon: LuTrendingUp
    }
  ],
  processHeading: "Our Development Process",
  process: [
    {
      id: "01",
      title: "Audit & Analysis",
      desc: "Analyzing current performance, target audience, and competition"
    },
    {
      id: "02",
      title: "Strategy Planning",
      desc: "Defining goals, channels, budget allocation, and KPI frameworks"
    },
    {
      id: "03",
      title: "Execution",
      desc: "Setting up campaigns, content production, and ad placement"
    },
    {
      id: "04",
      title: "Optimization",
      desc: "Daily performance tracking, A/B testing, and ROI improvement"
    },
    {
      id: "05",
      title: "Reporting",
      desc: "Providing transparent dashboards and growth consultations"
    }
  ],
  techStack: ["Google Analytics", "Google Ads", "Meta Ads", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Hotjar"],
  faqs: [
    {
      id: 1,
      qNumber: "Q1.",
      question: "What digital marketing services do you provide?",
      answer: "Comprehensive services including SEO, PPC advertising, Social Media Marketing, Content Marketing, and Email Marketing."
    },
    {
      id: 2,
      qNumber: "Q2.",
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy. Initial improvements show in the first few months; substantial traffic and ranking growth typically takes 4–6 months."
    },
    {
      id: 3,
      qNumber: "Q3.",
      question: "Do you provide regular performance reports?",
      answer: "Yes — detailed monthly reports tracking traffic, lead generation, conversion rates, and overall ROI."
    },
    {
      id: 4,
      qNumber: "Q4.",
      question: "How do you determine the best marketing channels for my business?",
      answer: "We start with a thorough analysis of your industry, audience, and competitors to build a strategy focused on the most profitable channels."
    }
  ],
  cta: {
    heading: "Want to Grow Your Business with Digital Marketing That Works?",
    description: "Tell us your goals, and we’ll create a strategy to drive traffic, generate leads, and increase your revenue from day one.",
    buttonText: "Get a Free Demo",
    buttonLink: "/contact"
  }
};

export default digitalMarketing;

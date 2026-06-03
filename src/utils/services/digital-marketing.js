import { LuSearch, LuShare2, LuTrendingUp } from "react-icons/lu";

const digitalMarketing = {
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
  techStack: ["Google Analytics", "Google Ads", "Meta Ads", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Hotjar"]
};

export default digitalMarketing;

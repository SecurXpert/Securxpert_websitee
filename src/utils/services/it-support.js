import { LuServer, LuHeadset, LuShield, LuWifi } from "react-icons/lu";

const itSupport = {
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
  techStack: ["ServiceNow", "Zendesk", "SolarWinds", "Datadog", "Cisco", "Fortinet", "Active Directory", "Microsoft 365"]
};

export default itSupport;

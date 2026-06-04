import { LuHeadset, LuUsers, LuTrendingUp, LuBriefcase } from "react-icons/lu";

const bpoServices = {
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
  techStack: ["Salesforce", "Zendesk", "HubSpot", "RingCentral", "Five9", "SAP", "Oracle", "Microsoft Dynamics"]
};

export default bpoServices;

import { LuShield, LuLock, LuSearch, LuServer } from "react-icons/lu";

const cybersecurity = {
  category: "08 — CYBERSECURITY",
  metaTitle: "Cyber Security Services in Hyderabad | Trusted Experts",
  metaDescription: "Trusted cybersecurity services in Hyderabad. Penetration testing, SOC, cloud security, endpoint protection & compliance. 500+ businesses secured. Free audit. ",
  heroTitle: "Proactive Cybersecurity Services to Defend, Detect & Respond ",
  heroDesc: "Trusted by 500+ businesses to protect critical data, secure digital infrastructure, and stay compliant with proactive cybersecurity solutions built for today's threat landscape.",
  illustration: "/services-media/Cybersecurity Services.png",
  title: "Enterprise Cybersecurity",
  subtitle: "Security Service",
  description: "Robust cybersecurity solutions to protect your digital assets, ensure compliance, and defend against advanced threats.",
  accentColor: "red",
  bgClass: "bg-red-500/10",
  borderClass: "border-red-500/20",
  textColor: "text-red-400",
  buttonBg: "bg-red-500 hover:bg-red-400 text-white", 
  capabilities: [
    { title: "Penetration Testing", desc: "Ethical hacking to identify system vulnerabilities", icon: LuSearch },
    { title: "Threat Protection", desc: "Advanced defense against malware, ransomware, and phishing", icon: LuShield },
    { title: "Data Encryption", desc: "Secure encryption protocols for data at rest and in transit", icon: LuLock },
    { title: "Compliance & Auditing", desc: "Ensuring adherence to GDPR, HIPAA, and ISO standards", icon: LuServer }
  ],
  processHeading: "Our Security Framework",
  process: [
    { id: "01", title: "Risk Assessment", desc: "Comprehensive audit of existing security posture" },
    { id: "02", title: "Strategy Implementation", desc: "Deploying firewalls, endpoint protection, and policies" },
    { id: "03", title: "Monitoring", desc: "24/7 SIEM monitoring and anomaly detection" },
    { id: "04", title: "Incident Response", desc: "Rapid mitigation and recovery from security events" }
  ],
  techStackTitle: "Technology Stack",
  techStackDesc: "Metasploit,  Burp Suite, Nessus, Qualys, Splunk, IBM QRadar, CrowdStrike, SentinelOne, Palo Alto, Fortinet, Wireshark, Nmap, AWS Security Hub, Microsoft Defender, Rapid7",
  techStack: ["Metasploit", "Burp Suite", "Nessus", "Qualys", "Splunk", "IBM QRadar", "CrowdStrike", "SentinelOne", "Palo Alto", "Fortinet", "Wireshark", "Nmap", "AWS Security Hub", "Microsoft Defender", "Rapid7"],
  faqs: [
    {
      id: 1,
      qNumber: "Q1.",
      question: "What types of cybersecurity assessments do you perform?",
      answer: "Vulnerability scanning, penetration testing (ethical hacking), risk assessments, and compliance audits to identify and mitigate security gaps."
    },
    {
      id: 2,
      qNumber: "Q2.",
      question: "Can you help us achieve compliance with industry standards?",
      answer: "Yes — we assist organisations in meeting GDPR, HIPAA, SOC 2, ISO 27001, and PCI-DSS requirements."
    },
    {
      id: 3,
      qNumber: "Q3.",
      question: "What should we do in the event of a security breach?",
      answer: "Our incident response team is available 24/7 to help contain the breach, eradicate the threat, recover lost data, and perform forensic analysis."
    },
    {
      id: 4,
      qNumber: "Q4.",
      question: "Do you offer cybersecurity training for employees?",
      answer: "Yes — human error is a leading cause of breaches. We provide security awareness training and phishing simulations for your staff."
    }
  ],
  cta: {
    heading: "Ready to Secure Your Business Before a Breach Forces You To?",
    description: "Tell us about your infrastructure — we'll assess your security posture, identify critical vulnerabilities, and build a protection plan that keeps threats out for good.",
    buttonText: "Get a Free Demo",
    buttonLink: "/contact"
  }
};

export default cybersecurity;

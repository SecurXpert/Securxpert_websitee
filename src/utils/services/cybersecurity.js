import { LuShield, LuLock, LuSearch, LuServer } from "react-icons/lu";

const cybersecurity = {
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
  techStack: ["Splunk", "CrowdStrike", "Palo Alto Networks", "Cloudflare", "Tenable", "Wireshark", "Metasploit", "Burp Suite"]
};

export default cybersecurity;

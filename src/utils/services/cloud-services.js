import { LuCloud, LuDatabase, LuServer, LuSettings } from "react-icons/lu";

const cloudServices = {
  title: "Cloud Infrastructure & Services",
  subtitle: "Cloud Solutions",
  description: "Scalable, secure, and reliable cloud solutions to accelerate your digital transformation and reduce infrastructure costs.",
  accentColor: "sky",
  bgClass: "bg-sky-500/10",
  borderClass: "border-sky-500/20",
  textColor: "text-sky-400",
  buttonBg: "bg-sky-500 hover:bg-sky-400 text-white",
  capabilities: [
    { title: "Cloud Migration", desc: "Seamless transition of legacy systems to modern cloud architectures", icon: LuCloud },
    { title: "Cloud Storage", desc: "Secure and scalable data storage solutions", icon: LuDatabase },
    { title: "Serverless Computing", desc: "Cost-effective, event-driven computing execution", icon: LuServer },
    { title: "DevOps Integration", desc: "Automated CI/CD pipelines and infrastructure as code", icon: LuSettings }
  ],
  processHeading: "Cloud Migration Process",
  process: [
    { id: "01", title: "Discovery", desc: "Analyzing existing infrastructure and workloads" },
    { id: "02", title: "Strategy", desc: "Designing cloud architecture and migration plan" },
    { id: "03", title: "Migration", desc: "Executing the migration with zero to minimal downtime" },
    { id: "04", title: "Optimization", desc: "Fine-tuning performance and optimizing cloud costs" }
  ],
  techStack: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Jenkins", "Ansible"]
};

export default cloudServices;

import { LuCloud, LuDatabase, LuServer, LuSettings } from "react-icons/lu";

const cloudServices = {
  category: "03 — CLOUD SERVICES",
  metaTitle: "Cloud Infrastructure Services | AWS, Azure, GCP Specialists",
  metaDescription: "Certified Cloud Infrastructure Services Multi-Cloud Migration Server Management DevOps Automation & Cost Optimization Flat Pricing, Global Delivery on Time",
  heroTitle: "Cloud & Infrastructure Services Secure, Scalable & Cost-Optimised",
  heroDesc: "We move your business to AWS, Azure, or GCP with zero downtime — then manage, secure, and optimize your cloud environment for maximum reliability and minimum cost.",
  illustration: "/services-media/OurServices/services1.png",
  title: "Cloud Infrastructure & Services",
  subtitle: "Cloud Solutions",
  description: "Delivering on time, every time, end-to-end cloud migration, management and optimization for businesses worldwide by certified multi-cloud experts.",
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
  techStack: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Jenkins", "Ansible"],
  faqs: [
    {
      id: 1,
      qNumber: "Q1.",
      question: "How much does cloud migration cost?",
      answer: "Depends on your infrastructure size and workloads. We offer fixed-price projects after a free assessment. Get a custom quote today."
    },
    {
      id: 2,
      qNumber: "Q2.",
      question: "Which cloud platform is best: AWS, Azure, or GCP?",
      answer: "We assess your environment and recommend the right platform with no vendor bias. Works for any business, anywhere in the world."
    },
    {
      id: 3,
      qNumber: "Q3.",
      question: "How long does cloud migration take?",
      answer: "Small setups: 4–8 weeks. Large or complex environments: 3–6 months. Always on time, always planned, zero surprises."
    },
    {
      id: 4,
      qNumber: "Q4.",
      question: "Do you work with global clients?",
      answer: "Yes. We serve businesses across India, the US, the UK, the Middle East, and beyond. Fully remote delivery, any timezone, 24/7."
    },
    {
      id: 5,
      qNumber: "Q5.",
      question: "Do you manage the cloud after migration?",
      answer: "Yes. 24/7 monitoring, patching, cost optimization, and support all under one flat monthly price."
    },
    {
      id: 6,
      qNumber: "Q6.",
      question: "Can you manage our existing cloud without migrating?",
      answer: "Absolutely. Already on AWS, Azure, or GCP? We take over, clean it up, and cut your cloud bill."
    },
    {
      id: 7,
      qNumber: "Q7.",
      question: "How fast do you deliver projects?",
      answer: "We commit to deadlines always. Every project has a fixed timeline, clear milestones, and on-time delivery guaranteed."
    },
    {
      id: 8,
      qNumber: "Q8.",
      question: "What industries do you serve?",
      answer: "IT, fintech, healthcare, manufacturing, retail, and more. From 10-user startups to 500+ employee enterprises globally."
    }
  ],
  cta: {
    heading: "Ready to move to the cloud — or get more from your existing infrastructure?",
    description: "Tell us where you are today. We'll design, migrate, and manage your cloud environment end to end. No long-term lock-ins.",
    buttonText: "Get in touch",
    buttonLink: "/contact"
  }
};

export default cloudServices;

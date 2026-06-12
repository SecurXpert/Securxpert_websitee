import { LuGlobe, LuSmartphone, LuDatabase, LuCode } from "react-icons/lu";

const webDevelopment = {
  category: "01 — SOFTWARE DEVELOPMENT",
  metaTitle: "Custom Software Development Company | Web & Mobile",
  metaDescription: "Leading custom software development company serving clients worldwide. We build scalable web, mobile & enterprise apps. Free consultation, no commitment.",
  heroTitle: "Custom Software Development — Built for Scale, Designed for Growth",
  heroDesc: "Trusted by 50+ startups and enterprises worldwide to build scalable web, mobile, and cloud software solutions on time, on budget, every time.",
  illustration: "",
  bgIllustration: "/services-media/softwaredevelopment.png",
  title: "Web Security & Development",
  subtitle: "Core Service",
  description: "We design and code enterprise web applications that integrate advanced backend security measures. We believe you shouldn't have to choose between rich user experiences and ironclad protection.",
  accentColor: "cyan",
  bgClass: "bg-cyan-500/10",
  borderClass: "border-cyan-500/20",
  textColor: "text-cyan-400",
  buttonBg: "bg-cyan-500 hover:bg-cyan-400 text-slate-950",
  offerings: [
    {
      title: "Secure Frontend Applications",
      desc: "Custom-tailored web interfaces designed with Next.js, static site generation, strict content security policies (CSP), and cross-site scripting (XSS) protections."
    },
    {
      title: "Encrypted Database Integrations",
      desc: "Robust backend system architectures deploying AES-256 level database column encryption, secured GraphQL/REST endpoints, and compliant audit trails."
    },
    {
      title: "API Gateways & Firewalls",
      desc: "Integration of Cloudflare, Web Application Firewalls (WAF), rate-limiting middleware, CORS parameters, and threat analysis logs for full traffic shielding."
    }
  ],
  benefits: [
    "100% Secure Code Auditing",
    "Optimized Vercel/Cloud Deployments",
    "Compliance Standard Layouts (GDPR/HIPAA)"
  ],
  capabilities: [
    {
      title: "Web Applications",
      desc: "Modern, responsive web apps using React, Next.js, and Node.js",
      icon: LuGlobe
    },
    {
      title: "Mobile Development",
      desc: "Native iOS, Android, and cross-platform solutions",
      icon: LuSmartphone
    },
    {
      title: "Enterprise Systems",
      desc: "Scalable ERP, CRM, and custom business applications",
      icon: LuDatabase
    },
    {
      title: "API Development",
      desc: "RESTful and GraphQL APIs for seamless integrations",
      icon: LuCode
    }
  ],
  processHeading: "Our Development Process",
  process: [
    {
      id: "01",
      title: "Discovery & Planning",
      desc: "Understanding requirements and technical architecture"
    },
    {
      id: "02",
      title: "Design & Prototyping",
      desc: "Creating wireframes and interactive prototypes"
    },
    {
      id: "03",
      title: "Development",
      desc: "Agile development with regular milestones"
    },
    {
      id: "04",
      title: "Testing & QA",
      desc: "Comprehensive testing for quality assurance"
    },
    {
      id: "05",
      title: "Deployment & Support",
      desc: "Launch and ongoing maintenance"
    }
  ],
  techStack: ["React", "Node.js", "Python", "Java", "Swift", "Kotlin", "PostgreSQL", "MongoDB", "AWS", "Docker","Next.js"],
  faqs: [
    {
      id: 1,
      qNumber: "Q1.",
      question: "What Is the Cost of Custom Software Development?",
      answer: "It depends on features, complexity, and team size. We offer a free discovery call to provide a fixed-scope quote with no surprises and no commitment."
    },
    {
      id: 2,
      qNumber: "Q2.",
      question: "How long does it take to develop custom software?",
      answer: "Basic app: 6-12 weeks. Mid-size products: 3 to 6 months Enterprise Solutions: 6-12 months. The timeline is always on time, agreed upon before development begins."
    },
    {
      id: 3,
      qNumber: "Q3.",
      question: "Before discussing our project, do you sign NDAs?",
      answer: "Yes. NDA signed before any conversation. You own all IP upon delivery. No sharing rights, no exceptions."
    },
    {
      id: 4,
      qNumber: "Q4.",
      question: "Do you work with startups only or with enterprises?",
      answer: "Both. From early-stage startups to large enterprises, we scale to fit your stage, goal, and budget."
    },
    {
      id: 5,
      qNumber: "Q5.",
      question: "What type of tech do you work with?",
      answer: "Modern, battle-tested, long-term supported: React, Next.js, Node.js, Python, Java, Swift, Kotlin, PostgreSQL, MongoDB, AWS, Docker."
    },
    {
      id: 6,
      qNumber: "Q6.",
      question: "Do you have clients worldwide?",
      answer: "Absolutely. We work with businesses across India, the US, the UK, the Middle East, and beyond. Remote-first, timezone-flexible, 24/7 communication."
    },
    {
      id: 7,
      qNumber: "Q7.",
      question: "Do you provide post-launch support?",
      answer: "Yes. Maintenance, bug fixes, and SLA-backed support after go-live. A dedicated team handles enhancements and monitoring; we don't disappear."
    },
    {
      id: 8,
      qNumber: "Q8.",
      question: "How do we get started?",
      answer: "Book a free discovery call. We understand your requirements, scope the project, and deliver a fixed quote with no obligation and no pressure."
    }
  ],
  cta: {
    heading: "Ready to build your next software product?",
    description: "Tell us about your idea; we'll scope it, architect it, and ship it. No fluff, no lock-ins.",
    buttonText: "Get in touch",
    buttonLink: "/contact"
  }
};

export default webDevelopment; 

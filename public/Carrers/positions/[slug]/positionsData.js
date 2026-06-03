export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const positionsData = [
  // Engineering (7)
  {
    id: 1,
    title: "Full-Stack Developers",
    category: "Engineering",
    tags: ["Tartu", "Full-time"],
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    id: 2,
    title: "Application developer (react native)",
    category: "Engineering",
    tags: ["Tartu", "Full-time"],
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    id: 3,
    title: "Frontend Engineer",
    category: "Engineering",
    tags: ["Remote", "Full-time"],
    description:
      "We are seeking a Frontend Engineer with deep expertise in React and modern UI/UX implementation. You will be responsible for creating fluid user interfaces, implementing complex components, and ensuring exceptional performance.",
  },
  {
    id: 4,
    title: "Backend Developer (Node.js)",
    category: "Engineering",
    tags: ["Tallinn", "Full-time"],
    description:
      "Looking for a Backend Developer skilled in Node.js, Express, databases, and microservices architecture. You will design, build, and maintain highly scalable backend APIs and database operations.",
  },
  {
    id: 5,
    title: "QA Automation Engineer",
    category: "Engineering",
    tags: ["Tartu", "Hybrid"],
    description:
      "Responsible for designing, writing, and executing automated test suites for our web applications. Work closely with product owners and developer teams to identify bugs early in the release cycles.",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    category: "Engineering",
    tags: ["Tallinn", "Full-time"],
    description:
      "Help build and manage our cloud infrastructure (AWS/GCP), CI/CD pipelines, and Kubernetes deployment workflows. Ensure high availability, security, and performance of our services.",
  },
  {
    id: 7,
    title: "Security Engineer",
    category: "Engineering",
    tags: ["Remote", "Full-time"],
    description:
      "Identify security vulnerabilities, design security architectures, and perform regular audits. Help implement best practices in application security across our developer teams.",
  },
  
  // Product (3)
  {
    id: 8,
    title: "Product Manager",
    category: "Product",
    tags: ["Remote", "Netherlands", "Full-time"],
    description:
      "If you are PM and you eager to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features. 30+ major projects from 8 different industries that are being used by 500,000+ users.",
  },
  {
    id: 9,
    title: "Product Owner",
    category: "Product",
    tags: ["Tartu", "Full-time"],
    description:
      "We've worked on 30+ major projects from 8 different industries that are being developed. Need full-cycle product development or an improvement cycle? Let's talk about driving team backlogs and roadmaps!",
  },
  {
    id: 10,
    title: "Associate Product Manager",
    category: "Product",
    tags: ["Tallinn", "Hybrid"],
    description:
      "Assist in coordinating product releases, gathering requirements, and communicating updates to stakeholders. Ideal for candidates with 1-2 years of product coordination experience.",
  },

  // Design (1)
  {
    id: 11,
    title: "Senior Product designer",
    category: "Design",
    tags: ["Hybrid", "Tallinn", "Full-time"],
    description:
      "Since 2019 we've worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement design system? Let's talk!",
  },

  // Operation (4)
  {
    id: 12,
    title: "Operations Coordinator",
    category: "Operation",
    tags: ["Tallinn", "Full-time"],
    description:
      "Support daily business operations, align inter-departmental logistics, and implement operational workflows to maximize general productivity and employee satisfaction.",
  },
  {
    id: 13,
    title: "HR Generalist",
    category: "Operation",
    tags: ["Tartu", "Hybrid"],
    description:
      "Help implement employee wellness programs, organize reviews, manage onboarding workflows, and assist with labor compliance across all team branches.",
  },
  {
    id: 14,
    title: "Talent Acquisition Specialist",
    category: "Operation",
    tags: ["Remote", "Full-time"],
    description:
      "Source, screen, and interview candidates for technical and non-technical roles. Build pipelines for future hiring requirements and manage hiring communications.",
  },
  {
    id: 15,
    title: "Office Manager",
    category: "Operation",
    tags: ["Tallinn", "On-site"],
    description:
      "Keep the workspace running smoothly! Oversee supply orders, coordinates visitor arrivals, and organizes internal team events and workspace comfort.",
  },

  // Marketing (2)
  {
    id: 16,
    title: "Digital Marketing Specialist",
    category: "Marketing",
    tags: ["Remote", "Full-time"],
    description:
      "Manage social campaigns, PPC ads, and track campaign ROI. Coordinate copy creations and graphic alignments with the design and copy team members.",
  },
  {
    id: 17,
    title: "Content Writer & SEO",
    category: "Marketing",
    tags: ["Tartu", "Hybrid"],
    description:
      "Produce engaging blogs, write SEO-optimized copy for our service pages, and align branding messaging across multiple public platforms.",
  },
];

export const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const defaultDetails = {
  metadata: {
    category: "IT",
    experience: "Mid Level - 3+ Years",
    jobType: "Full Time",
    location: "Hyderabad (Onsite)",
    openings: "Mid Level (2)"
  },
  fullDescription: "We are seeking a highly experienced Lead QA Automation Engineer to drive quality assurance strategies and automation initiatives across our applications. The ideal candidate will have strong expertise in modern automation tools, frameworks, and DevOps practices, along with the ability to lead teams and ensure high-quality product delivery.",
  roles: [
    { title: "Automation Framework Development", text: "Design, develop, and maintain scalable automation frameworks using Selenium with Java." },
    { title: "Test Automation", text: "Develop and execute automated test scripts for web applications ensuring high test coverage." },
    { title: "Test Management & Reporting", text: "Integrate and manage test reporting using Allure TestOps for real-time insights and analytics." },
    { title: "CI/CD Integration", text: "Integrate automated test suites into CI/CD pipelines using Azure DevOps." },
    { title: "Authentication Testing", text: "Validate authentication and authorization flows using Auth0." },
    { title: "Quality Strategy", text: "Define QA strategies, test plans, and best practices for automation and manual testing." },
    { title: "Defect Management", text: "Identify, track, and ensure timely resolution of defects with development teams." },
    { title: "Performance & Reliability", text: "Ensure application stability through continuous testing and monitoring." },
    { title: "Leadership & Mentoring", text: "Lead and mentor QA team members, conduct code reviews, and drive best practices." },
    { title: "Collaboration", text: "Work closely with developers, product managers, and stakeholders to ensure quality deliverables." }
  ],
  requirements: {
    technical: [
      "Strong experience in Selenium with Java.",
      "Hands-on experience with Allure TestOps for test reporting.",
      "Experience integrating automation frameworks with Azure DevOps CI/CD pipelines.",
      "Good understanding of Auth0 authentication flows and security testing.",
      "Experience in API testing and UI automation.",
      "Strong knowledge of testing methodologies, SDLC, and STLC."
    ],
    soft: [
      "Strong leadership and team management skills.",
      "Excellent analytical and problem-solving abilities.",
      "Good communication and stakeholder management skills.",
      "Ability to work in a fast-paced, agile environment."
    ]
  }
};

export const positionsData = [
  {
    id: 1,
    title: "Full-Stack Developers",
    tags: ["Tartu", "Full-time"],
    description: "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
    category: "Engineering",
    details: {
      ...defaultDetails,
      fullDescription: "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features. We need you to drive quality assurance strategies and automation initiatives across our applications.",
      metadata: { ...defaultDetails.metadata, location: "Tartu", openings: "Senior (1)" }
    }
  },
  {
    id: 2,
    title: "Application developer (react native)",
    tags: ["Tartu", "Full-time"],
    description: "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
    category: "Engineering",
    details: {
      ...defaultDetails,
      metadata: { ...defaultDetails.metadata, location: "Tartu" }
    }
  },
  {
    id: 3,
    title: "Senior Product designer",
    tags: ["Hybrid", "Tallinn", "Full-time"],
    description: "Since 2019 we've worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement cycle? Let's talk!",
    category: "Design",
    details: {
      ...defaultDetails,
      fullDescription: "Since 2019 we've worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. We are looking for a Senior Product Designer to spearhead our UI/UX initiatives and mentor junior designers.",
      metadata: { ...defaultDetails.metadata, category: "Design", location: "Tallinn (Hybrid)" }
    }
  },
  {
    id: 4,
    title: "Product Manager",
    tags: ["Remote", "Netherlands", "Full-time"],
    description: "If you are PM and you eager to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features. 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries.",
    category: "Product",
    details: {
      ...defaultDetails,
      fullDescription: "If you are a Product Manager eager to join our fast-paced Engineering team, you will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
      metadata: { ...defaultDetails.metadata, category: "Product", location: "Netherlands (Remote)" }
    }
  },
  {
    id: 5,
    title: "Product Owner",
    tags: ["Tartu", "Full-time"],
    description: "We've worked on 30+ major projects from 8 different industries that are being used . Need full-cycle product development or an improvement cycle? Let's talk!",
    category: "Product",
    details: {
      ...defaultDetails,
      metadata: { ...defaultDetails.metadata, category: "Product", location: "Tartu" }
    }
  }
];

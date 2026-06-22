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
    title: "Full-Stack Developer",
    tags: ["Full-time", "Hyderabad"],
    description: "We're looking for an experienced Full-Stack Developer to join our Engineering team. You'll work closely with Product and Design to build, test, and ship new features across our client projects and in-house products — and you'll see your code go to real users, not sit in a backlog.",
    category: "Engineering",
    details: {
      ...defaultDetails,
      fullDescription: "We're looking for an experienced Full-Stack Developer to join our Engineering team. You'll work closely with Product and Design to build, test, and ship new features across our client projects and in-house products — and you'll see your code go to real users, not sit in a backlog.",
      metadata: { ...defaultDetails.metadata, location: "Hyderabad", openings: "Mid Level (2)" }
    }
  },
  {
    id: 2,
    title: "Application Developer (React Native)",
    tags: ["Full-time", "Hyderabad"],
    description: "We're hiring a React Native developer to build and maintain cross-platform mobile apps across our client and product portfolio — from early architecture decisions through to app-store release.",
    category: "Engineering",
    details: {
      ...defaultDetails,
      fullDescription: "We're hiring a React Native developer to build and maintain cross-platform mobile apps across our client and product portfolio — from early architecture decisions through to app-store release.",
      metadata: { ...defaultDetails.metadata, location: "Hyderabad" }
    }
  },
  {
    id: 3,
    title: "Senior Product Designer",
    tags: ["Full-time", "Hybrid"],
    description: "Own end-to-end design across one or more of our products and client engagements — research, wireframes, prototyping, and developer handoff. You'll work directly with engineering and product, not through three layers of approval.",
    category: "Design",
    details: {
      ...defaultDetails,
      fullDescription: "Own end-to-end design across one or more of our products and client engagements — research, wireframes, prototyping, and developer handoff. You'll work directly with engineering and product, not through three layers of approval.",
      metadata: { ...defaultDetails.metadata, category: "Design", location: "Hybrid" }
    }
  },
  {
    id: 4,
    title: "Product Manager",
    tags: ["Full-time", "Remote"],
    description: "Drive the roadmap for one or more of our in-house products or a major client engagement, working cross-functionally with engineering, design, and marketing to ship features that actually move the metrics that matter.",
    category: "Product",
    details: {
      ...defaultDetails,
      fullDescription: "Drive the roadmap for one or more of our in-house products or a major client engagement, working cross-functionally with engineering, design, and marketing to ship features that actually move the metrics that matter.",
      metadata: { ...defaultDetails.metadata, category: "Product", location: "Remote" }
    }
  },
  {
    id: 5,
    title: "Product Owner",
    tags: ["Full-time", "Hyderabad"],
    description: "Own the backlog and day-to-day prioritisation for an engineering team, translating business requirements into clear, sprint-ready work.",
    category: "Product",
    details: {
      ...defaultDetails,
      fullDescription: "Own the backlog and day-to-day prioritisation for an engineering team, translating business requirements into clear, sprint-ready work.",
      metadata: { ...defaultDetails.metadata, category: "Product", location: "Hyderabad" }
    }
  }
];

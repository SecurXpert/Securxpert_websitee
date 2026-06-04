export const getJobDetails = (title, category, tags) => {
  const lowercaseTitle = title.toLowerCase();
  
  if (lowercaseTitle.includes("qa") || lowercaseTitle.includes("testing") || lowercaseTitle.includes("automation")) {
    return {
      category: "QA",
      type: "Full-time",
      workExp: "Mid Level (3)",
      expRange: "Mid Level, 3-5 Years",
      location: "Bhubaneswar (Odisha)",
      description: "Do you love testing? We are looking for an experienced QA Automation Engineer to design, write, and execute automated test suites. You will work closely with development and product teams to identify and resolve issues early in the software lifecycle, maintaining high quality standards for our clients.",
      responsibilities: [
        "Automated framework development, design, planning, and execution of automated test cases.",
        "Develop automated test scripts using Selenium with Java to validate backend and frontend workflows.",
        "Test automation codebase maintenance and improvements.",
        "Perform manual testing when necessary and document test results.",
        "Work in an Agile environment, participating in daily standups and sprint planning.",
        "Identify, document, and track software defects to resolution.",
        "Conduct performance and regression testing on multiple platforms."
      ],
      technicalSkills: [
        "Strong experience with Java and Selenium WebDriver.",
        "Familiarity with TestNG, JUnit, and Maven.",
        "Experience with CI/CD tools like Jenkins, GitLab CI, or GitHub Actions.",
        "Solid understanding of QA methodologies and testing processes.",
        "Experience with API testing using Postman or RestAssured."
      ],
      softSkills: [
        "Strong analytical and problem-solving skills.",
        "Excellent communication and collaboration skills.",
        "Detail-oriented mindset with a commitment to quality."
      ]
    };
  }

  // Engineering positions (Full-Stack, Frontend, Backend, DevOps, Security)
  if (category === "Engineering") {
    return {
      category: "Engineering",
      type: tags.includes("Full-time") ? "Full-time" : tags.includes("Hybrid") ? "Hybrid" : "Contract",
      workExp: lowercaseTitle.includes("senior") ? "Senior Level" : "Mid Level",
      expRange: lowercaseTitle.includes("senior") ? "5+ Years" : "3-5 Years",
      location: tags[0] || "Remote",
      description: `We are looking for a talented ${title} to join our fast-paced Engineering team. You will work closely with Product, Design, and Marketing to analyze, develop, debug, test, and roll out new features.`,
      responsibilities: [
        `Design, build, and maintain high-performance software workflows and codebase patterns.`,
        "Collaborate with backend/frontend engineers and product owners on design implementation.",
        "Write clean, readable, self-documenting, and highly performant code.",
        "Integrate external interfaces, API gateways, database engines, and secure authorization flows.",
        "Participate in sprint planning sessions, architectural designs, and automated testing.",
        "Troubleshoot code issues, monitor server workloads, and optimize responsiveness."
      ],
      technicalSkills: [
        "Strong experience with modern programming frameworks (React, Node.js, Next.js, Go).",
        "Deep familiarity with git-based workflow alignments and cloud-based architecture designs.",
        "Experience designing and implementing RESTful or GraphQL endpoints.",
        "Understanding of security standards, database indexing, and deployment pipelines."
      ],
      softSkills: [
        "Excellent technical logic and analytical problem-solving skills.",
        "Highly communicative and supportive within a distributed team setting.",
        "Organized, proactive, and willing to learn new systems and dependencies."
      ]
    };
  }

  // Design positions (Senior Product Designer, etc.)
  if (category === "Design") {
    return {
      category: "Design",
      type: "Full-time",
      workExp: "Senior Level",
      expRange: "5+ Years",
      location: "Tallinn (Estonia) / Hybrid",
      description: "We are seeking a Product Designer who is passionate about creating seamless digital solutions. You will own user flows, build modern interfaces, and collaborate closely with engineering teams to bring designs to life.",
      responsibilities: [
        "Establish visual systems, responsive structures, and component libraries.",
        "Design wireframes, low/high-fidelity prototypes, and design specs in Figma.",
        "Conduct thorough design reviews, user studies, and usability tests.",
        "Translate abstract workflows into clean, interactive, and aesthetic UI layouts.",
        "Direct style guides and typography conventions for all digital platforms."
      ],
      technicalSkills: [
        "Exemplary skills in Figma, Adobe Creative Suite, and prototyping platforms.",
        "Solid portfolio displaying spacing systems, typography grid styles, and branding.",
        "Basic understanding of frontend frameworks (CSS/React) constraints.",
        "Experience setting up design systems from scratch."
      ],
      softSkills: [
        "Strong empathy for user needs and product experience flows.",
        "Clear and structured feedback delivery and receipt.",
        "Organized, collaborative, and communicative."
      ]
    };
  }

  // Product and Operations positions (Product Manager, DevOps, Operation, etc.)
  return {
    category: category || "Business Operations",
    type: "Full-time",
    workExp: "Mid Level",
    expRange: "2-5 Years",
    location: tags[0] || "Remote",
    description: `We are seeking a motivated ${title} to streamline operations, facilitate communications, and align workflows to maximize general productivity and support our growing business goals.`,
    responsibilities: [
      "Coordinate day-to-day project operations, sprint goals, or organizational logistics.",
      "Conduct regular stakeholder alignment checkups and maintain detailed status docs.",
      "Identify operational blockers, propose resolutions, and coordinate task assignments.",
      "Liaise between executive leadership and engineering/design departments."
    ],
    technicalSkills: [
      "Proficient with project management suites (Jira, Linear, Notion, Slack).",
      "Familiarity with digital workflow automation tools.",
      "Excellent data analysis, reporting, and dashboard maintenance skills."
    ],
    softSkills: [
      "Outstanding communication and public presentation capacities.",
      "Highly organized with great multitasking capability.",
      "Empathetic, structured, and detail-oriented."
    ]
  };
};

import { LuBot, LuMessageSquare, LuBrainCircuit, LuZap } from "react-icons/lu";

const aiChatbots = {
  category: "05 — AI CHATBOTS",
  metaTitle: "Custom Bots - AI Chatbot Development Company in Hyderabad",
  metaDescription: "Custom AI chatbot development Hyderabad for support, lead generation & WhatsApp. Scalable, CRM-connected & GPT-enabled. Over 500 businesses trust us. Request a free demo.",
  heroTitle: "Build Smarter Conversations with Custom AI Chatbots",
  heroDesc: " We build custom AI chatbots that handle real conversations, qualify leads, resolve support queries, and automate workflows so your team spends zero time on repetitive interactions.",
  illustration: "/services-media/services.png",
  title: "AI & Smart Chatbots",
  subtitle: "Automation Service",
  description: "Intelligent AI-driven chatbots and virtual assistants that automate customer service and enhance user engagement.",
  accentColor: "emerald",
  bgClass: "bg-emerald-500/10",
  borderClass: "border-emerald-500/20",
  textColor: "text-emerald-400",
  buttonBg: "bg-emerald-500 hover:bg-emerald-400 text-white",
  capabilities: [
    { title: "Conversational AI", desc: "Natural language processing for human-like interactions", icon: LuBrainCircuit },
    { title: "Custom Bot Development", desc: "Tailored chatbot solutions for your specific industry", icon: LuBot },
    { title: "Multi-Platform Integration", desc: "Deploy across WhatsApp, Messenger, websites, and more", icon: LuMessageSquare },
    { title: "Automated Workflows", desc: "Connect bots with your CRM to automate tasks", icon: LuZap }
  ],
  processHeading: "Bot Implementation Process",
  process: [
    { id: "01", title: "Use Case Definition", desc: "Identifying the scenarios for automation" },
    { id: "02", title: "Conversation Design", desc: "Crafting dialog flows and user journeys" },
    { id: "03", title: "Development & Training", desc: "Building the bot and training the AI model" },
    { id: "04", title: "Deployment", desc: "Integration with channels and ongoing optimization" }
  ],
  techStack: ["OpenAI", "Dialogflow", "Rasa", "Botpress", "Python", "TensorFlow", "Node.js", "Twilio"],
  faqs: [
    {
      id: 1,
      qNumber: "Q1.",
      question: "How much does custom AI chatbot development cost in India?",
      answer: "Pricing depends on complexity, integrations, and channels. We offer fixed-scope project pricing with no hidden charges. Contact us for a detailed quote."
    },
    {
      id: 2,
      qNumber: "Q2.",
      question: "Which platforms can the chatbot be deployed on?",
      answer: "Website, WhatsApp Business, Facebook Messenger, Instagram DM, mobile apps, and internal portals. We deploy wherever your users are."
    },
    {
      id: 3,
      qNumber: "Q3.",
      question: "Do you use ChatGPT or build custom NLP models?",
      answer: "Both, depending on your use case. We use OpenAI GPT, Dialogflow, Rasa, or LangChain based on what best fits your requirements and budget."
    },
    {
      id: 4,
      qNumber: "Q4.",
      question: "How long does it take to build and launch a chatbot?",
      answer: "A standard chatbot goes live in 3–5 weeks. Complex bots with multiple integrations typically take 6–10 weeks. We share a milestone plan upfront."
    },
    {
      id: 5,
      qNumber: "Q5.",
      question: "Can the chatbot hand off to a live human agent?",
      answer: "Yes. Every customer-facing bot we build includes a seamless human handoff when the query exceeds the bot's scope with full context passed to the agent."
    },
    {
      id: 6,
      qNumber: "Q6.",
      question: "Will the chatbot work in regional Indian languages?",
      answer: "Yes. We build multilingual bots that support Hindi, Telugu, Tamil, Kannada, Marathi, and other regional languages based on your target audience."
    },
    {
      id: 7,
      qNumber: "Q7.",
      question: "Can you integrate the chatbot with our existing CRM or helpdesk?",
      answer: "Absolutely. We integrate with Salesforce, HubSpot, Zoho, Zendesk, Freshdesk, and any system with a REST API or webhook support."
    },
    {
      id: 8,
      qNumber: "Q8.",
      question: "What happens after the chatbot goes live?",
      answer: "We offer post-launch monitoring, performance reporting, model retraining, and ongoing optimization to ensure the bot keeps improving with real usage data."
    }
  ],
  cta: {
    heading: "Ready to Put Your Business Conversations on Autopilot?",
    description: "Tell us your use case; we'll design, build, and deploy an AI chatbot that handles the conversations so your team handles the growth.",
    buttonText: "Get a Free Demo",
    buttonLink: "/contact"
  }
};

export default aiChatbots;

import { LuBot, LuMessageSquare, LuBrainCircuit, LuZap } from "react-icons/lu";

const aiChatbots = {
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
  techStack: ["OpenAI", "Dialogflow", "Rasa", "Botpress", "Python", "TensorFlow", "Node.js", "Twilio"]
};

export default aiChatbots;

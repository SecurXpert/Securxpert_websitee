import { LuSmartphone, LuTablet, LuShieldCheck } from "react-icons/lu";

const mobileAppDevelopment = {
  title: "Mobile App Security & Development",
  subtitle: "Core Service",
  description: "We construct high-performance native Swift/Kotlin and cross-platform apps using industry-standard device protection practices. Our security measures guard against runtime injections, keylogging, and offline device storage exposure.",
  accentColor: "purple",
  bgClass: "bg-purple-500/10",
  borderClass: "border-purple-500/20",
  textColor: "text-purple-400",
  buttonBg: "bg-purple-600 hover:bg-purple-500 text-white",
  offerings: [
    {
      title: "iOS & Android Development",
      desc: "High-performance applications written in Swift/Kotlin or cross-platform Flutter/React Native, configured to prevent reverse engineering and package tamper leaks."
    },
    {
      title: "Offline Storage Encryption",
      desc: "Integrate SQLCipher databases, encrypted secure stores, local vaults, and secure data sync protocols for safe offline operational states."
    },
    {
      title: "Biometrics & Keychains",
      desc: "Implement Apple Keychain and Android Keystore authentication protocols. Enable secure FaceID/TouchID checks that validate credentials locally."
    }
  ],
  benefits: [
    "Native & Hybrid Architectures",
    "Keychain & Keystore Integration",
    "Reverse-Engineering Obfuscation"
  ],
  capabilities: [
    {
      title: "iOS Applications",
      desc: "Native Swift apps built with secure local keychain storages",
      icon: LuSmartphone
    },
    {
      title: "Android Applications",
      desc: "Native Kotlin apps with obfuscated packages and local encryption",
      icon: LuSmartphone
    },
    {
      title: "Cross-Platform",
      desc: "Cost-effective Flutter or React Native apps with unified codebase",
      icon: LuTablet
    },
    {
      title: "App Security Audits",
      desc: "Static and dynamic analysis to prevent runtime modifications",
      icon: LuShieldCheck
    }
  ],
  processHeading: "Our Development Process",
  process: [
    {
      id: "01",
      title: "Strategy & Spec",
      desc: "Mapping features, security requirements, and target OS versions"
    },
    {
      id: "02",
      title: "Interactive UI/UX",
      desc: "Designing mobile layouts and wireframing user journeys"
    },
    {
      id: "03",
      title: "Secure Coding",
      desc: "Obfuscated native Swift/Kotlin or Flutter/React Native coding"
    },
    {
      id: "04",
      title: "Vulnerability Testing",
      desc: "Running penetration tests, sandbox checks, and validation"
    },
    {
      id: "05",
      title: "App Store Release",
      desc: "Submitting to App Store & Google Play with post-launch support"
    }
  ],
  techStack: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "SQLite", "App Store", "Google Play"]
};

export default mobileAppDevelopment;

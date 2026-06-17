"use client";
import React, { useState } from 'react';

const technologies = [
  { name: 'React', color: 'from-cyan-400 to-blue-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', color: 'from-black to-gray-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Angular', color: 'from-red-600 to-red-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Vue.js', color: 'from-emerald-500 to-teal-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Node.js', color: 'from-green-600 to-green-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', color: 'from-gray-700 to-gray-900', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Python', color: 'from-blue-500 to-yellow-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Django', color: 'from-green-700 to-green-900', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'Flask', color: 'from-black to-gray-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'PHP', color: 'from-indigo-600 to-purple-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', color: 'from-red-500 to-orange-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Java', color: 'from-orange-600 to-red-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', color: 'from-green-600 to-emerald-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: '.NET', color: 'from-purple-600 to-indigo-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { name: 'C#', color: 'from-purple-700 to-violet-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'MySQL', color: 'from-blue-600 to-blue-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', color: 'from-blue-700 to-indigo-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', color: 'from-green-600 to-green-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Redis', color: 'from-red-600 to-red-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'AWS', color: 'from-orange-500 to-amber-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Microsoft Azure', color: 'from-blue-500 to-blue-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Docker', color: 'from-blue-500 to-cyan-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', color: 'from-blue-600 to-indigo-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'GraphQL', color: 'from-pink-600 to-purple-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'TypeScript', color: 'from-blue-600 to-blue-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', color: 'from-cyan-500 to-blue-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Figma', color: 'from-purple-500 to-pink-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Shopify', color: 'from-green-600 to-emerald-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg' },
  { name: 'WordPress', color: 'from-blue-700 to-indigo-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'Flutter', color: 'from-blue-500 to-cyan-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'React Native', color: 'from-cyan-500 to-blue-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Swift', color: 'from-orange-500 to-red-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
  { name: 'Kotlin', color: 'from-purple-500 to-orange-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'Windows Server', color: 'from-blue-500 to-cyan-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
  { name: 'Linux', color: 'from-yellow-400 to-yellow-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Microsoft 365', color: 'from-orange-500 to-red-500', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg' },
  { name: 'Cisco', color: 'from-blue-600 to-cyan-700', logo: 'https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg' },
  { name: 'Fortinet', color: 'from-red-600 to-red-800', logo: 'https://www.vectorlogo.zone/logos/fortinet/fortinet-icon.svg' },
  { name: 'VMware', color: 'from-slate-500 to-slate-700', logo: 'https://www.vectorlogo.zone/logos/vmware/vmware-icon.svg' },
  { name: 'Veeam', color: 'from-green-500 to-emerald-600', logo: 'https://www.vectorlogo.zone/logos/veeam/veeam-icon.svg' },
  { name: 'ServiceNow', color: 'from-green-600 to-green-800', logo: 'https://www.vectorlogo.zone/logos/servicenow/servicenow-icon.svg' },
  { name: 'Jira', color: 'from-blue-500 to-blue-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
  { name: 'Zabbix', color: 'from-red-500 to-red-700', logo: 'https://www.vectorlogo.zone/logos/zabbix/zabbix-icon.svg' },
  { name: 'Google Cloud Platform (GCP)', color: 'from-blue-400 to-blue-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Hyper-V', color: 'from-blue-600 to-cyan-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
  { name: 'Terraform', color: 'from-purple-500 to-indigo-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'Ansible', color: 'from-black to-slate-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
  { name: 'Grafana', color: 'from-orange-500 to-red-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
  { name: 'CloudWatch', color: 'from-orange-400 to-amber-600', logo: 'https://www.vectorlogo.zone/logos/amazon_cloudwatch/amazon_cloudwatch-icon.svg' },
  { name: 'Azure Monitor', color: 'from-blue-500 to-blue-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Zendesk', color: 'from-green-500 to-green-700', logo: 'https://www.vectorlogo.zone/logos/zendesk/zendesk-icon.svg' },
  { name: 'Freshdesk', color: 'from-blue-500 to-blue-600', logo: 'https://www.vectorlogo.zone/logos/freshworks/freshworks-icon.svg' },
  { name: 'Salesforce', color: 'from-blue-400 to-blue-600', logo: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg' },
  { name: 'HubSpot', color: 'from-orange-500 to-orange-600', logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg' },
  { name: 'Zoho', color: 'from-red-500 to-red-600', logo: 'https://www.vectorlogo.zone/logos/zoho/zoho-icon.svg' },
  { name: 'QuickBooks', color: 'from-green-500 to-green-700', logo: 'https://www.vectorlogo.zone/logos/intuit_quickbooks/intuit_quickbooks-icon.svg' },
  { name: 'Tally', color: 'from-blue-600 to-blue-800', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Tally_Solutions_Logo.png/220px-Tally_Solutions_Logo.png' },
  { name: 'SAP', color: 'from-blue-500 to-blue-700', logo: 'https://www.vectorlogo.zone/logos/sap/sap-icon.svg' },
  { name: 'Google Workspace', color: 'from-blue-400 to-red-400', logo: 'https://www.vectorlogo.zone/logos/google_workspace/google_workspace-icon.svg' },
  { name: 'Slack', color: 'from-purple-500 to-pink-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
  { name: 'Dialogflow', color: 'from-orange-400 to-orange-600', logo: 'https://www.vectorlogo.zone/logos/dialogflow/dialogflow-icon.svg' },
  { name: 'Rasa', color: 'from-purple-500 to-purple-700', logo: 'https://www.vectorlogo.zone/logos/rasa/rasa-icon.svg' },
  { name: 'OpenAI GPT', color: 'from-green-500 to-green-700', logo: 'https://www.vectorlogo.zone/logos/openai/openai-icon.svg' },
  { name: 'LangChain', color: 'from-blue-500 to-blue-700', logo: 'https://cdn.worldvectorlogo.com/logos/langchain.svg' },
  { name: 'Botpress', color: 'from-blue-600 to-blue-800', logo: 'https://www.vectorlogo.zone/logos/botpress/botpress-icon.svg' },
  { name: 'Twilio', color: 'from-red-500 to-red-700', logo: 'https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg' },
  { name: 'WhatsApp Business API', color: 'from-green-400 to-green-600', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' },
  { name: 'Intercom', color: 'from-blue-400 to-blue-600', logo: 'https://www.vectorlogo.zone/logos/intercom/intercom-icon.svg' },
  { name: 'REST APIs', color: 'from-slate-500 to-slate-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg' },
  { name: 'Webhooks', color: 'from-slate-600 to-slate-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
  { name: 'Google Analytics 4', color: 'from-yellow-500 to-orange-500', logo: 'https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg' },
  { name: 'Google Search Console', color: 'from-blue-400 to-blue-600', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Google_Search_Console_logo.svg' },
  { name: 'SEMrush', color: 'from-orange-500 to-red-500', logo: 'https://www.vectorlogo.zone/logos/semrush/semrush-icon.svg' },
  { name: 'Ahrefs', color: 'from-blue-500 to-orange-500', logo: 'https://www.vectorlogo.zone/logos/ahrefs/ahrefs-icon.svg' },
  { name: 'Google Ads', color: 'from-blue-400 to-blue-700', logo: 'https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg' },
  { name: 'Meta Ads Manager', color: 'from-blue-600 to-blue-800', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Mailchimp', color: 'from-yellow-400 to-yellow-600', logo: 'https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg' },
  { name: 'Klaviyo', color: 'from-cyan-400 to-blue-500', logo: 'https://www.vectorlogo.zone/logos/klaviyo/klaviyo-icon.svg' },
  { name: 'Hootsuite', color: 'from-slate-700 to-slate-900', logo: 'https://www.vectorlogo.zone/logos/hootsuite/hootsuite-icon.svg' },
  { name: 'Buffer', color: 'from-black to-slate-800', logo: 'https://www.vectorlogo.zone/logos/bufferapp/bufferapp-icon.svg' },
  { name: 'Hotjar', color: 'from-red-400 to-red-600', logo: 'https://www.vectorlogo.zone/logos/hotjar/hotjar-icon.svg' },
  { name: 'Google Tag Manager', color: 'from-blue-400 to-blue-600', logo: 'https://www.vectorlogo.zone/logos/google_tagmanager/google_tagmanager-icon.svg' },
  { name: 'Adobe XD', color: 'from-pink-500 to-red-500', logo: 'https://www.vectorlogo.zone/logos/adobe_xd/adobe_xd-icon.svg' },
  { name: 'Sketch', color: 'from-orange-400 to-yellow-500', logo: 'https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg' },
  { name: 'InVision', color: 'from-pink-500 to-red-500', logo: 'https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg' },
  { name: 'Maze', color: 'from-slate-500 to-slate-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
  { name: 'Miro', color: 'from-yellow-400 to-blue-500', logo: 'https://www.vectorlogo.zone/logos/miro/miro-icon.svg' },
  { name: 'FigJam', color: 'from-purple-500 to-pink-500', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Zeplin', color: 'from-yellow-500 to-orange-500', logo: 'https://www.vectorlogo.zone/logos/zeplin/zeplin-icon.svg' },
  { name: 'Lottie', color: 'from-emerald-400 to-teal-500', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Lottie-logo.svg' },
  { name: 'Principle', color: 'from-purple-500 to-indigo-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
  { name: 'Framer', color: 'from-blue-500 to-blue-700', logo: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
  { name: 'Google Analytics', color: 'from-yellow-500 to-orange-500', logo: 'https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg' },
  { name: 'UserTesting', color: 'from-blue-600 to-blue-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg' },
  { name: 'Metasploit', color: 'from-blue-500 to-blue-700', logo: 'https://www.vectorlogo.zone/logos/metasploit/metasploit-icon.svg' },
  { name: 'Burp Suite', color: 'from-orange-500 to-red-500', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Burp_Suite_Logo.png' },
  { name: 'Nessus', color: 'from-blue-400 to-cyan-500', logo: 'https://www.vectorlogo.zone/logos/tenable/tenable-icon.svg' },
  { name: 'Qualys', color: 'from-red-500 to-red-700', logo: 'https://www.vectorlogo.zone/logos/qualys/qualys-icon.svg' },
  { name: 'Splunk', color: 'from-black to-slate-800', logo: 'https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg' },
  { name: 'IBM QRadar', color: 'from-blue-600 to-blue-800', logo: 'https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg' },
  { name: 'CrowdStrike', color: 'from-red-600 to-red-800', logo: 'https://www.vectorlogo.zone/logos/crowdstrike/crowdstrike-icon.svg' },
  { name: 'SentinelOne', color: 'from-purple-500 to-purple-700', logo: 'https://www.vectorlogo.zone/logos/sentinelone/sentinelone-icon.svg' },
  { name: 'Palo Alto', color: 'from-orange-500 to-red-500', logo: 'https://www.vectorlogo.zone/logos/paloaltonetworks/paloaltonetworks-icon.svg' },
  { name: 'Wireshark', color: 'from-blue-400 to-blue-600', logo: 'https://www.vectorlogo.zone/logos/wireshark/wireshark-icon.svg' },
  { name: 'Nmap', color: 'from-blue-500 to-indigo-600', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Nmap_logo.svg' },
  { name: 'AWS Security Hub', color: 'from-orange-400 to-orange-600', logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
  { name: 'Microsoft Defender', color: 'from-blue-400 to-blue-600', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Windows_Defender_Security_Center_icon.png/512px-Windows_Defender_Security_Center_icon.png' },
  { name: 'Rapid7', color: 'from-orange-500 to-orange-700', logo: 'https://www.vectorlogo.zone/logos/rapid7/rapid7-icon.svg' },
];

function TechPill({ tech }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group relative flex-shrink-0 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
    >
      {/* Glassmorphism pill */}
      <div className="relative backdrop-blur-md bg-white/60 border border-slate-200 rounded-2xl px-6 py-4 transition-all duration-300">
        {/* Subtle gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

        {/* Content */}
        <div className="relative flex items-center gap-3">
          {/* Logo */}
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm p-1.5 overflow-hidden">
            {!imgError && tech.logo ? (
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="w-full h-full object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className={`w-full h-full rounded flex items-center justify-center font-bold text-sm text-white bg-gradient-to-br ${tech.color}`}>
                {tech.name.charAt(0)}
              </div>
            )}
          </div>

          {/* Name */}
          <span className="font-semibold text-slate-800 whitespace-nowrap text-base">
            {tech.name}
          </span>
        </div>


      </div>


    </div>
  );
}

export default function TechShowcase({
  title = "Technologies We Master",
  description = "Building enterprise solutions with cutting-edge technologies and industry-leading frameworks",
  techList = null
}) {
  const [isHovered, setIsHovered] = useState(false);

  const displayTechs = techList && techList.length > 0
    ? technologies.filter(t => techList.includes(t.name))
    : technologies;

  if (displayTechs.length === 0) return null;

  return (
    <section className="bg-white py-10 sm:py-10 relative z-10 border-b border-slate-100/80 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl -translate-y-1/2"></div>
      </div>

      <div className="max-w-[90%] 2xl:max-w-[1465px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-[#100D35] tracking-[-1px] mb-4">
            {title}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Scrolling container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          <div className="overflow-hidden py-4">
            <div
              className={`flex gap-6 ${isHovered ? 'animate-pause' : 'animate-scroll'}`}
              style={{
                width: 'max-content',
              }}
            >
              {/* First set */}
              {displayTechs.map((tech, index) => (
                <TechPill key={`tech-1-${index}`} tech={tech} />
              ))}
              {/* Duplicate set for seamless loop */}
              {displayTechs.map((tech, index) => (
                <TechPill key={`tech-2-${index}`} tech={tech} />
              ))}
              {/* Third set for extra smoothness */}
              {displayTechs.map((tech, index) => (
                <TechPill key={`tech-3-${index}`} tech={tech} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="text-md text-slate-500">
            And many more technologies to bring your vision to life
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-pause {
          animation-play-state: paused;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

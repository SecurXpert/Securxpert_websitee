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
  { name: 'Azure', color: 'from-blue-500 to-blue-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Docker', color: 'from-blue-500 to-cyan-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', color: 'from-blue-600 to-indigo-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'GraphQL', color: 'from-pink-600 to-purple-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'TypeScript', color: 'from-blue-600 to-blue-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', color: 'from-cyan-500 to-blue-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Figma', color: 'from-purple-500 to-pink-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Shopify', color: 'from-green-600 to-emerald-700', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg' },
  { name: 'WordPress', color: 'from-blue-700 to-indigo-800', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'Flutter', color: 'from-blue-500 to-cyan-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'React Native', color: 'from-cyan-500 to-blue-600', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
];

export default function Technologies() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full overflow-hidden relative bg-slate-50">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent mb-6">
            Technologies We Work With 
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We build on the same enterprise-grade platforms trusted by leading technology companies worldwide — and we're equipped to deploy them properly
          </p>
        </div>

        {/* Scrolling container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient overlays for smooth edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/50 to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden py-8">
            <div
              className={`flex gap-8 ${isHovered ? 'animate-pause' : 'animate-scroll'}`}
              style={{
                width: 'max-content',
              }}
            >
              {/* First set */}
              {technologies.map((tech, index) => (
                <TechPill key={`tech-1-${index}`} tech={tech} />
              ))}
              {/* Duplicate set for seamless loop */}
              {technologies.map((tech, index) => (
                <TechPill key={`tech-2-${index}`} tech={tech} />
              ))}
              {/* Third set for extra smoothness */}
              {technologies.map((tech, index) => (
                <TechPill key={`tech-3-${index}`} tech={tech} />
              ))}
            </div>
          </div>
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
          animation: scroll 60s linear infinite;
        }

        .animate-pause {
          animation-play-state: paused;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

function TechPill({ tech }) {
  return (
    <div
      className="group relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
    >
      {/* Glassmorphism square container */}
      <div className="relative flex items-center justify-center w-24 h-24 backdrop-blur-md bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-4">
        {/* Subtle gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

        {/* Logo */}
        <img
          src={tech.logo}
          alt={`${tech.name} logo`}
          className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
}

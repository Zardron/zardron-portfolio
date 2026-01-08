import React from "react";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";

const Freelance = () => {
  return (
    <div className="bg-gray-50/10 rounded-lg p-6 border border-gray-50/20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
          <BuildingOfficeIcon className="w-full h-full text-gray-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white/90">Full-Stack Developer</h2>
          <p className="text-white/70">Freelance</p>
          <p className="text-sm text-white/60">May 2025 - Present</p>
          <p className="text-sm text-white/60">Remote</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Key Responsibilities</h3>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Work independently as a freelance developer, managing multiple client projects simultaneously
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Develop custom web applications and websites for diverse clients across various industries
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Build responsive and modern user interfaces using React.js and Next.js with TypeScript, CSS3, Tailwind CSS, shadcn/ui, and styled-components
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Create server-side rendered and static applications using Next.js for optimal performance and SEO
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Develop robust backend systems using Node.js and TypeScript for RESTful API development
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Design and manage MongoDB databases, implementing efficient data models, schemas, and queries
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Integrate Supabase for authentication, real-time databases, and backend-as-a-service functionality
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Handle client communications, project scoping, and deliver high-quality solutions within agreed timelines
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Provide technical consulting and development services for startups and established businesses
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Optimize application performance, ensure cross-platform compatibility, and implement best practices
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20">
          <h3 className="text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
            <span className="text-blue-400">⚡</span>
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-blue-600/30 text-blue-200 rounded-lg text-sm font-medium border border-blue-400/30 shadow-lg shadow-blue-500/20">React.js</span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-blue-600/30 text-blue-200 rounded-lg text-sm font-medium border border-blue-400/30 shadow-lg shadow-blue-500/20">Next.js</span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/30 to-green-600/30 text-green-200 rounded-lg text-sm font-medium border border-green-400/30 shadow-lg shadow-green-500/20">Node.js</span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/30 to-green-600/30 text-green-200 rounded-lg text-sm font-medium border border-green-400/30 shadow-lg shadow-green-500/20">MongoDB</span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/30 to-green-600/30 text-green-200 rounded-lg text-sm font-medium border border-green-400/30 shadow-lg shadow-green-500/20">Supabase</span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-blue-600/30 text-blue-200 rounded-lg text-sm font-medium border border-blue-400/30 shadow-lg shadow-blue-500/20">TypeScript</span>
            <span className="px-4 py-2 bg-gradient-to-r from-pink-500/30 to-pink-600/30 text-pink-200 rounded-lg text-sm font-medium border border-pink-400/30 shadow-lg shadow-pink-500/20">CSS3</span>
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/30 to-cyan-600/30 text-cyan-200 rounded-lg text-sm font-medium border border-cyan-400/30 shadow-lg shadow-cyan-500/20">Tailwind CSS</span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-purple-600/30 text-purple-200 rounded-lg text-sm font-medium border border-purple-400/30 shadow-lg shadow-purple-500/20">shadcn/ui</span>
            <span className="px-4 py-2 bg-gradient-to-r from-pink-500/30 to-pink-600/30 text-pink-200 rounded-lg text-sm font-medium border border-pink-400/30 shadow-lg shadow-pink-500/20">styled-components</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Project Highlights</h3>
          <div className="bg-gray-50/5 rounded-lg p-4">
            <p className="text-white/70 text-sm italic">
              "Working independently as a freelance full-stack developer, managing multiple client projects using modern 
              technologies including React.js, Next.js, Node.js, MongoDB, Supabase, Tailwind CSS, shadcn/ui, and styled-components. 
              Delivering high-quality, scalable solutions for diverse clients while independently managing project timelines, 
              budgets, and client expectations."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelance;

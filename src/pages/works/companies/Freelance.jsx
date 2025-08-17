import React from "react";
import FreelanceLogo from "../../../assets/1630654677054.jpeg";

const Freelance = () => {
  return (
    <div className="bg-gray-50/10 rounded-lg p-6 border border-gray-50/20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
          <img
            src={FreelanceLogo}
            alt="Freelance Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white/90">Full-Stack Developer</h2>
          <p className="text-white/70">Icered</p>
          <p className="text-sm text-white/60">Jul 2025 - Present</p>
          <p className="text-sm text-white/60">Remote · California, USA</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Key Responsibilities</h3>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Develop custom web applications and websites for clients across various industries
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Create responsive and modern user interfaces using React.js, TypeScript, and modern CSS frameworks
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Build robust backend systems using Node.js, Express.js, and TypeScript for RESTful API development
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Design and implement GraphQL APIs for efficient data fetching and real-time updates
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Manage MongoDB databases and implement efficient data models and queries
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Provide technical consulting and development services for startups and established businesses
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Manage project timelines, client communications, and deliver high-quality solutions on schedule
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Optimize application performance and ensure cross-platform compatibility
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React.js</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TypeScript</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Express.js</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">MongoDB</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">GraphQL</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Full-Stack Development</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Project Highlights</h3>
          <div className="bg-gray-50/5 rounded-lg p-4">
            <p className="text-white/70 text-sm italic">
              "Providing comprehensive full-stack development services using modern technologies including React.js, 
              TypeScript, Node.js, Express.js, MongoDB, and GraphQL. Delivering high-quality, scalable solutions 
              for clients across various industries while maintaining excellent project management and client communication."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelance;

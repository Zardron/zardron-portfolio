import React from "react";
import NAGARRO from "../../../assets/tech-stack/nagarro.png";

const Nagarro = () => {
  return (
    <div className="bg-gray-50/10 rounded-lg p-6 border border-gray-50/20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
          <img
            src={NAGARRO}
            alt="Nagarro Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white/90">Nagarro</h2>
          <p className="text-white/70">Senior Engineer</p>
          <p className="text-sm text-white/60">Jun 2024 - Jul 2025 (1 yr 2 mos)</p>
          <p className="text-sm text-white/60">India & UAE · Remote</p>
        </div>
      </div>

      {/* NDA Notice */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-yellow-500 font-semibold">Confidentiality Notice</span>
        </div>
        <p className="text-white/80 text-sm leading-relaxed">
          All projects and work completed at Nagarro are covered by Non-Disclosure Agreements (NDA).
          Due to confidentiality requirements, specific project details, code samples, and technical implementations
          cannot be publicly displayed. The work involved assisting Nagarro development teams with projects
          where our company has more expertise, including frontend and backend development.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Key Responsibilities</h3>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Assist Nagarro developers with projects where our company has more expertise
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Collaborate with developers from both RipeConcepts and Nagarro teams
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Wait for and prepare for upcoming frontend and backend projects from Nagarro
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Provide technical support and guidance to development teams
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Maintain readiness for new project assignments and technology stack requirements
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Support cross-team collaboration between RipeConcepts and Nagarro developers
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Ensure smooth project handoffs and knowledge transfer between teams
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Frontend Development</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Backend Development</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Technical Support</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Cross-team Collaboration</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Knowledge Transfer</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Project Handoffs</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Project Highlights</h3>
          <div className="bg-gray-50/5 rounded-lg p-4">
            <p className="text-white/70 text-sm italic">
              "Provided technical assistance and support to Nagarro development teams on projects where our company 
              has specialized expertise. Collaborated closely with both RipeConcepts and Nagarro developers, 
              ensuring smooth project handoffs and knowledge transfer between teams while maintaining readiness 
              for upcoming frontend and backend project assignments."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nagarro;

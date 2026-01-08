import React from "react";
import RIPECONCEPTS from "../../../assets/tech-stack/ripeconcepts.png";

const RipeConcepts = () => {
  return (
    <div className="bg-gray-50/10 rounded-lg p-6 border border-gray-50/20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
          <img
            src={RIPECONCEPTS}
            alt="RipeConcepts Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white/90">RipeConcepts, Inc. (Nagarro Company)</h2>
          <p className="text-white/70">Senior Application Developer</p>
          <p className="text-sm text-white/60">Jun 2024 - Jul 2025 (1 yr 2 mos)</p>
          <p className="text-sm text-white/60">Cebu, Central Visayas, Philippines · On-site</p>
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
          All projects and work completed at RipeConcepts are covered by Non-Disclosure Agreements (NDA).
          Due to confidentiality requirements, specific project details, code samples, and technical implementations
          cannot be publicly displayed. The work involved developing cutting-edge Web 3D, AR, and VR applications
          with backend systems and database management.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Key Responsibilities</h3>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Create Real-time Web 3D, Web AR and Web VR program
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Code, test, deploy, and maintain all the back-end components of the product
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Optimize application performance by properly managing the central database and responses to front-end requests
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Assist front-end developers with system integration
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Create high-performance, testable, reusable, and scalable code
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Perform diagnostic tests and troubleshooting for any issues that arise, as well as provide technical support in different project aspects
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Document Node.js processes such as database tables, schemas, and reports
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20">
          <h3 className="text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
            <span className="text-blue-400">⚡</span>
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-purple-600/30 text-purple-200 rounded-lg text-sm font-medium border border-purple-400/30 shadow-lg shadow-purple-500/20">Web 3D</span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-purple-600/30 text-purple-200 rounded-lg text-sm font-medium border border-purple-400/30 shadow-lg shadow-purple-500/20">Web AR</span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-purple-600/30 text-purple-200 rounded-lg text-sm font-medium border border-purple-400/30 shadow-lg shadow-purple-500/20">Web VR</span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/30 to-green-600/30 text-green-200 rounded-lg text-sm font-medium border border-green-400/30 shadow-lg shadow-green-500/20">Node.js</span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-blue-600/30 text-blue-200 rounded-lg text-sm font-medium border border-blue-400/30 shadow-lg shadow-blue-500/20">Backend Development</span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/30 to-green-600/30 text-green-200 rounded-lg text-sm font-medium border border-green-400/30 shadow-lg shadow-green-500/20">Database Management</span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-blue-600/30 text-blue-200 rounded-lg text-sm font-medium border border-blue-400/30 shadow-lg shadow-blue-500/20">System Integration</span>
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/30 to-cyan-600/30 text-cyan-200 rounded-lg text-sm font-medium border border-cyan-400/30 shadow-lg shadow-cyan-500/20">Performance Optimization</span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-blue-600/30 text-blue-200 rounded-lg text-sm font-medium border border-blue-400/30 shadow-lg shadow-blue-500/20">Technical Support</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Project Highlights</h3>
          <div className="bg-gray-50/5 rounded-lg p-4">
            <p className="text-white/70 text-sm italic">
              "Developed real-time Web 3D, AR, and VR applications with comprehensive backend systems. 
              Created high-performance, scalable code while managing database operations and providing 
              technical support. Assisted front-end developers with system integration and documented 
              all Node.js processes for maintainability."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RipeConcepts;

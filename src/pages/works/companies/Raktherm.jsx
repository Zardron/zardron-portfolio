import React from "react";
import RAK1 from "../../../assets/works/raktherm/1.png";
import RAK2 from "../../../assets/works/raktherm/2.png";
import RAK3 from "../../../assets/works/raktherm/3.png";
import RAK4 from "../../../assets/works/raktherm/4.png";
import { CSS, HTML, JAVASCRIPT, MYSQL, PHP } from "../../../assets/tech-stack";

const Raktherm = () => {
  return (
    <div className="bg-gray-50/10 rounded-lg p-4 sm:p-6 border border-gray-50/20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg p-2 flex items-center justify-center">
          <img
            src={RAK1}
            alt="RAKtherm Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white/90">RAKtherm Ultimate Piping Solution</h2>
          <p className="text-white/70 text-sm sm:text-base">Web Developer</p>
          <p className="text-xs sm:text-sm text-white/60">October 2022 - April 2024</p>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-2 sm:mb-3">Key Responsibilities</h3>
          <ul className="space-y-2 text-white/80 text-sm sm:text-base">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Created new web applications for the company
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Managed and maintained company web applications
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Created repository for company web applications
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Updated web applications from old technology stack to new stack
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Managed company website database
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-2 sm:mb-3">Project Gallery</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            <div className="bg-gray-50/5 rounded-lg p-2">
              <img src={RAK1} alt="Project 1" className="w-full h-20 sm:h-24 object-cover rounded" />
            </div>
            <div className="bg-gray-50/5 rounded-lg p-2">
              <img src={RAK2} alt="Project 2" className="w-full h-20 sm:h-24 object-cover rounded" />
            </div>
            <div className="bg-gray-50/5 rounded-lg p-2">
              <img src={RAK3} alt="Project 3" className="w-full h-20 sm:h-24 object-cover rounded" />
            </div>
            <div className="bg-gray-50/5 rounded-lg p-2">
              <img src={RAK4} alt="Project 4" className="w-full h-20 sm:h-24 object-cover rounded" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20">
          <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
            <span className="text-blue-400">⚡</span>
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-gradient-to-r from-orange-500/30 to-orange-600/30 text-orange-200 rounded-lg text-sm font-medium border border-orange-400/30 shadow-lg shadow-orange-500/20">HTML</span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-blue-600/30 text-blue-200 rounded-lg text-sm font-medium border border-blue-400/30 shadow-lg shadow-blue-500/20">CSS</span>
            <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 text-yellow-200 rounded-lg text-sm font-medium border border-yellow-400/30 shadow-lg shadow-yellow-500/20">JavaScript</span>
            <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/30 to-indigo-600/30 text-indigo-200 rounded-lg text-sm font-medium border border-indigo-400/30 shadow-lg shadow-indigo-500/20">PHP</span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/30 to-green-600/30 text-green-200 rounded-lg text-sm font-medium border border-green-400/30 shadow-lg shadow-green-500/20">MySQL</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row text-sm sm:text-base text-white/80">
          <div className="w-full sm:w-1/6 font-thin flex items-center justify-start sm:justify-between mr-2 mb-2 sm:mb-0">
            Link <span className="ml-1">:</span>{" "}
          </div>
          <a
            href="https://www.raktherm.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-light hover:underline hover:text-blue-400 ml-1 break-all"
          >
            https://www.raktherm.com/
          </a>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-2 sm:mb-3">Project Highlights</h3>
          <div className="bg-gray-50/5 rounded-lg p-3 sm:p-4">
            <p className="text-white/70 text-xs sm:text-sm italic">
              "Developed and maintained web applications for RAKtherm Ultimate Piping Solution, 
              focusing on modernizing the technology stack and improving database management. 
              Created efficient web solutions for the piping industry with emphasis on performance and reliability."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Raktherm;

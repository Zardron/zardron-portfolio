import React from "react";
import RAKONLINE1 from "../../../assets/works/rakonline/1.png";
import RAKONLINE2 from "../../../assets/works/rakonline/2.png";
import RAKONLINE3 from "../../../assets/works/rakonline/3.png";
import RAKONLINE4 from "../../../assets/works/rakonline/4.png";
import { CSS, HTML, JAVASCRIPT, MYSQL, PHP } from "../../../assets/tech-stack";

const RakOnline = () => {
  return (
    <div className="bg-gray-50/10 rounded-lg p-6 border border-gray-50/20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
          <img
            src={RAKONLINE1}
            alt="RakOnline Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white/90">RakOnline</h2>
          <p className="text-white/70">Web Developer</p>
          <p className="text-sm text-white/60">2022 - 2023</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Key Responsibilities</h3>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Developed e-commerce web applications and online platforms
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Implemented responsive design for mobile and desktop compatibility
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Created and maintained database systems for online applications
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Integrated payment gateways and shopping cart functionality
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Optimized website performance and user experience
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Project Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50/5 rounded-lg p-2">
              <img src={RAKONLINE1} alt="Project 1" className="w-full h-24 object-cover rounded" />
            </div>
            <div className="bg-gray-50/5 rounded-lg p-2">
              <img src={RAKONLINE2} alt="Project 2" className="w-full h-24 object-cover rounded" />
            </div>
            <div className="bg-gray-50/5 rounded-lg p-2">
              <img src={RAKONLINE3} alt="Project 3" className="w-full h-24 object-cover rounded" />
            </div>
            <div className="bg-gray-50/5 rounded-lg p-2">
              <img src={RAKONLINE4} alt="Project 4" className="w-full h-24 object-cover rounded" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20">
          <h3 className="text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
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

        <div className="flex text-base text-white/80">
          <div className="w-1/6 font-thin flex items-center justify-between mr-2">
            Link <span>:</span>{" "}
          </div>
          <a
            href="https://online.raktherm.com/"
            target="_blank"
            className="text-blue-500 font-light hover:underline hover:text-blue-400 ml-1"
          >
            https://online.raktherm.com/
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Project Highlights</h3>
          <div className="bg-gray-50/5 rounded-lg p-4">
            <p className="text-white/70 text-sm italic">
              "Built comprehensive e-commerce solutions and online platforms for RakOnline, 
              focusing on user experience and performance optimization. Developed secure payment 
              systems and responsive web applications that drive business growth."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RakOnline;

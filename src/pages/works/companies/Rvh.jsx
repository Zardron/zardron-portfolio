import React from "react";
import RVH1 from "../../../assets/works/rvh/1.png";
import RVH2 from "../../../assets/works/rvh/2.png";
import RVH3 from "../../../assets/works/rvh/3.png";
import RVH4 from "../../../assets/works/rvh/4.png";
import { CSS, HTML, JAVASCRIPT, MYSQL, PHP } from "../../../assets/tech-stack";

const Rvh = () => {
  return (
    <div className="bg-gray-50/10 rounded-lg p-6 border border-gray-50/20">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
          <img
            src={RVH1}
            alt="RVH Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white/90">Royal View Hotel</h2>
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
              Developed hotel booking and management web applications
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Created responsive hotel website with booking functionality
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Implemented room availability and reservation systems
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Integrated payment processing for online bookings
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              Developed admin panel for hotel management
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Project Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50/5 rounded-lg p-2">
              <img src={RVH1} alt="Project 1" className="w-full h-24 object-cover rounded" />
            </div>
            <div className="bg-gray-50/5 rounded-lg p-2">
              <img src={RVH2} alt="Project 2" className="w-full h-24 object-cover rounded" />
            </div>
            <div className="bg-gray-50/5 rounded-lg p-2">
              <img src={RVH3} alt="Project 3" className="w-full h-24 object-cover rounded" />
            </div>
            <div className="bg-gray-50/5 rounded-lg p-2">
              <img src={RVH4} alt="Project 4" className="w-full h-24 object-cover rounded" />
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
            href="https://royal-view-hotel.vercel.app/"
            target="_blank"
            className="text-blue-500 font-light hover:underline hover:text-blue-400 ml-1"
          >
            https://royal-view-hotel.vercel.app/
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">Project Highlights</h3>
          <div className="bg-gray-50/5 rounded-lg p-4">
            <p className="text-white/70 text-sm italic">
              "Built comprehensive hotel management and booking systems for Royal View Hotel, 
              featuring online reservations, room availability tracking, and payment processing. 
              Created user-friendly interfaces that enhance guest experience and streamline hotel operations."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rvh;

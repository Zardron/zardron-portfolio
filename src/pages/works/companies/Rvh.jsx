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

        <div className="flex flex-col lg:flex-row text-base text-white/80 mt-4">
          <div className="w-full lg:w-1/6 font-thin flex items-center justify-normal lg:justify-between mr-2">
            Tech Stack <span>:</span>{" "}
          </div>
          <div className="flex flex-wrap items-start gap-2 my-2 lg:my-0">
            <img
              src={HTML}
              alt="tech-stack logo"
              className="w-9 h-9 hover:scale-125 transition-all ease-in-out duration-300 bg-gray-300 p-1 rounded-md"
              title="HTML"
            />
            <img
              src={CSS}
              alt="tech-stack logo"
              className="w-9 h-9 hover:scale-125 transition-all ease-in-out duration-300 bg-gray-300 p-1 rounded-md"
              title="CSS"
            />
            <img
              src={JAVASCRIPT}
              alt="tech-stack logo"
              className="w-9 h-9 hover:scale-125 transition-all ease-in-out duration-300 bg-gray-300 p-1 rounded-md"
              title="JAVASCRIPT"
            />
            <img
              src={PHP}
              alt="tech-stack logo"
              className="w-9 h-9 hover:scale-125 transition-all ease-in-out duration-300 bg-gray-300 p-1 rounded-md"
              title="PHP"
            />
            <img
              src={MYSQL}
              alt="tech-stack logo"
              className="w-9 h-9 hover:scale-125 transition-all ease-in-out duration-300 bg-gray-300 p-1 rounded-md"
              title="MYSQL"
            />
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

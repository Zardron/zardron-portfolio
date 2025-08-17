import React from "react";
import { ABOUT, BLOGS, CONTACT, RESUME, WORKS } from "../assets/menu-icon";

const FloatingMobileMenu = ({ activePage, setActivePage, setScrollNow }) => {
  return (
    <div className="mobile-nav w-full block md:hidden fixed bottom-0 left-0 right-0 z-50 shadow-lg pb-safe">
      <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 p-3 sm:p-4 border-t border-white/5 bg-black/20 backdrop-blur-xl">
        <div
          className={`flex flex-col items-center justify-center py-3 px-3 sm:px-4 w-16 sm:w-18 border-2 ${
            activePage === "about"
              ? "bg-[#1e5799]/90 border-[#0076ff] text-white shadow-xl"
              : "bg-black/30 border-white/10 backdrop-blur-sm hover:bg-black/50"
          } rounded-xl cursor-pointer hover:border-[#0076ff]/50 hover:text-white transition-all duration-300 hover:scale-105`}
          onClick={() => {
            setActivePage("about");
            setScrollNow(true);
          }}
        >
          <img src={ABOUT} alt="About" className="w-6 h-6 sm:w-7 sm:h-7" />
          <p className="font-medium text-[9px] sm:text-[10px] text-white/90 mt-1">About</p>
        </div>

        <div
          className={`flex flex-col items-center justify-center py-3 px-3 sm:px-4 w-16 sm:w-18 border-2 ${
            activePage === "resume"
              ? "bg-[#1e5799]/90 border-[#0076ff] text-white shadow-xl"
              : "bg-black/30 border-white/10 backdrop-blur-sm hover:bg-black/50"
          } rounded-xl cursor-pointer hover:border-[#0076ff]/50 hover:text-white transition-all duration-300 hover:scale-105`}
          onClick={() => {
            setActivePage("resume");
            setScrollNow(true);
          }}
        >
          <img src={RESUME} alt="Resume" className="w-6 h-6 sm:w-7 sm:h-7" />
          <p className="font-medium text-[9px] sm:text-[10px] text-white/90 mt-1">Resume</p>
        </div>

        <div
          className={`flex flex-col items-center justify-center py-3 px-3 sm:px-4 w-16 sm:w-18 border-2 ${
            activePage === "works"
              ? "bg-[#1e5799]/90 border-[#0076ff] text-white shadow-xl"
              : "bg-black/30 border-white/10 backdrop-blur-sm hover:bg-black/50"
          } rounded-xl cursor-pointer hover:border-[#0076ff]/50 hover:text-white transition-all duration-300 hover:scale-105`}
          onClick={() => {
            setActivePage("works");
            setScrollNow(true);
          }}
        >
          <img src={WORKS} alt="Works" className="w-6 h-6 sm:w-7 sm:h-7" />
          <p className="font-medium text-[9px] sm:text-[10px] text-white/90 mt-1">Works</p>
        </div>

        <div
          className={`flex flex-col items-center justify-center py-3 px-3 sm:px-4 w-16 sm:w-18 border-2 ${
            activePage === "blogs"
              ? "bg-[#1e5799]/90 border-[#0076ff] text-white shadow-xl"
              : "bg-black/30 border-white/10 backdrop-blur-sm hover:bg-black/50"
          } rounded-xl cursor-pointer hover:border-[#0076ff]/50 hover:text-white transition-all duration-300 hover:scale-105`}
          onClick={() => {
            setActivePage("blogs");
            setScrollNow(true);
          }}
        >
          <img src={BLOGS} alt="Blogs" className="w-6 h-6 sm:w-7 sm:h-7" />
          <p className="font-medium text-[9px] sm:text-[10px] text-white/90 mt-1">Blogs</p>
        </div>

        <div
          className={`flex flex-col items-center justify-center py-3 px-3 sm:px-4 w-16 sm:w-18 border-2 ${
            activePage === "contact"
              ? "bg-[#1e5799]/90 border-[#0076ff] text-white shadow-xl"
              : "bg-black/30 border-white/10 backdrop-blur-sm hover:bg-black/50"
          } rounded-xl cursor-pointer hover:border-[#0076ff]/50 hover:text-white transition-all duration-300 hover:scale-105`}
          onClick={() => {
            setActivePage("contact");
            setScrollNow(true);
          }}
        >
          <img src={CONTACT} alt="Contact" className="w-6 h-6 sm:w-7 sm:h-7" />
          <p className="font-medium text-[9px] sm:text-[10px] text-white/90 mt-1">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default FloatingMobileMenu;

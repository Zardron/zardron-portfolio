import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { WORKS } from "../../assets/menu-icon";
import Companies from "./companies/index";
import GetScreenSize from "../../components/GetScreenSize";
import ScrollToContent from "../../components/ScrollToContent";

const index = ({ scrollNow, setScrollNow }) => {
  const screenSize = GetScreenSize();

  useEffect(() => {
    window.addEventListener("scroll", isScroll);
    return () => {
      window.removeEventListener("scroll", isScroll);
    };
  });

  const isScroll = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 150 ? "" : setScrollNow(false);
  };
  screenSize.width >= 600 ? "" : scrollNow ? ScrollToContent() : "";

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-5">
        <div className="w-full sm:w-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <TypeAnimation
              sequence={["Works."]}
              speed={0.5}
              className="dark:text-white/80"
            />
          </h1>
          <div className="border-2 w-24 sm:w-32 md:w-64 border-[#1e5799] shadow-md rounded-lg mt-2 sm:mt-3"></div>
        </div>

        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <img src={WORKS} className="w-16 sm:w-20" alt="Works" />
        </div>
      </div>

      <h1 className="text-lg sm:text-xl font-bold mb-4 mt-4 sm:mt-6 dark:text-white/80">Companies</h1>

      <Companies />
    </div>
  );
};

export default index;

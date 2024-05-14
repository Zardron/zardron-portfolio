import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { CONTACT } from "../../assets/menu-icon";
import ContactForm from "./ContactForm";
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
    <div className="p-6">
      <div className="flex items-center justify-between gap-5">
        <div>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            <TypeAnimation
              sequence={["Contact."]}
              speed={0.5}
              className="dark:text-white/80 "
            />
          </h1>
          <div className="border-2 w-32 sm:w-64 border-[#1e5799] shadow-md rounded-lg mt-3"></div>
        </div>

        <div>
          <img src={CONTACT} className="w-20" alt="" />
        </div>
      </div>

      <div className="mt-4 animate__animated animate__fadeInUp">
        <ContactForm />
      </div>
    </div>
  );
};

export default index;

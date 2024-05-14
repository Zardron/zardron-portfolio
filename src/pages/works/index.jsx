import React from "react";
import { TypeAnimation } from "react-type-animation";
import { WORKS } from "../../assets/menu-icon";
import Companies from "./companies/index";

const index = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between gap-5">
        <div>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            <TypeAnimation
              sequence={["Works."]}
              speed={0.5}
              className="dark:text-white/80 "
            />
          </h1>
          <div className="border-2 w-32 sm:w-64 border-[#1e5799] shadow-md rounded-lg mt-3"></div>
        </div>

        <div>
          <img src={WORKS} className="w-20" alt="" />
        </div>
      </div>

      <div className="animate__animated animate__fadeInUp">
        <h1 className="text-xl font-bold mb-4 dark:text-white/80">Companies</h1>

        <Companies />
      </div>
    </div>
  );
};

export default index;

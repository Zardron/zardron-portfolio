import React from "react";
import Blogs from "./Blogs";
import { TypeAnimation } from "react-type-animation";
import { BLOGS } from "../../assets/menu-icon";

const index = () => {
  return (
    <div className="p-6 mt-4">
      <div className="flex items-center justify-between gap-5">
        <div>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            <TypeAnimation
              sequence={["Blogs."]}
              speed={0.5}
              className="dark:text-white/80 "
            />
          </h1>
          <div className="border-2 w-32 sm:w-64 border-[#1e5799] shadow-md rounded-lg mt-3"></div>
        </div>

        <div>
          <img src={BLOGS} className="w-20" alt="" />
        </div>
      </div>

      <Blogs />
    </div>
  );
};

export default index;

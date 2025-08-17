import React from "react";
import { APPDEV, BACKEND, FRONTEND, UXDESIGNER } from "../../assets/icons";

const WhatIDo = () => {
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold mb-2 text-white">What I Do!</h1>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex gap-3 bg-gray-50/30 p-4 rounded-md min-h-[140px]">
          <div className="flex-shrink-0 flex items-start justify-center w-12 pt-1">
            <img src={FRONTEND} alt="Frontend Development" className="w-10 h-10 object-contain" />
          </div>
          <div className="flex flex-col justify-start gap-2 text-white/80">
            <p className="font-normal text-base xl:text-lg text-white">
              Frontend Development
            </p>
            <p className="text-xs xl:text-sm font-light leading-relaxed text-white/70">
              Creating the layout, designs and functionality of websites that
              users interact with directly.
            </p>
          </div>
        </div>

        <div className="flex gap-3 bg-gray-50/30 p-4 rounded-md min-h-[140px]">
          <div className="flex-shrink-0 flex items-start justify-center w-12 pt-1">
            <img src={BACKEND} alt="Backend Development" className="w-10 h-10 object-contain" />
          </div>
          <div className="flex flex-col justify-start gap-2 text-white/80">
            <p className="font-normal text-base xl:text-lg text-white">
              Backend Development
            </p>
            <p className="text-xs xl:text-sm font-light leading-relaxed text-white/70">
              Focus on the server-side logic and database management of web
              applications.
            </p>
          </div>
        </div>

        <div className="flex gap-3 bg-gray-50/30 p-4 rounded-md min-h-[140px]">
          <div className="flex-shrink-0 flex items-start justify-center w-12 pt-1">
            <img src={UXDESIGNER} alt="UX Design" className="w-10 h-10 object-contain" />
          </div>
          <div className="flex flex-col justify-start gap-2 text-white/80">
            <p className="font-normal text-base xl:text-lg text-white">UX Design</p>
            <p className="text-xs xl:text-sm font-light leading-relaxed text-white/70">
              Creating meaningful and enjoyable experience for users interacting
              with digital products or services.
            </p>
          </div>
        </div>

        <div className="flex gap-3 bg-gray-50/30 p-4 rounded-md min-h-[140px]">
          <div className="flex-shrink-0 flex items-start justify-center w-12 pt-1">
            <img src={APPDEV} alt="App Development" className="w-10 h-10 object-contain" />
          </div>
          <div className="flex flex-col justify-start gap-2 text-white/80">
            <p className="font-normal text-base xl:text-lg text-white">
              App Development
            </p>
            <p className="text-xs xl:text-sm font-light leading-relaxed text-white/70">
              I design, build, and deploy software app for various platforms
              such as mobile, desktops, or web browsers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

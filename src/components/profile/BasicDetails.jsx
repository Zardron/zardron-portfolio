import React from "react";
import { CAKE, EMAIL, LOCATION, PHONE } from "../../assets/icons";
import { FaMobileScreenButton } from "react-icons/fa6";

const BasicDetails = () => {
  return (
    <div className="flex flex-col mt-4 bg-gray-50/20 p-3 sm:p-4 rounded-md gap-2 sm:gap-3">
      <div className="w-full flex items-center gap-2 sm:gap-3 border-b border-b-gray-50/30 pb-2 sm:pb-3">
        <div className="flex md:hidden lg:block items-center justify-center bg-white/70 rounded-md shadow-md p-1">
          <img src={PHONE} alt="Phone" className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        <div className="w-[80%]">
          <p className="text-xs tracking-tight uppercase text-white font-medium">
            Mobile
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm font-light tracking-tight dark:text-white/80 break-all">
            +63 908 255 7805
          </p>
        </div>
      </div>

      <div className="w-full flex items-center gap-2 sm:gap-3 border-b border-b-gray-50/30 pb-2 sm:pb-3">
        <div className="flex md:hidden lg:block items-center justify-center bg-white/70 rounded-md shadow-md p-1">
          <img src={EMAIL} alt="Email" className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        <div className="flex-1">
          <p className="text-xs tracking-tight uppercase text-white font-medium">
            Email
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm font-light tracking-tight dark:text-white/80 break-all">
            zardron.pesquera1993@gmail.com
          </p>
        </div>
      </div>

      <div className="w-full flex items-center gap-2 sm:gap-3 border-b border-b-gray-50/30 pb-2 sm:pb-3">
        <div className="flex md:hidden lg:block items-center justify-center bg-white/70 rounded-md shadow-md p-1">
          <img src={LOCATION} alt="Location" className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        <div className="w-[80%]">
          <p className="text-xs tracking-tight uppercase text-white font-medium">
            Location
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm font-light tracking-tight dark:text-white/80">
            Lapu-Lapu City, Cebu
          </p>
        </div>
      </div>

      <div className="w-full flex items-center gap-2 sm:gap-3 pb-2 sm:pb-3">
        <div className="flex md:hidden lg:block items-center justify-center bg-white/70 rounded-md shadow-md p-1">
          <img src={CAKE} alt="Birthday" className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        <div className="w-[80%]">
          <p className="text-xs tracking-tight uppercase text-white font-medium">
            Birthday
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm font-light tracking-tight dark:text-white/80">
            June 18, 1993
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;

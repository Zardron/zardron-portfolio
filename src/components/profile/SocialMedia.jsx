import React from "react";
import {
  FACEBOOK,
  GITHUB,
  INSTAGRAM,
  LINKEDIN,
} from "../../assets/social-icons";

const SocialMedia = () => {
  return (
    <div className="flex items-center justify-center mt-3 mb-4 sm:mb-6">
      <div className="flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4">
        <a 
          href="https://www.facebook.com/zardron.pesquera" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-1"
        >
          <img
            src={FACEBOOK}
            alt="Facebook"
            className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer hover:scale-125 transition-all ease-linear duration-200 bg-gray-50/30 rounded-md"
          />
        </a>

        <a 
          href="https://www.instagram.com/itsmezardron/" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-1"
        >
          <img
            src={INSTAGRAM}
            alt="Instagram"
            className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer hover:scale-125 transition-all ease-linear duration-200 bg-gray-50/30 rounded-md"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/zardron-angelo-pesquera-89b8961ba/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1"
        >
          <img
            src={LINKEDIN}
            alt="LinkedIn"
            className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer hover:scale-125 transition-all ease-linear duration-200 bg-gray-50/30 rounded-md"
          />
        </a>

        <a 
          href="https://github.com/Zardron" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-1"
        >
          <img
            src={GITHUB}
            alt="GitHub"
            className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer hover:scale-125 transition-all ease-linear duration-200 bg-gray-50/30 rounded-md"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;

import React from "react";
import {
  FACEBOOK,
  GITHUB,
  INSTAGRAM,
  LINKEDIN,
} from "../../assets/social-icons";

const SocialMedia = () => {
  return (
    <div className="flex items-center justify-center mt-3 mb-6 ">
      <div className="flex items-center justify-center gap-2 px-4">
        <a href="https://www.facebook.com/zardron.pesquera" target="_blank">
          <img
            src={FACEBOOK}
            className="w-8 cursor-pointer hover:scale-125 transition-all ease-linear duration-200 bg-gray-50/30 rounded-md"
          />
        </a>

        <a href="https://www.instagram.com/itsmezardron/" target="_blank">
          <img
            src={INSTAGRAM}
            className="w-8 cursor-pointer hover:scale-125 transition-all ease-linear duration-200 bg-gray-50/30 rounded-md"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/zardron-angelo-pesquera-89b8961ba/"
          target="_blank"
        >
          <img
            src={LINKEDIN}
            className="w-8 cursor-pointer hover:scale-125 transition-all ease-linear duration-200 bg-gray-50/30 rounded-md"
          />
        </a>

        <a href="https://github.com/Zardron" target="_blank">
          <img
            src={GITHUB}
            className="w-8 cursor-pointer hover:scale-125 transition-all ease-linear duration-200 bg-gray-50/30 rounded-md"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;

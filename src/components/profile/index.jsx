import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import NameAndTitle from "./NameAndTitle";
import SocialMedia from "./SocialMedia";
import BasicDetails from "./BasicDetails";
import Button from "../Button";
import { GoDownload } from "react-icons/go";
import MyResume from "../../assets/PESQUERA_CV.pdf";

import { ClipLoader } from "react-spinners";

const index = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => {
      window.open(MyResume, "_blank");
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="w-full relative">
      <ProfilePicture />
      <div className="pt-16 sm:pt-20 p-3 sm:p-4">
        <NameAndTitle />
        <SocialMedia />
        <BasicDetails />
      </div>

      <div className="flex items-center justify-center mb-4 sm:mb-6 mt-2 px-3 sm:px-4">
        <Button
          color="bg-[#1e5799] text-white font-light border-gray-50/70 hover:bg-blue-500 gap-1"
          type="button"
          disabled={false}
          clickHandler={handleDownload}
          icon={
            loading ? (
              <ClipLoader color="#fff" size={20} className="sm:w-6 sm:h-6" />
            ) : (
              <GoDownload size={18} className="sm:w-5 sm:h-5" />
            )
          }
          name={loading ? <>Please wait . . . </> : "Download Resume"}
        />
      </div>
    </div>
  );
};

export default index;

import React from "react";

const ProfilePicture = () => {
  return (
    <div className="absolute -top-16 sm:-top-20 right-1/2 translate-x-1/2">
      <div className="dark:bg-black/80 w-32 sm:w-40 overflow-hidden border-4 border-white/80 dark:border-[#ffffff4d] rounded-md">
        <img
          src="/IMG_1444.jpg"
          alt="Profile Picture"
          className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-300"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;

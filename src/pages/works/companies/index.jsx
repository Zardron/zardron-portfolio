import React from "react";
import Hashim from "./Hashim";
import Raktherm from "./Raktherm";
import RakOnline from "./RakOnline";
import Rvh from "./Rvh";

const index = () => {
  return (
    <div>
      <Hashim />
      <div className="flex items-center justify-center my-6">
        <div className="w-3/4 h-[1px] m-0 p-0 border-t border-t-white/30"></div>
      </div>
      <Raktherm />
      <div className="flex items-center justify-center my-6">
        <div className="w-3/4 h-[1px] m-0 p-0 border-t border-t-white/30"></div>
      </div>
      <RakOnline />
      <div className="flex items-center justify-center my-6">
        <div className="w-3/4 h-[1px] m-0 p-0 border-t border-t-white/30"></div>
      </div>
      <Rvh />
    </div>
  );
};

export default index;

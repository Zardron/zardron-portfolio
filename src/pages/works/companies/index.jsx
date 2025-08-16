import React from "react";
import Raktherm from "./Raktherm";
import RakOnline from "./RakOnline";
import Rvh from "./Rvh";
import Nagarro from "./Nagarro";
import RipeConcepts from "./RipeConcepts";
import Freelance from "./Freelance";

const index = () => {
  return (
    <div>
      <Freelance />
      <div className="flex items-center justify-center my-6">
        <div className="w-3/4 h-[1px] m-0 p-0 border-t border-t-white/30"></div>
      </div>
      <Nagarro />
      <div className="flex items-center justify-center my-6">
        <div className="w-3/4 h-[1px] m-0 p-0 border-t border-t-white/30"></div>
      </div>
      <RipeConcepts />
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

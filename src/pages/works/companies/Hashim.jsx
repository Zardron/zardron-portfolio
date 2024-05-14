import React, { useState } from "react";
import Hashim1 from "../../../assets/works/hashim/1.png";
import Hashim2 from "../../../assets/works/hashim/2.png";
import Hashim3 from "../../../assets/works/hashim/3.png";
import Hashim4 from "../../../assets/works/hashim/4.png";
import {
  CSS,
  HTML,
  JAVASCRIPT,
  REACT,
  TAILWIND,
} from "../../../assets/tech-stack";

const Hashim = () => {
  const [grow1, setGrow1] = useState(false);
  const [grow2, setGrow2] = useState(false);
  const [grow3, setGrow3] = useState(false);
  const [grow4, setGrow4] = useState(false);

  const [blur1, setBlur1] = useState(true);
  const [blur2, setBlur2] = useState(true);
  const [blur3, setBlur3] = useState(true);
  const [blur4, setBlur4] = useState(true);
  return (
    <>
      <div className="w-full mt-4">
        <div className="flex items-center">
          <div
            className={`h-[150px] lg:h-[250px]  ${
              grow1 ? "w-[110vw] lg:w-[90vw]" : "w-1/4"
            } transition-all ease-linear duration-200 border-white/80 cursor-pointer border-2 rounded-tl-md rounded-bl-md`}
            onClick={() => {
              setGrow1(!grow1);
              setGrow2(false);
              setGrow3(false);
              setGrow4(false);
            }}
            onMouseEnter={() => {
              setBlur1(false);
              setBlur2(true);
              setBlur3(true);
              setBlur4(true);
            }}
            onMouseLeave={() => setBlur1(true)}
          >
            <img
              src={Hashim1}
              alt=""
              className={`h-full ${
                grow1 ? "" : `object-cover ${blur1 ? "blur-sm" : ""}`
              } rounded-tl-md rounded-bl-md`}
            />
          </div>
          <div
            className={`h-[150px] lg:h-[250px]  ${
              grow2 ? "w-[110vw] lg:w-[90vw]" : "w-1/4"
            } transition-all ease-linear duration-200 border-white/80 cursor-pointer border-2`}
            onClick={() => {
              setGrow1(false);
              setGrow2(!grow2);
              setGrow3(false);
              setGrow4(false);
            }}
            onMouseEnter={() => {
              setBlur1(true);
              setBlur2(false);
              setBlur3(true);
              setBlur4(true);
            }}
            onMouseLeave={() => setBlur2(true)}
          >
            <img
              src={Hashim2}
              alt=""
              className={`h-full ${
                grow2 ? "" : `object-cover ${blur2 ? "blur-sm" : ""}`
              }`}
            />
          </div>
          <div
            className={`h-[150px] lg:h-[250px]  ${
              grow3 ? "w-[110vw] lg:w-[90vw]" : "w-1/4"
            } transition-all ease-linear duration-200 border-white/80 cursor-pointer border-2`}
            onClick={() => {
              setGrow1(false);
              setGrow2(false);
              setGrow3(!grow3);
              setGrow4(false);
            }}
            onMouseEnter={() => {
              setBlur1(true);
              setBlur2(true);
              setBlur3(false);
              setBlur4(true);
            }}
            onMouseLeave={() => setBlur3(true)}
          >
            <img
              src={Hashim3}
              alt=""
              className={`h-full ${
                grow3 ? "" : `object-cover ${blur3 ? "blur-sm" : ""}`
              }`}
            />
          </div>
          <div
            className={`h-[150px] lg:h-[250px]  ${
              grow4 ? "w-[110vw] lg:w-[90vw]" : "w-1/4"
            } transition-all ease-linear duration-200 border-white/80 cursor-pointer border-2 rounded-tr-md rounded-br-md`}
            onClick={() => {
              setGrow1(false);
              setGrow2(false);
              setGrow3(false);
              setGrow4(!grow4);
            }}
            onMouseEnter={() => {
              setBlur1(true);
              setBlur2(true);
              setBlur3(true);
              setBlur4(false);
            }}
            onMouseLeave={() => setBlur4(true)}
          >
            <img
              src={Hashim4}
              alt=""
              className={`h-full ${
                grow4 ? "" : `object-cover ${blur4 ? "blur-sm" : ""}`
              } rounded-tr-md rounded-br-md`}
            />
          </div>
        </div>
        <h1 className="text-lg mt-2 dark:text-white/80">
          Hashim Industry Group
        </h1>
        <h1 className="text-base font-thin dark:text-white/80">
          Website for Hashim Industry Group based in Saudi Arabia.
        </h1>

        <div className="flex flex-col lg:flex-row text-base dark:text-white/80 mt-1">
          <div className="w-full lg:w-1/6 font-thin flex items-center justify-normal lg:justify-between mr-2">
            Tech Stack <span>:</span>{" "}
          </div>
          <div className="flex flex-wrap items-start gap-2 my-2 lg:my-0">
            <img
              src={HTML}
              alt="tech-stack logo"
              className="w-9 h-9 hover:scale-125 transition-all ease-in-out duration-300 bg-gray-300 p-1 rounded-md"
              title="HTML"
            />
            <img
              src={CSS}
              alt="tech-stack logo"
              className="w-9 h-9 hover:scale-125 transition-all ease-in-out duration-300 bg-gray-300 p-1 rounded-md"
              title="CSS"
            />
            <img
              src={JAVASCRIPT}
              alt="tech-stack logo"
              className="w-9 h-9 hover:scale-125 transition-all ease-in-out duration-300 bg-gray-300 p-1 rounded-md"
              title="JAVASCRIPT"
            />
            <img
              src={REACT}
              alt="tech-stack logo"
              className="w-9 h-9 hover:scale-125 transition-all ease-in-out duration-300 bg-gray-300 p-1 rounded-md"
              title="REACTJS"
            />
            <img
              src={TAILWIND}
              alt="tech-stack logo"
              className="w-9 h-9 hover:scale-125 transition-all ease-in-out duration-300 bg-gray-300 p-1 rounded-md"
              title="TAILWIND CSS"
            />
          </div>
        </div>

        <div className="flex text-base dark:text-white/80">
          <div className="w-1/6 font-thin flex items-center justify-between mr-2">
            Link <span>:</span>{" "}
          </div>
          <a
            href="https://www.hashimindustry.com/"
            target="_blank"
            className="text-blue-500 font-light hover:underline hover:text-blue-400 ml-1"
          >
            https://www.hashimindustry.com/
          </a>
        </div>
      </div>
    </>
  );
};

export default Hashim;

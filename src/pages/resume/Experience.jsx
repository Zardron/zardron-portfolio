import React, { useState } from "react";
import { EXPERIENCE } from "../../data.js";
import RAKTHERM from "../../assets/raktherm.png";
import CLOCKWORK from "../../assets/clockwork.jpg";
import ACCENTURE from "../../assets/acn.jpg";
import NINETYSIX from "../../assets/ninetysix.jpg";
import LEAR from "../../assets/lear.jpg";
import NAGARRO from "../../assets/tech-stack/nagarro.png";
import RIPECONCEPTS from "../../assets/tech-stack/ripeconcepts.png";
import ENTERPRISE from "../../assets/enterprise.png";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

// Map company slugs to their logo images
const companyLogos = {
  freelance: ENTERPRISE,
  nagarro: NAGARRO,
  ripeconcepts: RIPECONCEPTS,
  raktherm: RAKTHERM,
  clockwork: CLOCKWORK,
  acn: ACCENTURE,
  ns: NINETYSIX,
  lear: LEAR,
};

const Experience = () => {
  const [readMore, setReadMore] = useState({});

  const toggleReadMore = (slug) => {
    setReadMore(prev => {
      // If the clicked item is already open, close it
      if (prev[slug]) {
        return { [slug]: false };
      }
      // If it's closed, open it and close all others
      return { [slug]: true };
    });
  };

  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold mb-2 dark:text-white/80">Experience</h1>

      <div className="flex flex-col gap-2">
        {EXPERIENCE.map((experience, index) => (
          <div key={index} className="flex flex-row gap-2 bg-gray-50/20 p-2 rounded-md">
            <div className="w-[15%] flex flex-col items-center">
              <div className="bg-white rounded-md p-2 h-[50px] w-full xl:h-[75px] flex items-center justify-center">
                <img 
                  src={companyLogos[experience.slug]} 
                  alt={`${experience.companyName}-logo`} 
                  className="h-full rounded-md object-contain"
                />
              </div>
            </div>

            <div className="w-[85%]">
              <div className="flex items-center justify-between">
                <p className="text-sm sm:text-[11px] lg:text-sm xl:text-lg font-medium text-white/80">
                  {experience.position}
                </p>
              </div>
              <p className="text-[10px] sm:text-[11px] lg:text-xs xl:text-sm text-white/80 font-light">
                {experience.companyName}
              </p>
              <div
                className={`${
                  readMore[experience.slug] ? "max-h-96 mb-2" : "max-h-0"
                } overflow-hidden transition-all ease-linear duration-300 text-[10px] xl:text-sm text-white/80 font-light`}
              >
                <p>{experience.address}</p>
                <p>{experience.duration}</p>

                <div className="pt-4 text-[10px] xl:text-sm text-white/80 font-light">
                  <p className="font-medium">Responsibilities:</p>
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <div key={respIndex} className="flex items-start">
                      <span className="text-white/80 mr-2 flex-shrink-0">▪</span>
                      <div className="flex-1">
                        {responsibility.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p
                className="text-[10px] text-blue-300 flex flex-row items-center cursor-pointer xl:text-base"
                onClick={() => toggleReadMore(experience.slug)}
              >
                {readMore[experience.slug] ? (
                  <>
                    Read less
                    <MdKeyboardArrowUp className="mt-1" />
                  </>
                ) : (
                  <>
                    Read more
                    <MdKeyboardArrowDown className="mt-1" />
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

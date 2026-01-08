import React, { useState } from "react";
import { EXPERIENCE } from "../../data.js";
import RAKTHERM from "../../assets/raktherm.png";
import CLOCKWORK from "../../assets/clockwork.jpg";
import ACCENTURE from "../../assets/acn.jpg";
import NINETYSIX from "../../assets/ninetysix.jpg";
import LEAR from "../../assets/lear.jpg";
import NAGARRO from "../../assets/tech-stack/nagarro.png";
import RIPECONCEPTS from "../../assets/tech-stack/ripeconcepts.png";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";

// Map company slugs to their logo images
const companyLogos = {
  icered: null, // Generic logo will be rendered as icon
  nagarro: NAGARRO,
  ripeconcepts: RIPECONCEPTS,
  raktherm: RAKTHERM,
  clockwork: CLOCKWORK,
  acn: ACCENTURE,
  ninetysix: NINETYSIX,
  lear: LEAR,
};

// Map company slugs to their tech stacks
const companyTechStacks = {
  icered: ["React.js", "Next.js", "Node.js", "MongoDB", "Supabase", "TypeScript", "CSS3", "Tailwind CSS", "shadcn/ui", "styled-components"],
  nagarro: ["Frontend Development", "Backend Development", "Technical Support", "Cross-team Collaboration", "Knowledge Transfer", "Project Handoffs"],
  ripeconcepts: ["Web 3D", "Web AR", "Web VR", "Node.js", "Backend Development", "Database Management", "System Integration", "Performance Optimization", "Technical Support"],
  raktherm: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  clockwork: ["React.js", "JavaScript", "Frontend Development", "API Integration", "Performance Optimization"],
  acn: ["Enterprise Development", "Agile", "Software Engineering", "Cross-functional Collaboration", "Code Quality"],
  ninetysix: ["Web Development", "Responsive Design", "Frontend Development", "Performance Optimization"],
  lear: ["Web Development", "Intranet Systems", "Database Solutions", "System Integration", "IT Support"],
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
      <h1 className="text-xl font-bold mb-2 text-readable">Experience</h1>

      <div className="flex flex-col gap-2">
        {EXPERIENCE.map((experience, index) => (
          <div key={index} className="flex flex-row gap-2 bg-gray-50/20 p-2 rounded-md">
            <div className="w-[15%] flex flex-col items-center">
              <div className="bg-white rounded-md p-2 h-[50px] w-full xl:h-[75px] flex items-center justify-center">
                {companyLogos[experience.slug] ? (
                  <img 
                    src={companyLogos[experience.slug]} 
                    alt={`${experience.companyName}-logo`} 
                    className="h-full rounded-md object-contain"
                  />
                ) : (
                  <BuildingOfficeIcon className="w-full h-full text-gray-600" />
                )}
              </div>
            </div>

            <div className="w-[85%]">
              <div className="flex items-center justify-between">
                <p className="text-sm sm:text-[11px] lg:text-sm xl:text-lg font-medium text-readable">
                  {experience.position}
                </p>
              </div>
              <p className="text-[10px] sm:text-[11px] lg:text-xs xl:text-sm text-readable-light font-light">
                {experience.companyName}
              </p>
              <div
                className={`${
                  readMore[experience.slug] ? "max-h-[800px] mb-2" : "max-h-0"
                } overflow-hidden transition-all ease-linear duration-300 text-[10px] xl:text-sm text-readable-light font-light`}
              >
                <p>{experience.address}</p>
                <p>{experience.duration}</p>

                <div className="pt-4 text-[10px] xl:text-sm text-readable-light font-light">
                  <p className="font-medium text-readable">Responsibilities:</p>
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <div key={respIndex} className="flex items-start">
                      <span className="text-readable-light mr-2 flex-shrink-0">▪</span>
                      <div className="flex-1">
                        {responsibility.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {companyTechStacks[experience.slug] && companyTechStacks[experience.slug].length > 0 && (
                  <div className="mt-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-3 border border-blue-500/20">
                    <h3 className="text-[11px] xl:text-base font-semibold text-readable mb-2 flex items-center gap-2">
                      <span className="text-blue-400">⚡</span>
                      Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-1.5 xl:gap-2">
                      {companyTechStacks[experience.slug].map((tech, techIndex) => {
                        // Color coding based on tech type
                        let colorClass = "from-blue-500/30 to-blue-600/30 text-blue-200 border-blue-400/30 shadow-blue-500/20";
                        if (tech.includes("React") || tech.includes("Next") || tech.includes("TypeScript") || tech.includes("CSS") || tech.includes("shadcn") || tech.includes("styled")) {
                          colorClass = "from-blue-500/30 to-blue-600/30 text-blue-200 border-blue-400/30 shadow-blue-500/20";
                        } else if (tech.includes("Node") || tech.includes("MongoDB") || tech.includes("Supabase") || tech.includes("MySQL") || tech.includes("Database")) {
                          colorClass = "from-green-500/30 to-green-600/30 text-green-200 border-green-400/30 shadow-green-500/20";
                        } else if (tech.includes("HTML") || tech.includes("PHP")) {
                          colorClass = "from-orange-500/30 to-orange-600/30 text-orange-200 border-orange-400/30 shadow-orange-500/20";
                        } else if (tech.includes("JavaScript")) {
                          colorClass = "from-yellow-500/30 to-yellow-600/30 text-yellow-200 border-yellow-400/30 shadow-yellow-500/20";
                        } else if (tech.includes("Web 3D") || tech.includes("AR") || tech.includes("VR")) {
                          colorClass = "from-purple-500/30 to-purple-600/30 text-purple-200 border-purple-400/30 shadow-purple-500/20";
                        } else {
                          colorClass = "from-cyan-500/30 to-cyan-600/30 text-cyan-200 border-cyan-400/30 shadow-cyan-500/20";
                        }
                        
                        return (
                          <span
                            key={techIndex}
                            className={`px-2 py-1 xl:px-4 xl:py-2 bg-gradient-to-r ${colorClass} rounded-lg text-[9px] xl:text-sm font-medium border shadow-lg`}
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <p
                className="text-[10px] text-blue-300 flex flex-row items-center cursor-pointer xl:text-base hover:text-blue-200 transition-colors"
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

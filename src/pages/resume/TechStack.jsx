import React from "react";
import {
  ASP,
  BOOTSTRAP,
  CISCO,
  CSHARP,
  CSS,
  EXPRESSJS,
  FIGMA,
  FLASH,
  GITHUB,
  GITLAB,
  HTML,
  ILLUSTRATOR,
  INDESIGN,
  JAVASCRIPT,
  LARAVEL,
  MONGODB,
  MYSQL,
  NODEJS,
  PHOTOSHOP,
  PHP,
  REACT,
  TAILWIND,
} from "../../assets/tech-stack";

const techStackData = [
  {
    icon: ASP,
    title: "Asp.Net",
  },
  {
    icon: BOOTSTRAP,
    title: "Bootstrap",
  },
  {
    icon: CISCO,
    title: "Cisco",
  },
  {
    icon: CSHARP,
    title: "C#",
  },
  {
    icon: EXPRESSJS,
    title: "ExpressJs",
  },
  {
    icon: FLASH,
    title: "Adobe Flash",
  },
  {
    icon: FIGMA,
    title: "Figma",
  },
  {
    icon: GITHUB,
    title: "GitHub",
  },
  {
    icon: GITLAB,
    title: "GitLab",
  },
  {
    icon: HTML,
    title: "HTML",
  },
  {
    icon: ILLUSTRATOR,
    title: "Illustrator",
  },
  {
    icon: INDESIGN,
    title: "InDesign",
  },
  {
    icon: JAVASCRIPT,
    title: "JavaScript",
  },
  {
    icon: LARAVEL,
    title: "Laravel",
  },
  {
    icon: MONGODB,
    title: "MongoDB",
  },
  {
    icon: MYSQL,
    title: "MySQL",
  },
  {
    icon: NODEJS,
    title: "NodeJs",
  },
  {
    icon: PHOTOSHOP,
    title: "Photoshop",
  },
  {
    icon: PHP,
    title: "PHP",
  },
  {
    icon: REACT,
    title: "ReactJs",
  },
  {
    icon: TAILWIND,
    title: "Tailwind CSS",
  },
];

const TechStack = () => {
  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold mb-2 dark:text-white/80">
        Technology Stack
      </h1>

      <div className="flex flex-wrap items-center justify-center mt-4 gap-3">
        {techStackData.map((data) => (
          <div
            key={data.title}
            className="flex w-24 h-24 flex-col items-center justify-center bg-gray-50/30 rounded-md hover:scale-110 transition-all ease-in-out duration-300"
          >
            <img src={data.icon} alt="tech-stack logo" className="w-12 h-12" />
            <p className="text-white/80 font-light text-sm mt-2">
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

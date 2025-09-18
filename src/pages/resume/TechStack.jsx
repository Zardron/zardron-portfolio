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
  NEXTJS,
  TYPESCRIPT,
  SCSS,
  JIRA,
  DOCKER,
  GRAPHQL,
  THREEJS,
  EIGHTHWALL,
  UNREALENGINE,
} from "../../assets/tech-stack";

const techStackCategories = {
  frontend: [
    {
      icon: HTML,
      title: "HTML",
      isImage: true,
    },
    {
      icon: CSS,
      title: "CSS",
      isImage: true,
    },
    {
      icon: SCSS,
      title: "SCSS",
      isImage: true,
    },
    {
      icon: JAVASCRIPT,
      title: "JavaScript",
      isImage: true,
    },
    {
      icon: TYPESCRIPT,
      title: "TypeScript",
      isImage: true,
    },
    {
      icon: REACT,
      title: "ReactJs",
      isImage: true,
    },
    {
      icon: NEXTJS,
      title: "NextJS",
      isImage: true,
    },
    {
      icon: THREEJS,
      title: "ThreeJS",
      isImage: true,
    },
    {
      icon: EIGHTHWALL,
      title: "8thwall",
      isImage: true,
    },
    {
      icon: UNREALENGINE,
      title: "Unreal Engine",
      isImage: true,
    },
    {
      icon: TAILWIND,
      title: "Tailwind CSS",
      isImage: true,
    },
    {
      icon: BOOTSTRAP,
      title: "Bootstrap",
      isImage: true,
    },
  ],
  backend: [
    {
      icon: NODEJS,
      title: "NodeJs",
      isImage: true,
    },
    {
      icon: EXPRESSJS,
      title: "ExpressJs",
      isImage: true,
    },
    {
      icon: PHP,
      title: "PHP",
      isImage: true,
    },
    {
      icon: LARAVEL,
      title: "Laravel",
      isImage: true,
    },
    {
      icon: CSHARP,
      title: "C#",
      isImage: true,
    },
    {
      icon: ASP,
      title: "Asp.Net",
      isImage: true,
    },
    {
      icon: MYSQL,
      title: "MySQL",
      isImage: true,
    },
    {
      icon: MONGODB,
      title: "MongoDB",
      isImage: true,
    },
    {
      icon: GRAPHQL,
      title: "GraphQL",
      isImage: true,
    },
  ],
  others: [
    {
      icon: DOCKER,
      title: "Docker",
      isImage: true,
    },
    {
      icon: GITHUB,
      title: "GitHub",
      isImage: true,
    },
    {
      icon: GITLAB,
      title: "GitLab",
      isImage: true,
    },
    {
      icon: JIRA,
      title: "JIRA",
      isImage: true,
    },
    {
      icon: CISCO,
      title: "Cisco",
      isImage: true,
    },
    {
      icon: FIGMA,
      title: "Figma",
      isImage: true,
    },
    {
      icon: PHOTOSHOP,
      title: "Photoshop",
      isImage: true,
    },
    {
      icon: ILLUSTRATOR,
      title: "Illustrator",
      isImage: true,
    },
    {
      icon: INDESIGN,
      title: "InDesign",
      isImage: true,
    },
    {
      icon: FLASH,
      title: "Adobe Flash",
      isImage: true,
    },
  ],
};

const TechStack = () => {
  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold mb-2 dark:text-white/80">
        Technology Stack
      </h1>

      <div className="space-y-8">
        {/* Frontend Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white/90 border-b border-white/20 pb-2">
            Frontend Technologies
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStackCategories.frontend.map((data) => (
              <div
                key={data.title}
                className="flex w-24 h-24 flex-col items-center justify-center bg-gray-50/30 rounded-md hover:scale-110 transition-all ease-in-out duration-300"
              >
                {data.isImage ? (
                  <img src={data.icon} alt="tech-stack logo" className="w-12 h-12" />
                ) : (
                  <data.icon />
                )}
                <p className="text-white/80 font-light text-xs mt-2">
                  {data.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white/90 border-b border-white/20 pb-2">
            Backend Technologies
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStackCategories.backend.map((data) => (
              <div
                key={data.title}
                className="flex w-24 h-24 flex-col items-center justify-center bg-gray-50/30 rounded-md hover:scale-110 transition-all ease-in-out duration-300"
              >
                {data.isImage ? (
                  <img src={data.icon} alt="tech-stack logo" className="w-12 h-12" />
                ) : (
                  <data.icon />
                )}
                <p className="text-white/80 font-light text-xs mt-2">
                  {data.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Others Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white/90 border-b border-white/20 pb-2">
            Tools & Others
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStackCategories.others.map((data) => (
              <div
                key={data.title}
                className="flex w-24 h-24 flex-col items-center justify-center bg-gray-50/30 rounded-md hover:scale-110 transition-all ease-in-out duration-300"
              >
                {data.isImage ? (
                  <img src={data.icon} alt="tech-stack logo" className="w-12 h-12" />
                ) : (
                  <data.icon />
                )}
                <p className="text-white/80 font-light text-xs mt-2">
                  {data.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

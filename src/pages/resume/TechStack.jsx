import React, { useState } from "react";
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
    {
      icon: "https://raw.githubusercontent.com/TanStack/query/main/media/repo-header.png",
      title: "TanStack Query",
      isImage: true,
      isText: false,
    },
    {
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      title: "Redux",
      isImage: true,
      isText: false,
    },
    {
      icon: "https://avatars.githubusercontent.com/u/139895814?s=280&v=4",
      title: "Shadcn/ui",
      isImage: true,
      isText: false,
    },
    {
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEUAAAD////k5OQ4ODiTk5OCgoITExM0NDRgYGDq6up0dHSHh4cgICDc3Nz8/Pzh4eGioqJ7e3sLCwtDQ0MtLS329vaxsbHw8PAmJibW1tZsbGy8vLzPz89LS0uamppaWlqI3e39AAACHklEQVR4nO2a2XKjMBBFZcDsYBCLg43D//9lUhlnxoaWmYfA7Urd86imqFMgtVo0xhBCCCGEEEIIIYQQQgghq9zeA5Es/3dNc8mCY5y7b/LTZAeZxL9f4FfdfeiUtjtJHR1S3l3qPXkYLG4apPL+ebS7KJDq58PdES1lF06HQ5mCpaZOCBRgqVEKlDVUKpIjI1TKkcLOEVKqkiNlDJR6Gxyh7SeVUyqKPEdo+1TllmoLfU/KD6+O0PZbzYuJHsiRrkFK3eTIKURKmVKMVJs7vZQSs+fZX7/pllJipgq2d3pdT+VLq34Hp5Uib0pmw9c9nNZq9GZ4nO1dZTVIGVt731rncdpFyZg68SSS8e8iy6fsWnhDn+6w7O7YUMJaO7tqn/f2kjzyFVg84KdVP3rD9vXl/2Kbvnye6HjSazJffWDCeBRSApa355pOhVRzkpMnktvMSYPUcrPBS8VnfVKtcMKDSwmfoeBS4jcDsFS7nFB4KfnjClYqnJfhGqRS+ciJlZKWHloql98eVqoR1x5YKpanFFYqlZ2wUmuHUUp9U2uUumiUmjSuvlZj8gwdfQXs3udoC2GlxPYnWsrILRiwlLzRgKVy8VGhTzPCURQvJW41cCkr9PrhUqZdWuGljL9owiiQMmbem1Uh1VYKpT4rq0GhlLHHkz6pT4Ki0ydl8jj7k98TRVJfRHGdZTv+QUkIIYQQQgghhBBCCCHkN/IB9pAWqzKEFDgAAAAASUVORK5CYII=",
      title: "Radix UI",
      isImage: true,
      isText: false,
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
    {
      icon: "https://avatars.githubusercontent.com/u/54469796?v=4",
      title: "Supabase",
      isImage: true,
      isText: false,
    },
    {
      icon: "https://avatars.githubusercontent.com/u/177543?v=4",
      title: "PostgreSQL",
      isImage: true,
      isText: false,
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
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (title) => {
    setImageErrors(prev => ({ ...prev, [title]: true }));
  };

  const renderTechIcon = (data) => {
    if (data.isImage && !imageErrors[data.title]) {
      return (
        <img 
          src={data.icon} 
          alt={`${data.title} logo`} 
          className="w-12 h-12 object-contain" 
          onError={() => handleImageError(data.title)}
          loading="lazy"
        />
      );
    } else if (data.isText || imageErrors[data.title]) {
      return (
        <div className="w-12 h-12 flex items-center justify-center bg-gray-600/50 rounded-md">
          <span className="text-white text-xs font-semibold text-center leading-tight">
            {data.title.split(' ').map(word => word.substring(0, 3)).join(' ')}
          </span>
        </div>
      );
    } else {
      return <data.icon />;
    }
  };

  return (
    <div className="mt-4 mb-8 md:mb-4">
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
                {renderTechIcon(data)}
                <p className="text-white/80 font-light text-xs mt-2 text-center">
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
                {renderTechIcon(data)}
                <p className="text-white/80 font-light text-xs mt-2 text-center">
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
                {renderTechIcon(data)}
                <p className="text-white/80 font-light text-xs mt-2 text-center">
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

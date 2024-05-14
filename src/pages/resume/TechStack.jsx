import React from "react";
import {
  CSS,
  HTML,
  JAVASCRIPT,
  MYSQL,
  PHP,
  REACT,
  TAILWIND,
} from "../../assets/tech-stack";

const TechStack = () => {
  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold mb-2 dark:text-white/80">
        Technology Stack
      </h1>

      <div className="grid grid-cols-4 lg:grid-cols-8 items-center mt-4 gap-3">
        <img
          src={HTML}
          alt="tech-stack logo"
          title="HTML"
          className="bg-gray-50/30 p-2 w-20 h-20 rounded-md hover:scale-110 transition-all ease-in-out duration-300"
        />
        <img
          src={CSS}
          alt="tech-stack logo"
          title="CSS"
          className="bg-gray-50/30 p-2 w-20 h-20 rounded-md hover:scale-110 transition-all ease-in-out duration-300"
        />
        <img
          src={JAVASCRIPT}
          alt="tech-stack logo"
          title="JAVASCRIPT"
          className="bg-gray-50/30 p-2 w-20 h-20 rounded-md hover:scale-110 transition-all ease-in-out duration-300"
        />
        <img
          src={REACT}
          alt="tech-stack logo"
          title="REACTJS"
          className="bg-gray-50/30 p-2 w-20 h-20 rounded-md hover:scale-110 transition-all ease-in-out duration-300"
        />
        <img
          src={TAILWIND}
          alt="tech-stack logo"
          title="TAILWIND CSS"
          className="bg-gray-50/30 p-2 w-20 h-20 rounded-md hover:scale-110 transition-all ease-in-out duration-300"
        />
        <img
          src={PHP}
          alt="tech-stack logo"
          title="PHP"
          className="bg-gray-50/30 p-2 w-20 h-20 rounded-md hover:scale-110 transition-all ease-in-out duration-300"
        />
        <img
          src={MYSQL}
          alt="tech-stack logo"
          title="MYSQL"
          className="bg-gray-50/30 p-2 w-20 h-20 rounded-md hover:scale-110 transition-all ease-in-out duration-300"
        />
      </div>
    </div>
  );
};

export default TechStack;

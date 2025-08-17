import React from "react";

const Button = ({ color, type, clickHandler, disabled, name, icon }) => {
  return (
    <button
      className={`flex items-center justify-center p-2 sm:p-3 border-2 rounded-md shadow-md transition-all ease-linear duration-200 text-sm sm:text-base min-h-[44px] ${color}`}
      type={type}
      onClick={clickHandler}
      disabled={disabled}
    >
      {icon}
      {name}
    </button>
  );
};

export default Button;

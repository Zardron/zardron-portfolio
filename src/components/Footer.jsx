import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-2 bg-gray-50/10 text-sm text-white/80 rounded-b-md">
      &copy; {new Date().getFullYear()} All Rights Reserved by Zardron.
    </footer>
  );
};

export default Footer;

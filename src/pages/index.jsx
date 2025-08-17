import React from "react";
import LOGO from "../assets/logo2.png";
import HeroContent from "./HeroContent";
import BlackHoleMiddle from "../components/BlackHoleMiddle";
import Transition from "../components/Transition";
import { motion } from "framer-motion";
import { slideInFromTop } from "../../utils/motion";

const index = () => {
  return (
    <>
      <Transition />
      <div className="relative overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          className="absolute top-4 sm:top-8 md:top-12 lg:top-20 right-0 left-0 mx-auto lg:right-auto lg:left-auto z-30"
        >
          <motion.div
            variants={slideInFromTop}
            className="flex flex-col justify-center lg:flex-row items-center gap-2 px-4 sm:px-6 md:px-10 lg:px-20"
          >
            <img src={LOGO} alt="" className="w-12 sm:w-14 md:w-16 lg:w-24 z-30" />
            <div className="text-center lg:text-left">
              <p
                className="relative name-logo z-10 uppercase text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold 
                  bg-gradient-to-r from-purple-500 via-[#33bfdf] to-blue-500 
                  text-transparent bg-clip-text animate-gradient [text-shadow:_2px_3px_0_rgb(0_0_0_/20%)]"
              >
                Zardron Pesquera
              </p>
              <p className="relative z-10 text-[10px] sm:text-xs md:text-sm lg:text-sm font-bold tracking-[.25em] sm:tracking-[.34em] md:tracking-[.45em] lg:tracking-[.59em] pb-1 lg:p-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 uppercase">
                I turn coffee into code.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <BlackHoleMiddle />
        <HeroContent />
      </div>
    </>
  );
};

export default index;

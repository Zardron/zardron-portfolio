import React, { useState } from "react";
import { motion } from "framer-motion";

// Pages
import About from "../about/index";
import Resume from "../resume/index";
import Works from "../works/index";
import Blogs from "../blogs/index";
import Contact from "../contact/index";

// Components
import Menu from "../../components/Menu";
import Transition from "../../components/Transition";
import Footer from "../../components/Footer";
import Profile from "../../components/profile/index";
import BlackHole from "../../components/BlackHole";
import FloatingMobileMenu from "../../components/FloatingMobileMenu";

// Assets
import LOGO from "../../assets/logo2.png";
import { AiOutlineMenu } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { TbBrandBlogger } from "react-icons/tb";
import { SlBriefcase } from "react-icons/sl";
import { FiFileText } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import GetScreenSize from "../../components/GetScreenSize";
import { BiExit } from "react-icons/bi";
import { Link } from "react-router-dom";

const index = () => {
  const [activePage, setActivePage] = useState("about");
  const [grow, setGrow] = useState(false);
  const [scrollNow, setScrollNow] = useState(false);
  const screenSize = GetScreenSize();

  const pageProps = { activePage, setActivePage, scrollNow, setScrollNow };

  const renderPage = (page) => {
    switch (page) {
      case "about":
        return <About {...pageProps} />;
      case "resume":
        return <Resume {...pageProps} />;
      case "works":
        return <Works {...pageProps} />;
      case "blogs":
        return <Blogs {...pageProps} />;
      case "contact":
        return <Contact {...pageProps} />;
    }
  };

  return (
    <>
      <Transition />
      <BlackHole />
      <div
        className={`relative h-full ${
          screenSize.width >= 600
            ? "pt-[200px] sm:pt-[240px] md:pt-[280px] pb-28"
            : activePage === "about"
            ? "pt-[200px] sm:pt-[240px] md:pt-[280px] pb-36 md:pb-28"
            : "pt-[160px] sm:pt-[200px] pb-36 md:pb-28"
        } z-[30] px-4 sm:px-6 md:px-10 lg:px-20 overflow-x-hidden`}
      >
        <div className="absolute top-8 sm:top-12 md:top-16 lg:top-[210px] xl:top-20 right-0 left-0 mx-auto xl:right-auto xl:left-auto">
          <div className="flex flex-col justify-center lg:flex-row items-center gap-2">
            <img src={LOGO} alt="" className="w-12 sm:w-14 md:w-16 lg:w-24 z-30" />
            <div className="text-center lg:text-left">
              <p
                className="relative name-logo z-10 uppercase text-lg sm:text-xl md:text-2xl 2xl:text-4xl font-bold 
                  bg-gradient-to-r from-purple-500 via-[#33bfdf] to-blue-500 
                  text-transparent bg-clip-text animate-gradient [text-shadow:_2px_3px_0_rgb(0_0_0_/20%)]"
              >
                Zardron Pesquera
              </p>
              <p className="relative z-10 text-[8px] sm:text-[10px] tracking-[.40em] sm:tracking-[.52em] 2xl:text-[14px] 2xl:tracking-[.59em] font-bold pb-1 lg:p-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 uppercase">
                I turn coffee into code.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 lg:top-20 lg:right-20">
          <Link to="/">
            <BiExit color="#cecdd1" size={32} className="sm:w-10 sm:h-10 cursor-pointer" />
          </Link>
        </div>

        <div className="flex items-center justify-end mb-4">
          <div className="hidden md:flex xl:hidden flex-row items-center gap-2">
            <div
              className={`py-2 menu ${
                grow ? "md:w-[280px] lg:w-[400px]" : "w-0"
              } overflow-hidden rounded-md bg-white/50 ease-linear z-10`}
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <div
                  className={`flex flex-col items-center justify-center py-2 px-3 md:w-12 lg:w-16 ${
                    activePage === "about"
                      ? "bg-[#1e5799] text-white"
                      : "bg-gray-50/20"
                  }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
                  onClick={() => setActivePage("about")}
                >
                  <IoPersonOutline className="md:text-sm lg:text-xl" />
                  <p className="font-medium text-xs lg:text-sm dark:text-white/80">
                    About
                  </p>
                </div>

                <div
                  className={`flex flex-col items-center justify-center py-2 px-3 md:w-12 lg:w-16 ${
                    activePage === "resume"
                      ? "bg-[#1e5799] text-white"
                      : "bg-gray-50/20"
                  }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
                  onClick={() => setActivePage("resume")}
                >
                  <FiFileText className="md:text-sm lg:text-xl" />
                  <p className="font-medium text-xs lg:text-sm dark:text-white/80">
                    Resume
                  </p>
                </div>

                <div
                  className={`flex flex-col items-center justify-center py-2 px-3 md:w-12 lg:w-16 ${
                    activePage === "works"
                      ? "bg-[#1e5799] text-white"
                      : "bg-gray-50/20"
                  }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
                  onClick={() => setActivePage("works")}
                >
                  <SlBriefcase className="md:text-sm lg:text-xl" />
                  <p className="font-medium text-xs lg:text-sm dark:text-white/80">
                    Works
                  </p>
                </div>

                <div
                  className={`flex flex-col items-center justify-center py-2 px-3 md:w-12 lg:w-16 ${
                    activePage === "blogs"
                      ? "bg-[#1e5799] text-white"
                      : "bg-gray-50/20"
                  }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
                  onClick={() => setActivePage("blogs")}
                >
                  <TbBrandBlogger className="md:text-sm lg:text-xl" />
                  <p className="font-medium text-xs lg:text-sm dark:text-white/80">
                    Blogs
                  </p>
                </div>

                <div
                  className={`flex flex-col items-center justify-center py-2 px-3 md:w-12 lg:w-16 ${
                    activePage === "contact"
                      ? "bg-[#1e5799] text-white"
                      : "bg-gray-50/20"
                  }  rounded-md cursor-pointer hover:bg-[#1e5799] hover:text-white`}
                  onClick={() => setActivePage("contact")}
                >
                  <TiContacts className="md:text-sm lg:text-xl" />
                  <p className="font-medium text-xs lg:text-sm dark:text-white/80">
                    Contact
                  </p>
                </div>
              </div>
            </div>
            <button
              className="p-2 bg-white/50 rounded-md h-full z-10"
              onClick={() => setGrow(!grow)}
            >
              <AiOutlineMenu size={24} className="md:w-6 md:h-6 lg:w-8 lg:h-8" color="#1e5799" />
            </button>
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-30 w-full flex flex-col lg:flex-row justify-between gap-4 sm:gap-6"
        >
          {screenSize.width <= 600 && activePage === "about" && (
            <motion.div className="glass-container-light w-full lg:w-[40%] 2xl:w-[30%] h-full rounded-md">
              <Profile />
            </motion.div>
          )}

          {screenSize.width >= 600 && (
            <motion.div className="glass-container-light w-full lg:w-[40%] 2xl:w-[30%] h-full rounded-md">
              <Profile />
            </motion.div>
          )}

          <motion.div className="glass-container-light w-full lg:w-[60%] 2xl:w-[70%] h-full rounded-md overflow-hidden">
            {renderPage(activePage)}
            <Footer />
          </motion.div>
          <motion.div className="glass-container-light hidden xl:block w-[10%] h-full rounded-md">
            <Menu {...pageProps} />
          </motion.div>
        </motion.div>

        <FloatingMobileMenu {...pageProps} />
      </div>
    </>
  );
};

export default index;

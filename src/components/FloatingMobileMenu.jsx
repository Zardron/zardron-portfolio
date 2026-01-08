import React, { useState, useEffect, useRef } from "react";
import { ABOUT, BLOGS, CONTACT, RESUME, WORKS } from "../assets/menu-icon";
import { MdKeyboardArrowUp } from "react-icons/md";

const FloatingMobileMenu = ({ activePage, setActivePage, setScrollNow }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const getScrollPosition = () => {
      return Math.max(
        window.scrollY || 0,
        window.pageYOffset || 0,
        document.documentElement.scrollTop || 0,
        document.body.scrollTop || 0
      );
    };

    const handleScroll = () => {
      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Debounce scroll detection
      scrollTimeout.current = setTimeout(() => {
        const currentScrollY = getScrollPosition();
        const scrollDelta = currentScrollY - lastScrollY.current;
        
        // Only collapse/expand if scrolled more than 20px from top
        if (currentScrollY > 20) {
          if (scrollDelta > 10) {
            // Scrolling down - collapse menu
            setIsCollapsed(true);
          }
          // Don't expand menu when scrolling up - keep it collapsed
        } else {
          // Near top - always show menu
          setIsCollapsed(false);
        }
        
        lastScrollY.current = currentScrollY;
      }, 50); // 50ms debounce
    };

    // Set initial scroll position
    lastScrollY.current = getScrollPosition();

    // Listen to scroll events
    const scrollHandler = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    window.addEventListener("touchmove", scrollHandler, { passive: true });
    window.addEventListener("wheel", scrollHandler, { passive: true });
    
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("touchmove", scrollHandler);
      window.removeEventListener("wheel", scrollHandler);
    };
  }, []);

  const handleExpand = () => {
    // Smooth scroll to top first
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Wait for scroll to complete, then expand menu
    const checkScroll = setInterval(() => {
      if (window.scrollY === 0 || window.pageYOffset === 0) {
        clearInterval(checkScroll);
        setIsCollapsed(false);
      }
    }, 50);
    
    // Fallback: expand menu after max scroll duration (1 second)
    setTimeout(() => {
      clearInterval(checkScroll);
      setIsCollapsed(false);
    }, 1000);
  };

  return (
    <>
      {/* Manual expand button - shows when menu is collapsed */}
      {isCollapsed && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 block md:hidden">
          <button
            onClick={handleExpand}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#1e5799] to-[#0076ff] border-2 border-[#0076ff]/50 text-white shadow-2xl hover:bg-gradient-to-br hover:from-[#0076ff] hover:to-[#1e5799] hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-[#0076ff]/50"
            aria-label="Expand menu"
          >
            <MdKeyboardArrowUp size={20} className="animate-bounce" />
          </button>
        </div>
      )}

      {/* Main menu */}
      <div 
        className={`mobile-nav w-full block md:hidden fixed bottom-0 left-0 right-0 z-50 shadow-lg pb-safe transition-all duration-300 ease-in-out ${
          isCollapsed ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
      {/* Full menu */}
      <div 
        className="flex flex-row items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 border-t border-white/5 bg-gradient-to-t from-black/40 via-black/30 to-transparent backdrop-blur-xl"
      >
          <div
            className={`flex flex-col items-center justify-center py-2.5 px-2.5 sm:py-3 sm:px-3 w-14 sm:w-16 border-2 ${
              activePage === "about"
                ? "bg-gradient-to-br from-[#1e5799] to-[#0076ff] border-[#0076ff] text-white shadow-lg shadow-[#0076ff]/30"
                : "bg-black/40 border-white/20 backdrop-blur-sm hover:bg-black/60 hover:border-[#0076ff]/50"
            } rounded-xl cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95`}
            onClick={() => {
              setActivePage("about");
              setScrollNow(true);
            }}
          >
            <img src={ABOUT} alt="About" className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" />
            <p className={`font-medium text-[8px] sm:text-[9px] mt-1 transition-colors duration-300 ${
              activePage === "about" ? "text-white" : "text-white/80"
            }`}>About</p>
          </div>

          <div
            className={`flex flex-col items-center justify-center py-2.5 px-2.5 sm:py-3 sm:px-3 w-14 sm:w-16 border-2 ${
              activePage === "resume"
                ? "bg-gradient-to-br from-[#1e5799] to-[#0076ff] border-[#0076ff] text-white shadow-lg shadow-[#0076ff]/30"
                : "bg-black/40 border-white/20 backdrop-blur-sm hover:bg-black/60 hover:border-[#0076ff]/50"
            } rounded-xl cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95`}
            onClick={() => {
              setActivePage("resume");
              setScrollNow(true);
            }}
          >
            <img src={RESUME} alt="Resume" className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" />
            <p className={`font-medium text-[8px] sm:text-[9px] mt-1 transition-colors duration-300 ${
              activePage === "resume" ? "text-white" : "text-white/80"
            }`}>Resume</p>
          </div>

          <div
            className={`flex flex-col items-center justify-center py-2.5 px-2.5 sm:py-3 sm:px-3 w-14 sm:w-16 border-2 ${
              activePage === "works"
                ? "bg-gradient-to-br from-[#1e5799] to-[#0076ff] border-[#0076ff] text-white shadow-lg shadow-[#0076ff]/30"
                : "bg-black/40 border-white/20 backdrop-blur-sm hover:bg-black/60 hover:border-[#0076ff]/50"
            } rounded-xl cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95`}
            onClick={() => {
              setActivePage("works");
              setScrollNow(true);
            }}
          >
            <img src={WORKS} alt="Works" className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" />
            <p className={`font-medium text-[8px] sm:text-[9px] mt-1 transition-colors duration-300 ${
              activePage === "works" ? "text-white" : "text-white/80"
            }`}>Works</p>
          </div>

          <div
            className={`flex flex-col items-center justify-center py-2.5 px-2.5 sm:py-3 sm:px-3 w-14 sm:w-16 border-2 ${
              activePage === "blogs"
                ? "bg-gradient-to-br from-[#1e5799] to-[#0076ff] border-[#0076ff] text-white shadow-lg shadow-[#0076ff]/30"
                : "bg-black/40 border-white/20 backdrop-blur-sm hover:bg-black/60 hover:border-[#0076ff]/50"
            } rounded-xl cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95`}
            onClick={() => {
              setActivePage("blogs");
              setScrollNow(true);
            }}
          >
            <img src={BLOGS} alt="Blogs" className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" />
            <p className={`font-medium text-[8px] sm:text-[9px] mt-1 transition-colors duration-300 ${
              activePage === "blogs" ? "text-white" : "text-white/80"
            }`}>Blogs</p>
          </div>

          <div
            className={`flex flex-col items-center justify-center py-2.5 px-2.5 sm:py-3 sm:px-3 w-14 sm:w-16 border-2 ${
              activePage === "contact"
                ? "bg-gradient-to-br from-[#1e5799] to-[#0076ff] border-[#0076ff] text-white shadow-lg shadow-[#0076ff]/30"
                : "bg-black/40 border-white/20 backdrop-blur-sm hover:bg-black/60 hover:border-[#0076ff]/50"
            } rounded-xl cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95`}
            onClick={() => {
              setActivePage("contact");
              setScrollNow(true);
            }}
          >
            <img src={CONTACT} alt="Contact" className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" />
            <p className={`font-medium text-[8px] sm:text-[9px] mt-1 transition-colors duration-300 ${
              activePage === "contact" ? "text-white" : "text-white/80"
            }`}>Contact</p>
          </div>
      </div>
    </div>
    </>
  );
};

export default FloatingMobileMenu;

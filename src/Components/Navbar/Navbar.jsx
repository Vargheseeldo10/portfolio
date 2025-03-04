import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import resume from "../../assets/resume.pdf";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#About" },
    { name: "Experience", href: "#Experience" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Footer" }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = "Varghese_Eldo_Resume.pdf";
    link.click();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0e19] flex flex-wrap justify-between items-center text-white px-6 py-4 md:px-20 md:py-6 shadow-md">
      
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      
      <ul className="hidden md:flex items-center gap-6 font-semibold">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              className="text-md transition-all duration-300 hover:text-[#465697] hover:scale-105"
            >
              {link.name}
            </a>
          </li>
        ))}
        <button 
          onClick={handleDownloadResume}
          className="ml-4 px-4 py-2 bg-[#465697] rounded-full hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
        >
          Download Resume
        </button>
      </ul>

      
      <div className="md:hidden">
        {isMenuOpen ? (
          <RiCloseLine
            size={30}
            className="absolute right-6 top-4 z-50 transition-all duration-300"
            onClick={toggleMenu}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="absolute right-6 top-4 z-50 transition-all duration-300"
            onClick={toggleMenu}
          />
        )}
      </div>

      
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40"
          onClick={closeMenu}
        >
          <ul 
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] bg-[#0c0e19] rounded-xl shadow-xl py-6 space-y-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block py-3 hover:bg-[#465697]/20 transition-all duration-300"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button 
                onClick={handleDownloadResume}
                className="w-[calc(100%-2rem)] mx-4 px-4 py-3 bg-[#465697] rounded-full hover:bg-opacity-90 transition-all duration-300"
              >
                Download Resume
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
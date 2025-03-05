import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const contactLinks = [
    {
      icon: <MdOutlineEmail size={24} className="text-white" />,
      text: "vargheseeldo1010@gmail.com",
      href: `mailto:vargheseeldo1010@gmail.com`
    },
    {
      icon: <CiLinkedin size={24} className="text-white" />,
      text: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/varghese-eldo-3393b8270"
    },
    {
      icon: <FaGithub size={24} className="text-white" />,
      text: "GitHub Profile",
      href: "https://github.com/Vargheseeldo10"
    }
  ];

  const handleLinkClick = (href) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer 
      id="Footer"
      className="bg-[#465697] text-white py-8 px-4 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0">
          {/* Contact Header - Left Side */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact</h1>
            <p className="text-sm md:text-lg font-light opacity-80">
              Feel free to reach out!
            </p>
          </div>

          {/* Contact Links - Right Side */}
          <div className="w-full md:w-auto">
            {/* Desktop View */}
            <ul className="hidden md:block space-y-4">
              {contactLinks.map((link, index) => (
                <li 
                  key={index}
                  className="flex items-center space-x-3 group cursor-pointer"
                  onClick={() => handleLinkClick(link.href)}
                >
                  <div className="p-2 bg-white/10 rounded-full transition-all duration-300 group-hover:bg-white/20">
                    {link.icon}
                  </div>
                  <span 
                    className="text-sm md:text-base hover:underline transition-colors duration-300 group-hover:text-opacity-80"
                  >
                    {link.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Mobile View */}
            <div className="flex md:hidden justify-center space-x-4">
              {contactLinks.map((link, index) => (
                <div 
                  key={index}
                  className="p-3 bg-white/10 rounded-full cursor-pointer transition-all duration-300 hover:bg-white/20"
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 text-center text-sm md:text-base border-t border-white/20 pt-6">
          <p>&copy; 2024 Varghese Eldo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

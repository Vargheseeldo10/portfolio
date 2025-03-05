import React from "react";

const ProjectCard = ({ 
  title, 
  main, 
  bannerImage, 
  demoLink, 
  sourceCodeLink 
}) => {
  const handleExternalDemo = () => {
    if (demoLink) {
      window.open(demoLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleExternalSourceCode = () => {
    if (sourceCodeLink) {
      window.open(sourceCodeLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="p-3 md:p-6 flex flex-col w-full sm:w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl h-full">
      <img 
        className="p-4 w-full h-48 object-cover rounded-lg" 
        src={bannerImage} 
        alt={title} 
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 flex-grow"> {/* Flex-grow for consistent height */}
        {main}
      </p>
      <div className="mt-auto p-2 md:p-4 flex gap-2 md:gap-4"> {/* Buttons at the bottom */}
        <button 
          onClick={handleExternalDemo}
          className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Demo
        </button>
        <button 
          onClick={handleExternalSourceCode}
          className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

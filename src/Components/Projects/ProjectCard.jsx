import React from "react";

const ProjectCard = ({ 
  title, 
  main, 
  bannerImage, 
  demoLink, 
  sourceCodeLink 
}) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-full sm:w-full md:w-[30%] bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl h-full max-w-[700px]">
      <img 
        className="p-4 w-full h-64 object-cover rounded-lg" 
        src={bannerImage} 
        alt={title} 
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 flex-grow">
        {main}
      </p>
      <div className="mt-auto p-2 md:p-4 flex gap-2 md:gap-4">
        <a 
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Demo
        </a>
        <a 
          href={sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

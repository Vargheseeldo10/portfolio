import React from "react";
import avatarImg from "../../assets/profile.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-6 md:p-20">
      <div className="md:w-2/4 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-2xl md:text-6xl font-bold leading-normal tracking-tighter flex flex-col items-center md:items-start">
          <span className="block md:inline text-center md:text-left w-full">
            <TextChange 
              className="inline-block text-center md:text-left"
              style={{
                display: 'inline-block',
                textAlign: 'center',
                width: '100%'
              }}
            />
          </span>
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4">
          Computer Science Engineer passionate about building innovative
          projects using modern technologies. Strong foundation in software
          development with a continuous learning mindset. Committed to
          contributing to impactful projects and staying ahead of industry
          trends.
        </p>
        <a 
          href="#Footer"
          className="inline-block mt-5 md:mt-10 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </a>
      </div>
      <div className="w-full md:w-1/2 md:max-w-md mb-6 md:mb-0 flex justify-center">
        <img 
          className="w-1/2 md:w-full h-auto object-contain rounded-full" 
          src={avatarImg} 
          alt="Profile" 
        />
      </div>
    </div>
  );
};

export default Home;
import React from "react";
import AboutImg from "../../assets/Coding.gif"; 
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          
          <div className="md:mr-20"> 
            <img
              className="md:h-96 w-auto rounded-lg shadow-lg" 
              src={AboutImg}
              alt="About img"
            />
          </div>

          <ul>
           
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Software Engineer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a passionate <strong>Software Engineer</strong> with a strong foundation in both frontend and backend development. I specialize in building modern, scalable, and user-friendly applications using technologies like <strong>React.js</strong>, <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>MySQL</strong>. My projects, such as <strong>FirstAid.AI</strong> and <strong>Instagram-Clone</strong>, reflect my ability to integrate advanced technologies and deliver practical solutions.
                </p>
              </span>
            </div>

           
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Background
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I come from <strong>Gudalur, The Nilgiris</strong>, a beautiful region known for its serene landscapes. Growing up in this environment has instilled in me a love for problem-solving and creativity, which I bring to my work as a software engineer.
                </p>
              </span>
            </div>


            
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Tools & Technologies
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am proficient in tools like <strong>Git</strong>, <strong>GitHub</strong>, <strong>Maven</strong>, and <strong>VS Code</strong>. My experience spans across frontend, backend, and database development, making me a well-rounded software engineer.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
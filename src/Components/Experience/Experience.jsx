import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiMysql, SiFirebase, SiGit, SiGithub, SiHibernate, SiVisualstudiocode, SiApache } from "react-icons/si";

const Experience = () => {
  const skills = [
    { icon: FaHtml5, color: "#E34F26", name: "HTML" },
    { icon: FaCss3, color: "#1572B6", name: "CSS" },
    { icon: FaReact, color: "#61DAFB", name: "React.js" },
    { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { icon: FaJava, color: "#007396", name: "Java" },
    { icon: SiMysql, color: "#4479A1", name: "MySQL" },
    { icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
    { icon: SiGit, color: "#F05032", name: "Git" },
    { 
      icon: SiGithub, 
      color: "white", 
      name: "GitHub",
      className: "bg-black rounded-full p-1",
      link: "https://github.com/Vargheseeldo10" 
    },
    { icon: SiApache, color: "#D22128", name: "Maven" }, 
    { icon: SiHibernate, color: "#59666C", name: "Hibernate" },
    { icon: SiVisualstudiocode, color: "#007ACC", name: "VS Code" }
  ];

  const experiences = [
    {
      company: "Main Flow Services and Technologies Pvt. Ltd.",
      role: "MERN Stack Intern",
      period: "07/2024 to 09/2024",
      details: [
        "Collaborated with development team to design, build, and maintain web applications using MERN stack",
        "Contributed to front-end and back-end development, database management, and debugging"
      ]
    },
    {
      company: "Acmegrade Pvt. Ltd.",
      role: "Web Development Intern",
      period: "01/2024 to 03/2024",
      details: [
        "Assisted in creating and maintaining websites",
        "Implemented new features and troubleshot issues to improve user experience",
        "Worked closely with development team to learn new technologies"
      ]
    }
  ];

  return (
    <div id="Experience" className="px-6 py-12 md:px-24 md:py-16">
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-8 md:mb-12">Experience</h1>
      
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
        {/* Skills Section */}
        <div className="w-full lg:w-2/5">
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative p-3 bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer ${skill.className || ''}`}
                title={skill.name}
              >
                <skill.icon 
                  color={skill.color} 
                  className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110" 
                />
                <span className="absolute bottom-full mb-2 hidden group-hover:block bg-zinc-800 text-white text-xs px-2 py-1 rounded-md">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full lg:w-3/5 space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative bg-zinc-900 bg-opacity-70 rounded-xl p-6 md:p-8 transition-all duration-300 hover:bg-opacity-80 border border-zinc-800 hover:border-zinc-600"
            >
              <div className="md:absolute top-6 right-6 text-sm text-zinc-400 mb-2 md:mb-0">
                {exp.period}
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {exp.role}
              </h2>
              <h3 className="text-md md:text-lg text-zinc-300 mb-4">
                {exp.company}
              </h3>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

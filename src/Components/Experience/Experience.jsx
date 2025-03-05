import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiRedis, SiMysql, SiSpringboot, SiFirebase, SiGit, SiGithub, SiHibernate, SiVisualstudiocode, SiApache } from "react-icons/si";

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
      color: "#181717", 
      name: "GitHub",
      className: "github-skill", 
      link: "https://github.com/yourusername" 
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
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        {/* Skills Section */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:w-2/5 md:p-12 py-10">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl tooltip"
              title={skill.name}
            >
              <skill.icon color={skill.color} size={50} />
            </span>
          ))}
        </div>

        {/* Experience Section */}
        <div className="md:w-1/2">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center"
            >
              <span className="text-white">
                <h2 className="text-xl font-semibold leading-tight">{exp.role}</h2>
                <h3 className="text-md text-gray-300 mb-2">{exp.company}</h3>
                <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                <ul className="text-sm pl-4 list-disc">
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="mb-1">{detail}</li>
                  ))}
                </ul>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

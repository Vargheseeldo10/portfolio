import React from "react";
import ProjectCard from "./ProjectCard";
import bannerImg1 from "../../assets/project-1.jpeg";
import bannerImg2 from "../../assets/project-2.jpeg";
import bannerImg3 from "../../assets/project-3.jpeg";

const Projects = () => {
  const projectsData = [
    {
      title: "FirstAid.AI",
      main: "FirstAid.AI, an innovative web application that leverages artificial intelligence to provide real-time first aid guidance and emergency assistance with 85% accuracy.",
      bannerImage: bannerImg1,
      demoLink: "https://firstaid-ai-4a1fd.web.app/",
      sourceCodeLink: "https://github.com/Vargheseeldo10/FirstAid.AI"
    },
    {
      title: "Instagram Clone",
      main: "An Instagram-like social media app with responsive UI using HTML, CSS, and JavaScript.Designed with a mobile-first approach, ensuring a smooth experience across all devices.",
      bannerImage: bannerImg2,
      demoLink: "https://instaclone0varghese.netlify.app/",
      sourceCodeLink: "https://github.com/Vargheseeldo10/instagram-clone"
    },
    {
      title: "Interior-V",
      main: "Transform your living spaces with Interior-V, a sleek and modern interior design website crafted using HTML, CSS, and JavaScript. Designed for a seamless user experience.",
      bannerImage: bannerImg3,
      demoLink: "https://interior-v.netlify.app/",
      sourceCodeLink: "https://github.com/Vargheseeldo10/Interior-v"
    }
  ];

  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-col md:flex-row items-center gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            main={project.main}
            bannerImage={project.bannerImage}
            demoLink={project.demoLink}
            sourceCodeLink={project.sourceCodeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import { motion as m } from "framer-motion";

import { styles } from "../../utilities/style";
import { projects } from "../../utilities/data";
import { fadeInVariant, titleVariant } from "../../utilities/motion-framer";
import ProjectCard from "./cards/ProjectCard";

const Projects = () => {
  return (
    <m.section
    id="projects"
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-20 flex-[0.75] bg-[#292d33] p-8 rounded-2xl`}
    >
      <m.div variants={titleVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </m.div>

      <div className='w-full flex'>
        <m.p
          variants={fadeInVariant("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The projects I&lsquo;ve worked on are a reflection of my skills and experience, 
          and I&lsquo;d like to share them with you. Each project is described briefly and 
          includes links to the code repositories and live demos, giving you a comprehensive 
          view of what I&lsquo;ve accomplished. Through these projects, I&lsquo;ve had the opportunity 
          to tackle complex problems and work with a variety of technologies, all while 
          skillfully managing each project from start to finish.
        </m.p>
      </div>

      <div className='mt-20 flex justify-center flex-wrap gap-7'>
        {projects.map((project: any, index: number) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </m.section>
  );
};

export default Projects;
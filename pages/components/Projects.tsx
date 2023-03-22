import React from "react";
import { motion as m } from "framer-motion";

import { styles } from "../style";
import { projects } from "../utilities/data";
import { fadeInVariant, titleVariant } from "../utilities/motion-framer";
import ProjectCard from "./cards/ProjectCard";

const Projects = () => {
  return (
    <m.section
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
          The projects I have worked on are a demonstration of my abilities and experience. 
          Each project is described briefly and includes links to both the code repositories and live demos. 
          This collection of projects is a testament to my aptitude in tackling intricate problems, 
          working with a variety of technologies, and skillfully managing projects.
        </m.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project: any, index: number) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </m.section>
  );
};

export default Projects;
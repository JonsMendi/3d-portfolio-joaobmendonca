import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { projects } from "../utilities/data";
import { fadeInVariant, titleVariant, containerVariants } from "../utilities/motion-framer";
import Image from "next/image";

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: [];
  image: string;
  source_code_link: string;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {

  return (
    <motion.div variants={fadeInVariant("up", "spring", index * 0.3, 0.75)}>
      <motion.div
        variants={containerVariants}
        whileHover="hover"
        onClick={() => window.open(source_code_link, "_blank")}
        className="cursor-pointer "
      >
        <div
        className='bg-primary p-5 sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'
              >
          <Image
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-tertiary font-bold text-[24px]'>{name}</h3>
          <p className='mt-2  text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag: any) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
      </motion.div>
      
    </motion.div>
  );
};

const Projects = () => {

  

  return (
    <motion.section
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-20 flex-[0.75] bg-[#292d33] p-8 rounded-2xl`}
    >
      <motion.div variants={titleVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeInVariant("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The projects I have worked on are a demonstration of my abilities and experience. 
          Each project is described briefly and includes links to both the code repositories and live demos. 
          This collection of projects is a testament to my aptitude in tackling intricate problems, 
          working with a variety of technologies, and skillfully managing projects.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project: any, index: number) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </motion.section>
  );
};

export default Projects;
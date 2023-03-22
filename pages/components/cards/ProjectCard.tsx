import React from "react";
import { motion as m } from "framer-motion";


import { fadeInVariant, titleVariant, containerVariants } from "../..//utilities/motion-framer";
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
    <m.div variants={fadeInVariant("up", "spring", index * 0.3, 0.75)}>
      <m.div
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
      </m.div>
      
    </m.div>
  );
};

export default ProjectCard;

import { motion as m } from "framer-motion";
import { styles } from "../style";
import { titleVariant } from "../utilities/motion-framer";

const About = () => {
  return (
    <m.section
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-20`}>
      <div className={` inset-0 top-[100px]  max-w-8xl mx-auto ${styles.paddingX} items-start gap-5`}>
        <m.div variants={titleVariant()} className="flex flex-col items-start" >
          <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>About me.</h2>
        </m.div>
        <m.div
          variants={titleVariant()}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          <span className='text-tertiary'>Experience: </span>
          I&apos;m a Full-stack Web Developer with background in Architecture, originally from the Azores, 
          Portugal and now living in Berlin. My skills include Typescript, Javascript, 
          and frameworks like Angular and React. I&apos;m also experienced in CSS/SCSS, Three.js, 
          and Leaflet.js, and have a passion for design. Let&apos;s create something beautiful together!
        </m.div>
        <m.div
          variants={titleVariant()}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          <span className='text-tertiary'>Goal: </span>
          I always guided myself through challenges aiming to improve my skills every day. 
          Due to my experience providing innovative and quality user experiences, I am aspiring to development opportunities that can modernize my 
          logical and creative methods, to continue providing value through the implementation of web applications.
        </m.div>
        <m.div
          variants={titleVariant()}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          <span className='text-tertiary'>Hobbies: </span>
          Being from the Azores and living in Berlin, I appreciate going for walks in the suburbs of the city searching for the nature of Brandenburg. 
          Gathering with friends and family it&apos;s as well a big part of my priorities when having some free time, and not less important, sports have a 
          big dose of value and I try to keep a routine going for Bouldering or playing Basketball!
        </m.div>
      </div>
    </m.section>
  )
}

export default About;

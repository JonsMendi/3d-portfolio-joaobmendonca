
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
          and Leaflet.js, with a great passion for design.
        </m.div>
        <m.div
          variants={titleVariant()}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          <span className='text-tertiary'>Goal: </span>
          My approach to challenges has always been to use them as an opportunity to enhance my skills on a daily basis. 
          Based on my track record of delivering innovative and high-quality user experiences, I am eager to pursue development 
          opportunities that can help modernize my logical and creative techniques. This would enable me to continue delivering 
          value through the development of cutting-edge web applications.
        </m.div>
        <m.div
          variants={titleVariant()}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          <span className='text-tertiary'>Hobbies: </span>
          As someone hailing from the Azores but residing in Berlin, I enjoy exploring the outskirts of the 
          city in search of the natural beauty of Brandenburg. Additionally, spending time with loved ones 
          is a top priority for me during my free time. Equally significant is my commitment to physical fitness, 
          which I uphold by engaging in activities such as bouldering and basketball on a regular basis.
        </m.div>
      </div>
    </m.section>
  )
}

export default About;

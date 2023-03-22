import { motion } from "framer-motion";
import Image from 'next/image';
import { technologies } from "../utilities/data";
import { styles } from "../style";
import { fadeInVariant, titleVariant } from "../utilities/motion-framer";

interface TechnologiesCardProps {
  index: number;
  name: string;
  icon: string;
}

const TechnologiesCard = ({ index, name, icon }: TechnologiesCardProps ) => (
  <div className="xs:w-[150px] w-full border-2 border-tertiary">
    <motion.div
      variants={fadeInVariant("right", "spring", index * 0.1, 0.2)}
      className="w-full p-[1px] rounded-[20px]"
    >
      <div className="bg-tertiary bg-opacity-20 py-8 px-12 min-h-[150px] flex justify-evenly items-center flex-col" >
        <Image
          src={icon}
          alt="web-development technologies"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>
      </div>
    </motion.div>
  </div>
);

const Technologies = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={titleVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My skills</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Tech Stack.</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {technologies.map((service, index) => (
          <TechnologiesCard key={service.name} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
};

export default Technologies;

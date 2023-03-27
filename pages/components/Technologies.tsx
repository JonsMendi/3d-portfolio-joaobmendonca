import { motion as m } from "framer-motion";
import { styles } from "../style";
import { technologies } from "../../utilities/data";
import { titleVariant } from "../../utilities/motion-framer";
import TechnologiesCard from "./cards/TechnologiesCard";

const Technologies = () => {
  return (
    <m.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <m.div variants={titleVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My skills</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Tech Stack.</h2>
      </m.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {technologies.map((service, index) => (
          <TechnologiesCard key={service.name} index={index} {...service} />
        ))}
      </div>
    </m.section>
  );
};

export default Technologies;

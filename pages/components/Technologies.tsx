import React from 'react';
import { motion as m } from "framer-motion";
import { styles } from "../../utilities/style";
import { fronttechnologies, backtechnologies } from "../../utilities/data";
import { titleVariant } from "../../utilities/motion-framer";
import TechnologiesCard from "./cards/TechnologiesCard";
import useIsSmallScreen from "@/pages/hooks/useIsSmallScreen"; // Make sure to import the hook

const Technologies = () => {
  const isSmallScreen = useIsSmallScreen(); // Use the hook to determine screen size

  if (isSmallScreen) {
    // Render without any animations
    return (
      <section
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-12`}
      >
        <div>
          <p className={`${styles.sectionSubText} text-center`}>My skills</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Frontend Stack.</h2>
        </div>
        <div className="mt-20 flex justify-center flex-wrap gap-10">
          {fronttechnologies.map((tech, index) => (
            <TechnologiesCard key={tech.name} index={index} {...tech} />
          ))}
        </div>
        <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-12`}>
          <h2 className={`${styles.sectionHeadText} text-center`}>Backend Stack.</h2>
        </div>
        <div className="mt-20 flex justify-center flex-wrap gap-10">
          {backtechnologies.map((tech, index) => (
            <TechnologiesCard key={tech.name} index={index} {...tech} />
          ))}
        </div>

        {/* Legend for the symbol */}
        <div className="mt-10 flex justify-center">
          <p className={`${styles.sectionSubText}`}>
            * Technologies used in both frontend and backend development.
          </p>
        </div>
      </section>
    );
  } else {
    // Render with animations
    return (
      <m.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-12`}
      >
        <m.div variants={titleVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>My skills</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Frontend Stack.</h2>
        </m.div>
        <div className="mt-20 flex justify-center flex-wrap gap-10">
          {fronttechnologies.map((tech, index) => (
            <TechnologiesCard key={tech.name} index={index} {...tech} />
          ))}
        </div>
        <m.div className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-12`} variants={titleVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}>Backend Stack.</h2>
        </m.div>
        <div className="mt-20 flex justify-center flex-wrap gap-10">
          {backtechnologies.map((tech, index) => (
            <TechnologiesCard key={tech.name} index={index} {...tech} />
          ))}
        </div>
        {/* Legend for the symbol */}
        <div className="mt-10 flex justify-center">
          <p className={`${styles.sectionSubText}`}>
            * Technologies used in both frontend and backend development.
          </p>
        </div>
      </m.section>
    );
  }
};

export default Technologies;

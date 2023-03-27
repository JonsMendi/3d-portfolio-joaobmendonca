import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion as m } from "framer-motion";
import { styles } from "../../utilities/style";
import { experiences } from "../../utilities/data";
import { titleVariant } from "../../utilities/motion-framer";
import ExperienceCard from "./cards/ExperienceCard";

interface Experience {
  date: string;
  icon: string;
  icon_background: string;
  title: string;
  company_name: string;
  description: string;
  tasks: string[];
  link: string;
}

const Experience = () => {
  return (
    <m.section
      id="experience"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-20 flex-[0.75] bg-[#292d33] p-8 rounded-2xl`}
    >
      <div className="relative w-full mx-auto mt-20">
        <m.div variants={titleVariant()}>
          <p className={`${styles.sectionSubText} text-center `}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Work Experience.
          </h2>
        </m.div>

        <div className="mt-20 flex flex-col ">
          <VerticalTimeline layout="1-column-right">
            {experiences.map((experience: Object, index: number) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience as Experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </m.section>
  );
};

export default Experience;

import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { styles } from "../style";
import { experiences } from "../utilities/data";
import { titleVariant } from "../utilities/motion-framer";
import Image from "next/image";

const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#202328",
        color: "#FFFFFF",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      position="left"
    >
      <div>
        <h3 className="text-[#9f9882] text-[24px] font-bold uppercase">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map(
          (
            point:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined,
            index: any
          ) => (
            <li
              key={`experience-point-${index}`}
              className="text-white text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          )
        )}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-20 flex-[0.75] bg-[#292d33] p-8 rounded-2xl`}
    >
      <div className="relative w-full mx-auto mt-20">
        <motion.div variants={titleVariant()}>
          <p className={`${styles.sectionSubText} text-center `}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Work Experience.
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col ">
          <VerticalTimeline layout="1-column-right">
            {experiences.map((experience: Object, index: number) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;

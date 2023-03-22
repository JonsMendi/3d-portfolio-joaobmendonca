import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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

export default ExperienceCard;
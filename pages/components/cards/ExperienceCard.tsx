import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface Experience {
  date: string;
  icon: string;
  icon_background: string;
  title: string;
  company_name: string;
  description: string;
  tasks: string[];
  link: string
}

interface Props {
  experience: Experience;
}

const ExperienceCard: React.FC<Props> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#202328",
        color: "#FFFFFF",
      }}
      iconStyle={{ background: experience?.icon_background }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience?.icon}
            alt={experience?.company_name}
            className="w-[70%] h-[70%] object-contain"
            width={100}
            height={100}
          />
        </div>
      }
      position="left"
    >
      <div>
        <h3 className="text-[#9f9882] text-[24px] font-bold uppercase">
          {experience?.title}
        </h3>
        <div className="mt-2">
        <a 
            target="_blank"
            href={experience?.link}
            className="text-white text-[18px] font-semibold transition ease-in-out delay-10 hover:text-gray-400 "
            style={{ margin: 0 }}
          >
            {experience?.company_name}
          </a>
          <p
            className="text-white text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience?.date}
          </p>
        </div>
        
        
      </div>
      <p className="text-secondary text-[24px] font-bold">
        {experience?.description}
      </p>

      <p className="text-white text-[14px] pl-1 tracking-wider">Tasks:</p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience?.tasks.map((task, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white text-[14px] pl-1 tracking-wider"
          >
            {task}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;

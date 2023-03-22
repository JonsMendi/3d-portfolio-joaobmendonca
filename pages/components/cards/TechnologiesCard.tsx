import { motion as m } from "framer-motion";
import Image from 'next/image';
import { fadeInVariant } from "../../utilities/motion-framer";

interface TechnologiesCardProps {
  index: number;
  name: string;
  icon: string;
}

const TechnologiesCard = ({ index, name, icon }: TechnologiesCardProps ) => (
  <div className="xs:w-[150px] w-full border-2 border-tertiary">
    <m.div
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
    </m.div>
  </div>
);

export default TechnologiesCard;
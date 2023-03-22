import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeInVariant, titleVariant } from "../utilities/motion-framer";
import { testimonials } from "../utilities/data";

interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
}

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
}: FeedbackCardProps) => (
  <motion.div
    variants={fadeInVariant("", "spring", index * 0.3, 0.75)}
    className='bg-primary border-2 border-tertiary p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>&quot;{testimonial}&quot;</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {

  return (
    <motion.section
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <div className={`mt-12  rounded-[20px]`}>
      <div
        className={`rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={titleVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Appreciation.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
    </motion.section>
  );
};

export default Feedbacks;
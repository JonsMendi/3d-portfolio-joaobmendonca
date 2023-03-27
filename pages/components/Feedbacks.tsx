import { motion as m } from "framer-motion";
import { styles } from "../../utilities/style";
import { feedbacks } from "../../utilities/data";
import { titleVariant } from "../../utilities/motion-framer";
import FeedbackCard from "./cards/FeedbackCard";

const Feedbacks = () => {
  return (
    <m.section
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <div className={`mt-12 rounded-[20px]`}>
      <div
        className={`rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <m.div variants={titleVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Appreciation.</h2>
        </m.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {feedbacks.map((feedback, index) => (
          <FeedbackCard key={feedback.name} index={index} {...feedback} />
        ))}
      </div>
    </div>
    </m.section>
  );
};

export default Feedbacks;
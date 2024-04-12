import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { styles } from "../../utilities/style";
import { feedbacks } from "../../utilities/data";
import { titleVariant } from "../../utilities/motion-framer";
import FeedbackCard from "./cards/FeedbackCard";

// Step 1: Assign a fixed index to each feedback
const indexedFeedbacks = feedbacks.map((feedback, index) => ({
  ...feedback,
  fixedIndex: index,
}));

const Feedbacks = () => {
  const [firstCardIndex, setFirstCardIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(3); // Number of feedback cards to display

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setDisplayCount(1); // 1 card for smaller screens
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setDisplayCount(2); // 2 cards for tablets
      } else {
        setDisplayCount(3); // 3 cards for larger screens
      }
    }
  
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prev = () => {
    setFirstCardIndex(
      (prevIndex) =>
        (prevIndex - 1 + indexedFeedbacks.length) % indexedFeedbacks.length
    );
  };

  const next = () => {
    setFirstCardIndex((prevIndex) => (prevIndex + 1) % indexedFeedbacks.length);
  };

  const getDisplayedCards = () => {
    let cards = [];
    for (let i = 0; i < displayCount; i++) {
      cards.push(
        indexedFeedbacks[(firstCardIndex + i) % indexedFeedbacks.length]
      );
    }
    return cards;
  };

  const displayedCards = getDisplayedCards();


  return (
    <m.section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      {/* Title and Subtitle */}
      <div className={`mt-12 rounded-[20px]`}>
        <div className={`rounded-2xl ${styles.padding} min-h-[300px]`}>
          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={titleVariant()}
          >
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Appreciation.</h2>
          </m.div>
        </div>
      </div>

      {/* Feedback Cards */}
      <div className="relative">
        <div
          className={`-mt-32 pb-14 ${styles.paddingX} flex justify-center flex-nowrap gap-7 overflow-hidden`}
        >
          {displayedCards.map((feedback) => (
            <FeedbackCard
              key={feedback.fixedIndex}
              index={feedback.fixedIndex}
              {...feedback}
            />
          ))}
        </div>

        {/* Arrow Buttons */}
        <BsChevronCompactLeft
          className="absolute top-[50%] left-0 transform -translate-y-[50%] cursor-pointer"
          onClick={prev}
          size={40}
        />
        <BsChevronCompactRight
          className="absolute top-[50%] right-0 transform -translate-y-[50%] cursor-pointer"
          onClick={next}
          size={40}
        />
      </div>
    </m.section>
  );
};

export default Feedbacks;
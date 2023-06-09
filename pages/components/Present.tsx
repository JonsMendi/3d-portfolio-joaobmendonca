import { styles } from '../../utilities/style';
import Brain from './canvas/Brain';

const Present = () => {
  return (
    <section id="present" className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-center z-20`}
      >
        <div>
          <h1 className="xl:text-[75px] lg:text-[60px] md:text-[40px] sm:text-[50px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white title-name">
            <span className="block font-bold md:inline text-white title-name">
              João
            </span>
            <span
              className="block font-bold md:inline text-[#baad8a] title-name"
            >
              Borges
            </span>
            <span className="block font-bold md:inline text-white title-name">
              Mendonça
            </span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I create stunning web applications, user interfaces, and 3D visuals.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 top-[150px] max-w-7xl mx-auto z-10">
        <Brain />
      </div>
    </section>
  );
}

export default Present
import { styles } from '../style';
import Brain from './canvas/Brain';

const Present = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-center z-20`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white title-name`}>
          João<span className='text-[#93896D] title-name'>Borges</span>Mendonça
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build web applications, user interfaces and 3D visuals
          </p>
        </div>
      </div>
      <div className="absolute inset-0 top-[150px] max-w-7xl mx-auto z-10">
        <Brain />
      </div>
    </section>
  )
}

export default Present
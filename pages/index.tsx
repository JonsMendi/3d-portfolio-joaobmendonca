import Present from './components/Present';
import About from './components/About';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Feedbacks from './components/Feedbacks';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Present />
      </div>
      <About />
      <Experience />
      <Technologies />
      <Projects />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
}

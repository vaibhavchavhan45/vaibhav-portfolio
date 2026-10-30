import Navbar from './components/layout/Navbar';
import Hero from './components/sections/hero/Hero';
import About from './components/sections/about/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import GenAI from './components/sections/GenAI';
import Contact from './components/sections/contact/Contact';
import Footer from './components/layout/Footer';


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <GenAI />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

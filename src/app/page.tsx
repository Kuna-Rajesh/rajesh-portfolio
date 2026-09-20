import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import ChatFAB from '@/components/chat/ChatFAB';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <ChatFAB />
    </>
  );
}

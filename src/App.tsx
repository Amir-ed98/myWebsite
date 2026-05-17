import Navigation from '@/components/Navigation';
import CursorGlow from '@/components/CursorGlow';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Credentials from '@/sections/Credentials';
import Contact from '@/sections/Contact';

export default function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        background: 'var(--bg-void)',
        color: 'var(--text-primary-color)',
      }}
    >
      <Navigation />
      <CursorGlow />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>
    </div>
  );
}

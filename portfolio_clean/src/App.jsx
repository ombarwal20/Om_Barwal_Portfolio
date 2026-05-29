import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Resume } from './components/sections/Resume';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-white overflow-x-hidden">
      {/* Global ambient gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 10% 10%, rgba(0,212,255,0.04) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 90% 80%, rgba(124,58,237,0.05) 0%, transparent 60%)
          `,
        }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

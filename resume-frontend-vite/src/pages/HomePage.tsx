import { Masthead } from '@/components/home/Masthead';
import { About } from '@/components/home/About';
import { Experience } from '@/components/home/Experience';
import { Education } from '@/components/home/Education';
import { Skills } from '@/components/home/Skills';
import { Projects } from '@/components/home/Projects';
import { Extracurriculars } from '@/components/home/Extracurriculars';
import { Contact } from '@/components/home/Contact';

export function HomePage() {
  return (
    <>
      <Masthead />
      <About />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 space-y-24 md:space-y-32 py-12">
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Extracurriculars />
        <Contact />
      </div>
    </>
  );
}

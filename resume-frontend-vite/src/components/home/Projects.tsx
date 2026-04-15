import { projects } from '@/data/resume';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectItem } from './ProjectItem';

export function Projects() {
  return (
    <SectionHeading number="04" label="Things I've built" id="projects">
      {projects.map((item, i) => (
        <ProjectItem
          key={item.name}
          item={item}
          index={i}
          last={i === projects.length - 1}
        />
      ))}
    </SectionHeading>
  );
}

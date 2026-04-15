import { experience } from '@/data/resume';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExperienceItem } from './ExperienceItem';

export function Experience() {
  return (
    <SectionHeading number="01" label="Experience" id="work">
      {experience.map((item, i) => (
        <ExperienceItem
          key={`${item.company}-${i}`}
          item={item}
          last={i === experience.length - 1}
        />
      ))}
    </SectionHeading>
  );
}

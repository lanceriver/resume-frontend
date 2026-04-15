import { education } from '@/data/resume';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Education() {
  return (
    <SectionHeading number="02" label="Education" id="education">
      {education.map((edu, i) => (
        <article
          key={i}
          className={
            i === education.length - 1
              ? ''
              : 'pb-10 mb-10 border-b border-[var(--color-rule)]'
          }
        >
          <h3 className="font-display text-[22px] md:text-[26px] text-[var(--color-ink)] leading-tight">
            {edu.degree}
          </h3>
          <p className="mt-1 text-[15px] text-[var(--color-ink)]">
            {edu.institution}
          </p>
          <p className="mt-2 font-mono oldstyle text-[12px] text-[var(--color-ink-muted)] uppercase tracking-wider">
            {edu.startDate} — {edu.endDate}
          </p>
          {edu.details && (
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink)] max-w-[68ch]">
              {edu.details}
            </p>
          )}
          {edu.coursework && edu.coursework.length > 0 && (
            <p className="mt-4 text-[14px] text-[var(--color-ink-muted)] max-w-[68ch]">
              <span className="smallcaps text-[11px] text-[var(--color-ink)] mr-2">
                Coursework
              </span>
              {edu.coursework.join(' · ')}
            </p>
          )}
        </article>
      ))}
    </SectionHeading>
  );
}

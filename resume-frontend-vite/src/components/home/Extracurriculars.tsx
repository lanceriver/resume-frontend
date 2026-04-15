import { extracurriculars } from '@/data/resume';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Extracurriculars() {
  return (
    <SectionHeading number="05" label="Elsewhere" id="elsewhere">
      {extracurriculars.map((item, i) => (
        <article
          key={i}
          className={
            i === extracurriculars.length - 1
              ? ''
              : 'pb-10 mb-10 border-b border-[var(--color-rule)]'
          }
        >
          <h3 className="font-display text-[22px] md:text-[26px] text-[var(--color-ink)] leading-tight">
            {item.role}
          </h3>
          <p className="mt-1 text-[15px] text-[var(--color-ink)]">
            {item.organization}
            <span className="text-[var(--color-ink-muted)]"> · {item.location}</span>
          </p>
          <p className="mt-2 font-mono oldstyle text-[12px] text-[var(--color-ink-muted)] uppercase tracking-wider">
            {item.startDate} — {item.endDate}
          </p>
          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[var(--color-ink)] max-w-[68ch]">
            {item.highlights.map((h, j) => (
              <li key={j} className="relative pl-5">
                <span
                  aria-hidden
                  className="absolute left-0 top-[0.65em] h-px w-3 bg-[var(--color-rule-strong)]"
                />
                {h}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </SectionHeading>
  );
}

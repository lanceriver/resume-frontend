import type { Experience } from '@/types/resume';

interface Props {
  item: Experience;
  last?: boolean;
}

export function ExperienceItem({ item, last }: Props) {
  return (
    <article className={last ? 'pb-0' : 'pb-10 mb-10 border-b border-[var(--color-rule)]'}>
      <header className="mb-4">
        <h3 className="font-display text-[22px] md:text-[26px] text-[var(--color-ink)] leading-tight">
          {item.title}
        </h3>
        <p className="mt-1 text-[15px] text-[var(--color-ink)]">
          {item.company}
          <span className="text-[var(--color-ink-muted)]"> · {item.location}</span>
        </p>
        <p className="mt-2 font-mono oldstyle text-[12px] text-[var(--color-ink-muted)] uppercase tracking-wider">
          {item.startDate} — {item.endDate}
          {item.legacy && (
            <span className="ml-3 smallcaps text-[10px] text-[var(--color-ink-soft)]">
              archival
            </span>
          )}
        </p>
      </header>
      <ul className="space-y-3 text-[15px] leading-relaxed text-[var(--color-ink)] max-w-[68ch]">
        {item.highlights.map((h, i) => (
          <li key={i} className="relative pl-5">
            <span
              aria-hidden
              className="absolute left-0 top-[0.65em] h-px w-3 bg-[var(--color-rule-strong)]"
            />
            {h}
          </li>
        ))}
      </ul>
    </article>
  );
}

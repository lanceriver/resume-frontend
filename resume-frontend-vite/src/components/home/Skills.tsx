import { skills } from '@/data/resume';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Skills() {
  return (
    <SectionHeading number="03" label="Stack" id="stack">
      <dl className="space-y-6 max-w-[68ch]">
        {skills.map((cat) => (
          <div
            key={cat.label}
            className="grid gap-x-6 gap-y-2 md:grid-cols-[180px_1fr] items-baseline pb-5 border-b border-[var(--color-rule)] last:border-b-0 last:pb-0"
          >
            <dt className="smallcaps text-[11px] text-[var(--color-ink-muted)]">
              {cat.label}
            </dt>
            <dd className="font-display text-[18px] md:text-[19px] text-[var(--color-ink)] leading-snug">
              {cat.items.join(', ')}
            </dd>
          </div>
        ))}
      </dl>
    </SectionHeading>
  );
}

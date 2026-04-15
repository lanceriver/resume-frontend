import type { Project } from '@/types/resume';
import { ExternalLink } from '@/components/ui/ExternalLink';

interface Props {
  item: Project;
  index: number;
  last?: boolean;
}

export function ProjectItem({ item, index, last }: Props) {
  return (
    <article
      className={last ? 'pb-0' : 'pb-10 mb-10 border-b border-[var(--color-rule)]'}
    >
      <header className="mb-3 flex items-baseline justify-between gap-4 flex-wrap">
        <h3 className="font-display text-[22px] md:text-[26px] text-[var(--color-ink)] leading-tight">
          <span className="font-mono oldstyle text-[13px] text-[var(--color-ink-muted)] mr-3 align-middle">
            ({String(index + 1).padStart(2, '0')})
          </span>
          {item.name}
        </h3>
        <ExternalLink
          href={item.url}
          className="font-mono text-[12px] text-[var(--color-ink-muted)] hover:text-[var(--color-spot)] smallcaps"
        >
          visit ↗
        </ExternalLink>
      </header>
      <p className="text-[15px] text-[var(--color-ink-muted)] italic mb-4 max-w-[68ch]">
        {item.summary}
      </p>
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
      {item.tech && item.tech.length > 0 && (
        <p className="mt-4 font-mono text-[11px] text-[var(--color-ink-muted)] max-w-[68ch]">
          <span className="smallcaps mr-2">Built with</span>
          {item.tech.join(' · ')}
        </p>
      )}
    </article>
  );
}

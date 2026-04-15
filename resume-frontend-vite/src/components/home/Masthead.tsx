import { contact } from '@/data/resume';

export function Masthead() {
  return (
    <header className="mx-auto max-w-[1200px] px-6 lg:px-10 pt-16 md:pt-24 pb-12">
      <p className="smallcaps text-[12px] text-[var(--color-ink-muted)] mb-6">
        A personal site · est. 2023
      </p>
      <h1
        className="font-display-masthead text-[var(--color-spot)] leading-[0.88] tracking-tight"
        style={{
          fontSize: 'clamp(56px, 12vw, 168px)',
          fontWeight: 400,
        }}
      >
        Lance
        <br />
        Rivera.
      </h1>
      <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto] items-end border-t border-[var(--color-rule)] pt-6">
        <p className="font-display text-[20px] md:text-[24px] italic text-[var(--color-ink)] leading-snug max-w-[56ch]">
          Junior Systems Engineer at Pool Safety Solutions.
          <br className="hidden md:block" />
          Computer Science at UNSW, finishing December 2026.
        </p>
        <dl className="font-mono text-[12px] text-[var(--color-ink-muted)] space-y-1 md:text-right">
          <div className="flex md:justify-end gap-2">
            <dt className="smallcaps">Based</dt>
            <dd>— {contact.location}</dd>
          </div>
          <div className="flex md:justify-end gap-2">
            <dt className="smallcaps">Status</dt>
            <dd>— {contact.residency}</dd>
          </div>
          <div className="flex md:justify-end gap-2">
            <dt className="smallcaps">Contact</dt>
            <dd>
              —{' '}
              <a href={`mailto:${contact.email}`} className="link-underline">
                {contact.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </header>
  );
}

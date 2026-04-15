import { aboutParagraph } from '@/data/resume';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-6 lg:px-10 py-16 scroll-mt-24">
      <div className="lg:grid lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:gap-12">
        <aside className="mb-6 lg:mb-0">
          <p className="smallcaps text-[12px] text-[var(--color-ink-muted)]">
            Prologue
          </p>
          <div className="mt-3 h-px w-16 bg-[var(--color-rule-strong)]" />
        </aside>
        <div>
          <p
            className="drop-cap font-display text-[20px] md:text-[22px] leading-[1.6] max-w-[64ch] text-[var(--color-ink)]"
            style={{ fontWeight: 400 }}
          >
            {aboutParagraph}
          </p>
        </div>
      </div>
    </section>
  );
}

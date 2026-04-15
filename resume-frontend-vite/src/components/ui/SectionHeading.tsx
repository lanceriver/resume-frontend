import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  number: string; // "01", "02"
  label: string;  // "EXPERIENCE"
  id?: string;
  children?: ReactNode;
}

/**
 * Editorial section heading.
 *
 * On ≥lg screens, the section number sits in the left column of the grid, and
 * the content column flows to the right. On smaller screens the number and
 * label stack above the content.
 *
 * The number reveals upward on scroll-in via IntersectionObserver.
 */
export function SectionHeading({ number, label, id, children }: SectionHeadingProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: '-5% 0px' },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [visible]);

  return (
    <section
      id={id}
      ref={ref}
      className="grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] scroll-mt-24"
    >
      <header className="lg:sticky lg:top-10 lg:self-start">
        <div className={cn('section-number', visible && 'is-visible')}>
          <p className="font-display oldstyle text-[var(--color-spot)] text-[46px] md:text-[60px] leading-none tracking-tight">
            <span className="font-mono text-[12px] align-top mr-2 text-[var(--color-ink-muted)]">
              No.
            </span>
            {number}
          </p>
        </div>
        <p className="mt-3 smallcaps text-[12px] text-[var(--color-ink-muted)]">
          {label}
        </p>
        <div className="mt-3 h-px w-16 bg-[var(--color-rule-strong)]" />
      </header>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

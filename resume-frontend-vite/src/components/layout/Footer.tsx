import { contact } from '@/data/resume';
import { VisitorCount } from '@/components/visitor/VisitorCount';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-rule)] mt-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-10 grid gap-8 md:grid-cols-[1fr_auto] items-end">
        <div className="space-y-2">
          <p className="font-display text-xl text-[var(--color-ink)]">
            Lance Rivera
          </p>
          <p className="font-mono text-[12px] text-[var(--color-ink-muted)]">
            {contact.location} · {contact.residency}
          </p>
          <p className="font-mono text-[12px] text-[var(--color-ink-muted)]">
            <a href={`mailto:${contact.email}`} className="link-underline">
              {contact.email}
            </a>
            {' · '}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline"
            >
              linkedin
            </a>
            {' · '}
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline"
            >
              github
            </a>
          </p>
        </div>
        <div className="md:text-right">
          <VisitorCount />
          <p className="font-mono text-[11px] text-[var(--color-ink-soft)] mt-3">
            Set in Fraunces &amp; IBM Plex. © {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
  );
}

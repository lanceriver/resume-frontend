import { contact } from '@/data/resume';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Contact() {
  return (
    <SectionHeading number="06" label="Colophon & contact" id="contact">
      <p className="font-display text-[22px] md:text-[26px] leading-snug text-[var(--color-ink)] max-w-[56ch]">
        I like hearing from people building systems with humans in them. If
        that's you — or if you've got an interesting problem with too many
        moving parts — send a note.
      </p>
      <dl className="mt-8 space-y-3 max-w-[68ch]">
        <div className="grid grid-cols-[120px_1fr] gap-4 pb-3 border-b border-[var(--color-rule)]">
          <dt className="smallcaps text-[11px] text-[var(--color-ink-muted)] pt-1">
            Email
          </dt>
          <dd className="font-mono text-[14px]">
            <a href={`mailto:${contact.email}`} className="link-underline">
              {contact.email}
            </a>
          </dd>
        </div>
        <div className="grid grid-cols-[120px_1fr] gap-4 pb-3 border-b border-[var(--color-rule)]">
          <dt className="smallcaps text-[11px] text-[var(--color-ink-muted)] pt-1">
            LinkedIn
          </dt>
          <dd className="font-mono text-[14px]">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline"
            >
              linkedin.com/in/lance-rivera
            </a>
          </dd>
        </div>
        <div className="grid grid-cols-[120px_1fr] gap-4 pb-3 border-b border-[var(--color-rule)]">
          <dt className="smallcaps text-[11px] text-[var(--color-ink-muted)] pt-1">
            Phone
          </dt>
          <dd className="font-mono text-[14px] text-[var(--color-ink)]">
            {contact.phone}
          </dd>
        </div>
        <div className="grid grid-cols-[120px_1fr] gap-4">
          <dt className="smallcaps text-[11px] text-[var(--color-ink-muted)] pt-1">
            Based in
          </dt>
          <dd className="font-mono text-[14px] text-[var(--color-ink)]">
            {contact.location}
          </dd>
        </div>
      </dl>
    </SectionHeading>
  );
}

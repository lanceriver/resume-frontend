import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { BlogPostMeta } from '@/types/blog';
import { formatPostDate } from '@/lib/blog';

interface Props {
  meta: BlogPostMeta;
  children: ReactNode;
}

export function BlogPost({ meta, children }: Props) {
  return (
    <article className="mx-auto max-w-[1200px] px-6 lg:px-10 py-16">
      <Link
        to="/blog"
        className="font-mono smallcaps text-[12px] text-[var(--color-ink-muted)] link-underline"
      >
        ← Back to the journal
      </Link>

      <header className="mt-10 mb-12 pb-10 border-b border-[var(--color-rule)] max-w-[68ch]">
        <p className="font-mono oldstyle smallcaps text-[11px] text-[var(--color-ink-muted)] mb-4">
          {formatPostDate(meta.date)}
        </p>
        <h1
          className="font-display text-[var(--color-ink)] leading-[1.02]"
          style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 400 }}
        >
          {meta.title}
        </h1>
        {meta.description && (
          <p className="mt-6 font-display italic text-[20px] md:text-[22px] leading-snug text-[var(--color-ink-muted)] max-w-[56ch]">
            {meta.description}
          </p>
        )}
      </header>

      <div className="prose prose-editorial max-w-[68ch] font-display text-[19px] leading-[1.72]">
        {children}
      </div>
    </article>
  );
}

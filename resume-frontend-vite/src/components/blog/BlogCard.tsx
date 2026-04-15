import { Link } from 'react-router-dom';
import type { BlogPostMeta } from '@/types/blog';
import { formatPostDate } from '@/lib/blog';

interface Props {
  post: BlogPostMeta;
}

export function BlogCard({ post }: Props) {
  return (
    <article className="py-8 border-b border-[var(--color-rule)] last:border-b-0 group">
      <Link to={`/blog/${post.slug}`} className="block">
        <p className="font-mono oldstyle text-[11px] text-[var(--color-ink-muted)] smallcaps mb-2">
          {formatPostDate(post.date)}
        </p>
        <h3 className="font-display text-[28px] md:text-[34px] leading-tight text-[var(--color-ink)] group-hover:text-[var(--color-spot)] transition-colors max-w-[32ch]">
          {post.title}
        </h3>
        <p className="mt-3 text-[15px] text-[var(--color-ink-muted)] max-w-[60ch]">
          {post.description}
        </p>
        <p className="mt-4 font-mono text-[12px] text-[var(--color-ink-muted)] smallcaps">
          Read —&gt;
        </p>
      </Link>
    </article>
  );
}

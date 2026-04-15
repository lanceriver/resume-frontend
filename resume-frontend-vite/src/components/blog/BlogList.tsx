import type { BlogPostMeta } from '@/types/blog';
import { BlogCard } from './BlogCard';

interface Props {
  posts: BlogPostMeta[];
}

export function BlogList({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <p className="font-display italic text-[var(--color-ink-muted)]">
        Nothing here yet. Come back soon.
      </p>
    );
  }
  return (
    <div>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

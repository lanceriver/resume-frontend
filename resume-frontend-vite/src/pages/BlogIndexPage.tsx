import { posts } from '@/lib/blog';
import { BlogList } from '@/components/blog/BlogList';

export function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-16">
      <header className="mb-12 pb-8 border-b border-[var(--color-rule)]">
        <p className="smallcaps text-[12px] text-[var(--color-ink-muted)] mb-4">
          The Journal
        </p>
        <h1
          className="font-display text-[var(--color-ink)] leading-[0.95]"
          style={{ fontSize: 'clamp(56px, 10vw, 128px)', fontWeight: 400 }}
        >
          Field notes.
        </h1>
        <p className="mt-6 font-display italic text-[20px] md:text-[22px] text-[var(--color-ink-muted)] max-w-[56ch]">
          Occasional essays on systems, National Service, and whatever else
          seemed worth writing down.
        </p>
      </header>
      <BlogList posts={posts} />
    </div>
  );
}

import type { ComponentType } from 'react';
import type { BlogFrontmatter, BlogPostMeta, BlogPostModule } from '@/types/blog';

const modules = import.meta.glob<BlogPostModule>(
  '@/content/blog/*.mdx',
  { eager: true },
);

function slugFromPath(filePath: string): string {
  return filePath.split('/').pop()!.replace(/\.mdx$/, '');
}

export const posts: BlogPostMeta[] = Object.entries(modules)
  .map(([filePath, mod]) => ({
    slug: slugFromPath(filePath),
    ...(mod.frontmatter as BlogFrontmatter),
  }))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPostComponent(slug: string): ComponentType | null {
  const entry = Object.entries(modules).find(([filePath]) =>
    filePath.endsWith(`/${slug}.mdx`),
  );
  return entry ? entry[1].default : null;
}

export function getPostMeta(slug: string): BlogPostMeta | null {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

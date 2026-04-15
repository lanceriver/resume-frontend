import type { ComponentType } from 'react';

export interface BlogFrontmatter {
  title: string;
  date: string; // ISO yyyy-mm-dd
  description: string;
  image?: string;
}

export interface BlogPostMeta extends BlogFrontmatter {
  slug: string;
}

export interface BlogPostModule {
  default: ComponentType;
  frontmatter: BlogFrontmatter;
}

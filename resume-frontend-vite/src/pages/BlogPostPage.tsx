import { useParams, Navigate } from 'react-router-dom';
import { getPostComponent, getPostMeta } from '@/lib/blog';
import { BlogPost } from '@/components/blog/BlogPost';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/blog" replace />;

  const Post = getPostComponent(slug);
  const meta = getPostMeta(slug);

  if (!Post || !meta) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <BlogPost meta={meta}>
      <Post />
    </BlogPost>
  );
}

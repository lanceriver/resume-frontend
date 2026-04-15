import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { BlogIndexPage } from '@/pages/BlogIndexPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'blog', element: <BlogIndexPage /> },
      { path: 'blog/:slug', element: <BlogPostPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

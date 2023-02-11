import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { MDX } from '~/components/mdx';

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post.slug }));
};

const Blog = async ({ params }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <article className="blog">
      <MDX code={post.body.code} />
    </article>
  );
};

export default Blog;

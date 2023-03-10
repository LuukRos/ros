import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Form } from '~/components/form';
import { MDX } from '~/components/mdx';

type PostMetadata = {
  slug: string;
};

export const generateMetadata = async ({
  params,
}: {
  params: PostMetadata;
}): Promise<Metadata> => {
  const post = allPosts.find((post) => post.slug === `posts/${params.slug}`);
  // This will theoretically never happen as we 404 when no post is found,
  // yet it makes sense to check for `undefined` in the context of `find`.
  if (!post) return {};

  const {
    description,
    keywords,
    title,
    slug,
    publicationDate: publishedTime,
  } = post;

  return {
    title,
    description: post.description,
    keywords: keywords,
    authors: {
      name: 'Luuk Ros',
    },
    openGraph: {
      title,
      description,
      type: 'article',
      tags: keywords,
      publishedTime, // TODO: check if this is actually correct formatting
      url: `https://ros.dev/blog/${slug}`, // TODO: finalise URL
      authors: 'Luuk Ros',
      // TODO: add support for images
    },
    twitter: {
      card: 'summary',
      title,
      description,
      // TODO: add support for images
    },
    // twitter: again, quite a bit
  };
};

export const generateStaticParams = async (): Promise<PostMetadata[]> => {
  return allPosts.map((post) => ({ slug: post.slug }));
};

interface PostProps {
  params: PostMetadata;
}

const Post = async ({ params }: PostProps) => {
  const post = allPosts.find((post) => post.slug === `posts/${params.slug}`);
  if (!post) notFound();

  return (
    <main>
      <article className="blog">
        <MDX code={post.body.code} />
      </article>

      <Form />
    </main>
  );
};

export default Post;

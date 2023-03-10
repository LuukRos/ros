import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import { Form } from '~/components/form';
import { Heading } from '~/components/heading';
import { useDate } from '~/hooks/use-date';

export const metadata = {
  title: 'ros.io | Software development blog',
  description:
    'This blog is a collection of my thoughts and learnings on (front-end) software development, engineering, design and more.',
};

const Blog = async () => {
  const { formatDate } = useDate();

  return (
    <main>
      {allPosts.map((post, index) => (
        <Link key={index} href={`/blog/${post.linkSlug}`}>
          <article className="mb-8">
            <header>
              <Heading type="h2">
                <span className="mr-2 text-blue">({post.linkSlug})</span>
                {post.title}
              </Heading>
            </header>

            <p>{post.description}</p>

            <footer>
              <time dateTime={new Date(post.publicationDate).toString()}>
                {formatDate(post.publicationDate, 'long')}
              </time>
            </footer>
          </article>
        </Link>
      ))}

      <Form />
    </main>
  );
};

export default Blog;

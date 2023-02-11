import { allPosts } from 'contentlayer/generated';
import { MDX } from '~/components/mdx';

const Blog = async () => {
  return (
    <main>
      Hello world, from the blog.
      {allPosts.map((post, index) => (
        <MDX code={post.body.code} key={index} />
      ))}
    </main>
  );
};

export default Blog;

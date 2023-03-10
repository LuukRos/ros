import {
  ComputedFields,
  defineDocumentType,
  FieldDefs,
  makeSource,
} from 'contentlayer/source-files';
import { rehypeAutolinkHeadingsOptions } from 'lib/rehype-autolink-headings-options';
import { rehypePrettyCodeOptions } from 'lib/rehype-pretty-code-options';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const fields: FieldDefs = {
  title: {
    type: 'string',
    required: true,
  },
  publicationDate: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  },
  keywords: {
    type: 'string',
    required: true,
  },
};

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (document) => document._raw.flattenedPath,
  },
  linkSlug: {
    type: 'string',
    resolve: (document) => /\/(.+)/.exec(document._raw.flattenedPath)![1],
  },
  fileName: {
    type: 'string',
    resolve: (document) => document._raw.sourceFileName,
  },
};

export const Files = defineDocumentType(() => ({
  name: 'Files',
  filePathPattern: 'files/**/*.mdx',
  contentType: 'mdx',
  computedFields,
}));

export const Links = defineDocumentType(() => ({
  name: 'Links',
  filePathPattern: 'links/**/*.mdx',
  contentType: 'mdx',
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.mdx',
  contentType: 'mdx',
  fields,
  computedFields,
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Files, Links, Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
    ],
  },
});

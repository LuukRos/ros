import {
  ComputedFields,
  FieldDefs,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';

const fields: FieldDefs = {
  title: {
    type: 'string',
    required: true,
  },
};

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `${doc._raw.flattenedPath}`,
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields,
  computedFields,
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
});

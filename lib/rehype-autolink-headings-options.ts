import { type Options } from 'rehype-autolink-headings';

export const rehypeAutolinkHeadingsOptions: Partial<Options> = {
  properties: {
    className: ['anchor'],
  },
  behavior: 'wrap',
};

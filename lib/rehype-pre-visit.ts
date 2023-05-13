import { visit } from 'unist-util-visit';

// TODO: properly type this
export const rehypePreVisit = (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      const [children] = node.children;
      if (children.tagName !== 'code') return;

      node.rawText = children.children?.[0].value;
    }
  });
};

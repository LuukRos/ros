import { visit } from 'unist-util-visit';

// TODO: properly type this
export const rehypePostVisit = (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === 'element' && node?.tagName === 'div') {
      if (!('data-rehype-pretty-code-fragment' in node.properties)) return;

      for (const child of node.children) {
        if (child.tagName === 'pre') {
          child.properties['rawText'] = node.rawText;
        }
      }
    }
  });
};

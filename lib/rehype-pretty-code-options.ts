import { type Options } from 'rehype-pretty-code';

import { readFileSync } from 'fs';

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: {
    light: JSON.parse(readFileSync('./src/assets/themes/latte.json', 'utf-8')),
    dark: JSON.parse(readFileSync('./src/assets/themes/mocha.json', 'utf-8')),
  },
  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    // Each line node by default has `class="line"`.
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node, id) {
    // Each word node has no className by default.
    node.properties.className = ['highlighted'];

    /**
     * `id` will be either one of the below options:
     * - b(lue)
     * - y(ellow)
     * - m(auve)
     * - l(avender)
     * The above options are inspired by the Catppuccin colours currently used in this project.
     */
    if (id) {
      const classNames = {
        b: 'bg-blue',
        y: 'bg-yellow',
        m: 'bg-mauve',
        l: 'bg-lavender',
      }[id];

      // If the word spans across syntax boundaries (e.g. punctuation), remove
      // colors from the child nodes.
      if (node.properties['data-rehype-pretty-code-wrapper']) {
        node.children.forEach((childNode: any) => {
          childNode.properties.className = '';
        });
      }

      node.properties.className = `highlighted ${classNames}`;
    }
  },
};

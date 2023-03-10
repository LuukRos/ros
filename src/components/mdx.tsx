import { useMDXComponent } from 'next-contentlayer/hooks';
import { Command } from '~/components/command';
import { Heading } from '~/components/heading';
import { List } from '~/components/list';
import { Pre } from '~/components/code';

const components = {
  Command,
  Heading,
  List,
  Pre,
};

interface MDXProps {
  code: string;
}

export const MDX = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};

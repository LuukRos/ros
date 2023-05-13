import { useMDXComponent } from 'next-contentlayer/hooks';
import { Code, CodeTitle } from '~/components/code';
import { Command } from '~/components/command';
import { Heading } from '~/components/heading';
import { Link } from '~/components/link';
import { List } from '~/components/list';

const components = {
  Command,
  Heading,
  List,
  Link,
  CodeTitle,
  pre: ({ ...props }) => <Code {...props} />,
};

interface MDXProps {
  code: string;
}

export const MDX = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};

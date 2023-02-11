import { useMDXComponent } from 'next-contentlayer/hooks';
import { Command, Heading } from '~/components';

const components = {
  Command,
  Heading,
};

interface MDXProps {
  code: string;
}

export const MDX = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};

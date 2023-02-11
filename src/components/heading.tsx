interface HeadingProps {
  children: React.ReactNode;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading = ({ children, type, ...rest }: HeadingProps) => {
  const HeadingTemplate = type;

  return <HeadingTemplate {...rest}>{children}</HeadingTemplate>;
};

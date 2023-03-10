interface PreInterface {
  children: React.ReactNode;
}

export const Pre = ({ children, ...rest }: PreInterface) => {
  return (
    <pre {...rest} className="p-4">
      {children}
    </pre>
  );
};

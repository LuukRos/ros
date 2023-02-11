interface CommandProps {
  command: string;
}

export const Command = ({ command }: CommandProps) => {
  return (
    <p className="my-4">
      <span className="text-blue dark:text-green">ros</span> ~{' '}
      <span className="text-yellow">$</span>{' '}
      <span className="text-black dark:text-white">{command}</span>
    </p>
  );
};

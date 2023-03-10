interface CommandProps {
  command: string;
}

export const Command = ({ command }: CommandProps) => {
  return (
    <p className="my-4">
      <span className="text-blue">ros</span>
      <span className="font-bold text-mauve"> ~ </span>
      <span className="text-green"> $ </span>
      <span className="text-black dark:text-white">{command}</span>
    </p>
  );
};

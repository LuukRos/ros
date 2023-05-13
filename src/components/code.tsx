import Image from 'next/image';
import { ReactNode } from 'react';
import { italicFont } from '~/fonts';

interface CodeTitleProps {
  title: string;
  iconName: string;
}

export const CodeTitle = ({ title, iconName }: CodeTitleProps) => {
  return (
    <div
      className={`flex items-center rounded-t-lg border border-blue px-4 font-italic text-sm ${italicFont.variable} pre-wrapper overflow-hidden text-blue`}
    >
      <div className={`mr-4 hidden gap-2 md:flex`}>
        <div className="h-4 w-4 rounded-full bg-red" />
        <div className="h-4 w-4 rounded-full bg-peach" />
        <div className="h-4 w-4 rounded-full bg-green" />
      </div>
      <div className="flex h-full items-center gap-4 overflow-x-auto border-b-2 border-mauve p-4">
        <div className="hidden dark:block">
          <Image
            src={`/icons/mocha/${iconName}.svg`}
            alt=""
            width="24"
            height="24"
          />
        </div>

        <div className="dark:hidden">
          <Image
            src={`/icons/latte/${iconName}.svg`}
            alt=""
            width="24"
            height="24"
          />
        </div>

        {title}
      </div>
    </div>
  );
};

interface CodeProps {
  children?: ReactNode;
  rawText?: string;
}

export const Code = ({
  children,
  rawText = undefined,
  ...props
}: CodeProps) => {
  return <pre {...props}>{children}</pre>;
};

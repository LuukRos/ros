import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import NextLink from 'next/link';
import { isExternalUrl } from '~/utils/is-external-url';

interface LinkProps {
  href: string;
  label: string;
}

export const Link = ({ href, label }: LinkProps) => {
  if (isExternalUrl(href))
    return (
      <a href={href} className="flex items-center text-blue" target="_blank">
        {label}
        <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
      </a>
    );

  return (
    <NextLink href={href} className="text-blue">
      {label}
    </NextLink>
  );
};

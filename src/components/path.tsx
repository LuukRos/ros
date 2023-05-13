'use client';

import {
  DocumentIcon,
  FolderOpenIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathnameSections } from '~/hooks/use-pathname-sections';
import { useTextMutations } from '~/hooks/use-text-mutations';

const PATH_COLOURS = [
  'bg-blue after:border-l-blue',
  'bg-yellow after:border-l-yellow',
  'bg-mauve after:border-l-mauve',
];

const PATH_ICONS = [
  <HomeIcon key={0} className="mx-2 h-4 w-4 pl-2 md:pl-0" />,
  <FolderOpenIcon key={1} className="mx-2 ml-6 h-4 w-4" />,
  <DocumentIcon key={2} className="mx-2 ml-6 h-4 w-4" />,
];

export type PathItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  color?: string;
};

const PathItem = ({
  item,
  isLast,
}: {
  item: PathItem;
  isFirst: boolean;
  isLast: boolean;
}) => {
  const { capitaliseFirstChar } = useTextMutations();
  const label = capitaliseFirstChar(item.label);

  return (
    <li
      className={`flex h-6 items-center md:h-8 ${item.color} relative w-auto text-white after:absolute after:left-full after:z-10 after:border-b-[12px] after:border-l-[12px] after:border-t-[12px] after:border-b-transparent after:border-t-transparent dark:text-black md:after:border-b-[16px] md:after:border-l-[16px] md:after:border-t-[16px]`}
    >
      <Link
        href={`${item.href ? item.href : '/'}`}
        className="flex items-center"
      >
        {item.icon}

        <span
          className={`${!item.icon ? 'ml-6' : ''} mr-2 ${
            isLast ? 'inline' : 'hidden'
          } md:inline`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
};

export const Path = () => {
  let pathnameSections = usePathnameSections();
  const pathItems: PathItem[] = pathnameSections.map((section, index) => ({
    label: !section ? '~ Home' : section,
    href: section,
    icon: PATH_ICONS[index],
    color: PATH_COLOURS[index],
  }));

  return (
    <nav>
      <ul className="flex items-center">
        {pathItems.map((pathItem, index) => (
          <PathItem
            key={index}
            item={pathItem}
            isFirst={index === 0}
            isLast={index === pathItems.length - 1}
          />
        ))}
      </ul>
    </nav>
  );
};

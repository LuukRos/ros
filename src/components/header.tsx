'use client';

import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faCheck,
  faFolderOpen,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathnameSections } from '~/hooks/use-pathname-sections';
import { useTextMutations } from '~/hooks/use-text-mutations';

const MENU_COLOURS = [
  'bg-blue after:border-l-blue',
  'bg-yellow after:border-l-yellow',
  'bg-mauve after:border-l-mauve',
];
const MENU_ICONS = [
  <FontAwesomeIcon icon={faHome} key={0} />,
  <FontAwesomeIcon icon={faFolderOpen} key={1} />,
];

export type MenuItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  color?: string;
};

const MenuItem = ({ item }: { item: MenuItem }) => {
  const { capitaliseFirstChar } = useTextMutations();
  const label = capitaliseFirstChar(item.label);

  return (
    <li
      className={`flex h-8 items-center ${item.color} relative w-auto text-white after:absolute after:left-full after:z-10 after:border-l-[16px] after:border-t-[16px] after:border-b-[16px] after:border-t-transparent after:border-b-transparent dark:text-black`}
    >
      <Link href={`${item.href}`}>
        {item.icon && <span className="mx-2 text-xs md:pl-4">{item.icon}</span>}
        <span className={`${!item.icon ? 'ml-6' : ''} mr-2`}>{label}</span>
      </Link>
    </li>
  );
};

export const Header = () => {
  const [time, setTime] = useState(new Date());

  const pathnameSections = usePathnameSections();
  const menuItems: MenuItem[] = pathnameSections.map((section, index) => ({
    label: !section ? '~ Home' : section,
    href: section,
    icon: MENU_ICONS[index],
    color: MENU_COLOURS[index],
  }));

  // useEffect(() => {
  //   const timer = setInterval(() => setTime(new Date()), 100);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <header className="mb-8 flex items-center justify-between">
      <nav>
        <ul className="flex items-center">
          {menuItems.map((menuItem, index) => (
            <MenuItem key={index} item={menuItem} />
          ))}
        </ul>
      </nav>

      <div className="relative flex h-8 items-center bg-gray-500 text-black after:absolute after:right-full after:border-t-[16px] after:border-r-[16px] after:border-b-[16px] after:border-t-transparent after:border-r-gray-500 after:border-b-transparent">
        <FontAwesomeIcon icon={faCheck} className="mr-4 px-2 text-green" />
        <div className="relative flex h-8 items-center bg-gray-400 px-2 after:absolute after:right-full after:border-t-[16px] after:border-r-[16px] after:border-b-[16px] after:border-t-transparent after:border-r-gray-400 after:border-b-transparent">
          <time>
            at{' '}
            {new Intl.DateTimeFormat('nl-NL', {
              timeStyle: 'short',
            }).format(time)}
          </time>

          <FontAwesomeIcon className="ml-2" icon={faClock} />
        </div>
      </div>
    </header>
  );
};

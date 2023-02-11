import { usePathname } from 'next/navigation';

export const usePathnameSections = () => {
  const pathname = usePathname();
  if (!pathname) return [];

  const sections = [...new Set(pathname?.split('/'))];
  return sections;
};

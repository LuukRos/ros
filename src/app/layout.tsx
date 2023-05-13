import { Analytics } from '@vercel/analytics/react';

import '~/assets/styles/globals.css';

import { Path } from '~/components/path';
import { Status } from '~/components/status';

import { baseFont } from '../../public/fonts';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body
        className={`latte bg-base p-4 text-black dark:mocha dark:text-white md:p-8 ${baseFont.variable} ml-0 min-w-[320px] max-w-[860px] font-mono`}
      >
        <header className="mb-8 flex items-center justify-between">
          <Path />

          <Status />
        </header>

        {children}

        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;

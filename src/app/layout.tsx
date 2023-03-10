import { Header } from '~/components/header';

import '~/assets/styles/globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { baseFont } from '~/assets/fonts';
config.autoAddCss = false;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body
        className={`latte bg-base p-4 text-black dark:mocha dark:text-white md:p-8 ${baseFont.variable} ml-0 min-w-[320px] max-w-[860px] font-mono`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
};

export default RootLayout;

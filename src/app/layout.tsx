import { Header } from '~/components/header';
import './globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { baseFont } from '~/assets/fonts';
config.autoAddCss = false;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body
        className={`latte bg-base p-8 text-green dark:frappe dark:text-blue ${baseFont.variable} ml-0 min-w-[320px] max-w-[860px] font-mono`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
};

export default RootLayout;

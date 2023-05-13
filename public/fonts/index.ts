import localFont from 'next/font/local';

export const baseFont = localFont({
  src: [
    {
      path: './CartographCF-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-cartograph',
});

export const italicFont = localFont({
  src: [
    {
      path: './CartographCF-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-cartograph-italic',
});

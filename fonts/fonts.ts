import { Playfair_Display, Open_Sans } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--playfair',
  display: 'swap',
  weight: ['400', '600'],
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--opensans',
  display: 'swap',
  weight: ['400', '300'],
});

import '../app/css/globals.css';
import { Roboto } from 'next/font/google';
import Navbar from './navbar';
import Footer from './footer';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
});

export const metadata = {
  title: '타코마중앙장로교회',
  description: '타모마중앙장로교회 홈페이지입니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}

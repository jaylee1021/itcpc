import '../app/css/globals.css';
import { Poppins } from 'next/font/google';
import Navbar from './navbar';
import Footer from './footer';
import ThemeRegistry from './ThemeRegistry/ThemeRegistry';

const roboto = Poppins({
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
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>

    </html>
  );
}

import { Provider, ResponsiveAppBar } from '@/components';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'React Virtual List',
  description: 'React virtual list app by Jhon Cesar Pablo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ResponsiveAppBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}

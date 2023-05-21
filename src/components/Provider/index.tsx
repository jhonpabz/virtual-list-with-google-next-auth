'use client';
import { FC } from 'react';
import { SessionProvider } from 'next-auth/react';
interface indexProps {
  children: React.ReactNode;
}

export const Provider: FC<indexProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

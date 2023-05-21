'use client';

import styles from '../page.module.css';
import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Box, Typography } from '@mui/material';
import { ButtonComponent } from '@/components';

export default function Profile() {
  const { data: session } = useSession({
    required: true,
    // onUnauthenticated() {
    //   redirect('/signin?callbackUrl=/protected/client');
    // },
  });

  const handleSignOut = () => {
    signOut();
  };

  return (
    <main className={styles.main}>
      {session && (
        <Box>
          <Typography variant="h2">Profile</Typography>
          <Typography variant="h5">{'Hello' + session?.user?.name}</Typography>
          <Typography variant="h5">{session?.user?.email}</Typography>
          <ButtonComponent onClick={handleSignOut}>Log out</ButtonComponent>
        </Box>
      )}
    </main>
  );
}

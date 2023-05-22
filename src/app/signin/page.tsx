'use client';

import { GoogleSignInButton, PageWrapper } from '@/components';
import styles from '../page.module.css';
import { useSession } from 'next-auth/react';

import { signIn } from 'next-auth/react';
import { Stack, Typography } from '@mui/material';

export default function SignIn() {
  const { data: session } = useSession({
    required: false,
  });

  const handleGoogleSignIn = (event: React.FormEvent<Element>) => {
    event.preventDefault();
    signIn('google', { callbackUrl: 'http://localhost:3000/' });
  };
  return (
    <main className={styles.main}>
      <PageWrapper>
        <Stack
          direction="column"
          sx={{ alignItems: 'center' }}
          spacing={2}
          maxWidth={500}
        >
          <Typography variant="h4">Sign In</Typography>
          <GoogleSignInButton onClick={handleGoogleSignIn} />
        </Stack>
        <Stack direction="row" spacing={2}></Stack>
      </PageWrapper>
    </main>
  );
}

'use client';

import { FC } from 'react';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
interface indexProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const GoogleSignInButton: FC<indexProps> = ({ onClick }) => {
  return (
    <>
      <Button
        onClick={onClick}
        variant="outlined"
        startIcon={<GoogleIcon />}
        sx={{ minWidth: '400px', py: 1 }}
        fullWidth
      >
        Sign in with Google
      </Button>
    </>
  );
};

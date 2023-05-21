'use client';

import { FC } from 'react';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/system';

interface ButtonComponentProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  variant?: 'contained' | 'text' | 'outlined';
  sx?: SxProps;
}

export const ButtonComponent: FC<ButtonComponentProps> = ({
  onClick,
  children,
  variant = 'contained',
  sx,
}) => {
  return (
    <>
      <Button sx={{ ...sx }} onClick={onClick} variant={variant}>
        {children}
      </Button>
    </>
  );
};

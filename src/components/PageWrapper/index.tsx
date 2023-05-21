'use client';

import React, { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { SxProps } from '@mui/system';

interface PageWrapperProps {
  children?: Element | undefined;
  sx?: SxProps;
}

type WrapperProps = PropsWithChildren & {
  sx?: SxProps;
};

export const PageWrapper: FC = ({ children, sx }: WrapperProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

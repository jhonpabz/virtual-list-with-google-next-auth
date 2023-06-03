'use client';

import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

interface PageWrapperProps {
  children: React.ReactNode;
}

const BoxWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <BoxWrapper>{children}</BoxWrapper>;
};

import { styled } from '@mui/material';

export const Root = styled('div')(({ theme }) => ({
  padding: 20,
  width: 600,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '100%',
  },
}));

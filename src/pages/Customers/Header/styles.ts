import { Fab, styled } from '@mui/material';

export const FabAdd = styled(Fab)(({ theme }) => ({
  position: 'absolute',
  top: 63,
  right: 100,
  [theme.breakpoints.down('sm')]: {
    top: 'unset',
    left: 'unset',
    bottom: 16,
    right: 16,
  },
}));

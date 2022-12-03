import { styled, Paper } from '@mui/material';

export const ModalPaper = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: '24',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '100%',
  },
}));

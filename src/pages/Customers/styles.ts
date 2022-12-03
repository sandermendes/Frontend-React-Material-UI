import { Divider, Fab, Grid, ListItem, Paper, styled } from '@mui/material';

export const ListItemRoot = styled(ListItem)(({ theme }) => ({
  padding: '0 25px',
  minHeight: 65,
  [theme.breakpoints.down('sm')]: {
    minHeight: 120,
  },
}));

export const RootDiv = styled('div')(({ theme }) => ({
  display: ['-webkit-box', '-webkit-flex', 'flex'],
  WebkitFlexDirection: 'column',
  flexDirection: 'column',
  minHeight: '100vh',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    minHeight: 'unset',
    height: '100vh',
  },
  [theme.breakpoints.up('xs')]: {
    '&::before, &::after': {
      content: '""',
      display: 'block',
      WebkitBoxFlex: '1',
      boxFlex: '1',
      WebkitFlexGrow: '1',
      flexGrow: '1',
    },
  }
}));

export const MainGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: '680px',
  // [theme.breakpoints.up('xs')]: {
  //   width: '480px',
  // },
  [theme.breakpoints.down('xs')]: {
    // display: 'block',
    minHeight: '100vh',
    WebkitFlexDirection: 'column',
    flexDirection: 'column',
  },
  margin: '0 auto',
  zIndex: 2,
}));

export const ContainerPaper = styled(Paper)(({ theme }) => ({
  alignItems: 'center',
  minHeight: '500px',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    padding: '25px 50px',
    position: 'relative',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: 'unset',
    WebkitFlexGrow: 1,
    flexGrow: 1,
    border: 'unset',
    background: 'unset',
    alignItems: 'unset',
  },
}));

export const CustomDivider = styled(Divider)(({ theme }) => ({
  marginBottom: 35,
  [theme.breakpoints.down('sm')]: {
    marginBottom: 0,
  }
}));

export const FabAdd = styled(Fab)(({ theme }) => ({
  position: 'absolute',
  top: 118,
  right: 62,
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    top: 'unset',
    left: 'unset',
    bottom: 16,
    right: 16,
  },
}));

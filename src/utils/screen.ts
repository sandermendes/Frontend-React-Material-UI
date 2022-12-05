import { useMediaQuery, useTheme } from '@mui/material';
import { Breakpoint } from '@mui/system/createTheme/createBreakpoints';

export const downBreakpoint = (screen: Breakpoint) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(screen));
};

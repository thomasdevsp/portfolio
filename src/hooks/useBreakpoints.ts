"use client";

import { useMediaQuery, useTheme, Breakpoint } from '@mui/material';

type BreakpointType = Breakpoint | number;

export function useBreakpoint(vln: BreakpointType | [BreakpointType, BreakpointType], isUp = false): boolean {
  const theme = useTheme();

  // Determine the MediaQuery string outside of the conditional hook call
  let mediaQueryString;
  if (Array.isArray(vln)) {
    mediaQueryString = theme.breakpoints.between(vln[0], vln[1]);
  } else {
    mediaQueryString = isUp ? theme.breakpoints.up(vln) : theme.breakpoints.down(vln);
  }

  const query = useMediaQuery(mediaQueryString);

  return query;
}

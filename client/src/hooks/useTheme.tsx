import { createTheme } from '@material-ui/core';

export default function useTheme() {
  const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#3e54a3',
        // dark: will be calculated from palette.primary.main,
        contrastText: '#FFFFFF'
      },
      secondary: {
        light: '#f9f7f3',
        main: '#FFFFFF',
        dark: 'faf8f5',
        contrastText: '#3e54a3'
        // contrastText: will be calculated to contrast with palette.primary.main
      }
    }
  });
  return theme;
}

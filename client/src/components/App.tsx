import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import useTheme from '../hooks/useTheme';
import LandingPage from './LandingPage';

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;

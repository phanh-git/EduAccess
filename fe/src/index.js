import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4254c3',
      dark: '#1a1e4d',
      contrastText: '#fff'
    },
    secondary: {
      main: '#60d394'
    },
    success: {
      main: '#60d394'
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif'
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, sans-serif',
  },
  palette: {
    primary: {
      main: '#6200EE',
    },
    secondary: {
      main: '#03DAC6',
    },
    background: {
      default: '#e0e0e0',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
    },
  },
});

export default theme;

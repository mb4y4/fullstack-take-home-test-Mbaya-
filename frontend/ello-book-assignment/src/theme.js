import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5ACCCC', // Turquoise
      light: '#CFFAFA', // Turquoise light
      dark: '#53C2C2', // Turquoise dark 1
      contrastText: '#FFFFFF', // White
    },
    secondary: {
      main: '#335C6E', // Steel Blue
      light: '#FABD33', // Yellow
      dark: '#FAAD00', // Yellow dark
      contrastText: '#FFFFFF', // White
    },
    error: {
      main: '#F76434', // Orange Red
    },
    warning: {
      main: '#FFE6DC', // Orange Pastel
    },
    info: {
      main: '#4AA088', // Teal
    },
    success: {
      main: '#28B8B8', // Turquoise dark 2
    },
    text: {
      primary: '#335C6E', // Steel Blue for primary text
      secondary: '#5ACCCC', // Turquoise for secondary text
    },
  },
  typography: {
    h4: {
      color: '#335C6E', // Steel Blue
    },
  },
});

export default theme;

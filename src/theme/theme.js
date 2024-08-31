import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b', // Culoare verde închis plăcută
    },
    secondary: {
      main: '#004d40', // Culoare verde foarte închis
    },
    background: {
      default: '#f0f4c3', // Culoare verde foarte deschis, plăcută pentru fundal
      paper: '#ffffff',
    },
    text: {
      primary: '#263238', // Text închis pentru contrast
      secondary: '#4f5b62',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 600,
      color: '#263238',
    },
    h6: {
      fontWeight: 400,
      color: '#4f5b62',
    },
    body1: {
      color: '#263238',
    },
  },
});

export default theme;
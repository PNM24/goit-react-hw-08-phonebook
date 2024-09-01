import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Albastru modern
    },
    secondary: {
      main: '#dc004e', // Roșu modern
    },
    background: {
      default: '#f4f6f8', // Gri deschis pentru fundal
    },
  },
  typography: {
    fontFamily: [
      '"Roboto"',
      '"Helvetica"',
      '"Arial"',
      'sans-serif',
    ].join(','),
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Butoane rotunjite
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16, // Carduri rotunjite
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Umbră subtilă
        },
      },
    },
  },
});

export default theme;
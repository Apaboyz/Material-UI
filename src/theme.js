import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF3C78',
    },
    secondary: {
      main: '#7C3AED',
    },
    background: {
      default: '#111113',
      paper: '#1C1C1F',
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#888',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#1C1C1F',
          border: '1px solid #2a2a2e',
        },
      },
    },
  },
});

export default theme;

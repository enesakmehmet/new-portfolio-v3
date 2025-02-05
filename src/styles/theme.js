import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5722',
      light: '#ff784e',
      dark: '#c41c00',
    },
    secondary: {
      main: '#1E1E1E',
      light: '#484848',
      dark: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f8f8',
      dark: '#1E1E1E',
      orange: '#FF5722',
    },
    text: {
      primary: '#1E1E1E',
      secondary: '#666666',
      light: '#ffffff',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2rem',
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 30,
          padding: '10px 24px',
          fontSize: '1rem',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1200px',
          padding: '0 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
  shape: {
    borderRadius: 16,
  },
}); 
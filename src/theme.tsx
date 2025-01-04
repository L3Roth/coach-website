import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#667A61', // Gold Green
    },
    secondary: {
      main: '#E7B206', // Orange Gold
    },
    background: {
      default: '#FFF9D8', // Light Beige
      paper: '#FFF9D8',
    },
    text: {
      primary: '#6E6343', // Beige Substitute
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;

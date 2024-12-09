// theme.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff0000',
      light: '#ff0000'
       // Aydınlık tema için ana mavi renk
    },
    background: {
      default: '#ffffff', // Aydınlık tema için varsayılan arka plan rengi
      paper: '#f5f5f5', // Aydınlık tema için kağıt rengi
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Karanlık tema için ana mavi renk
    },
    background: {
      default: '#121212', // Karanlık tema için varsayılan arka plan rengi
      paper: '#424242', // Karanlık tema için kağıt rengi
    },
  },
});
'use client';

import {createTheme} from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    primary: {
      main: '#96513e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3e8396',
      contrastText: '#e0e0e0'
    },
    background: {
      paper: '#fff',
      default: '#ddd'
    },
    type: 'light'
  },
  typography: {
    fontFamily: 'Questrial',
    p: {
      fontSize: 18
    }
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 700
        }
      }
    }
  }
});


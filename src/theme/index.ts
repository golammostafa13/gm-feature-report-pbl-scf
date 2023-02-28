import {createTheme} from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: '#47B5FF',
      main: '#06283D',
      dark: '#256D85',
      contrastText: '#fff',
    },
    secondary: {
      main: '#4db6ac',
      light: '#82e9de',
      dark: '#00867d',
      contrastText: '#000',
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          minHeight: 32
        }
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '1em'
        }
      }
    }
  },
});

export default theme
export type ThemeType = typeof theme

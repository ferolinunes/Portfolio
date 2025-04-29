import { createTheme, responsiveFontSizes } from '@mui/material/styles';
// import { green, purple } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: "#9b7ebd",
    },
    secondary: {
      main: "#d4bee4",
    },
  },
  typography: {
    fontFamily: "cursive"
  }
});

theme = responsiveFontSizes(theme);

export default theme;
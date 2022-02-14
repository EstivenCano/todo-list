import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#00A6FB",
      main: "#0582CA",
      dark: "#006494",
    },
    secondary: {
      light: "#B7094C",
      main: "#A01A58",
      dark: "#892B64",
    },
    background: {
      default: "#282c34",
      paper: "#424242",
    },
  },
  typography: {
    fontFamily: "Yanone Kaffeesatz, sans-serif",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default theme;

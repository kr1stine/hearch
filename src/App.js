import React from "react";

import Box from "@material-ui/core/Box";
import Product from "./components/Product";
import NavigationBar from "components/NavigationBar";
import HeaderSection from "components/HeaderSection";

import { mockProduct } from "./mock-data";

import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

function App() {
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavigationBar></NavigationBar>
        <div className={classes.app}>
          <div className={classes.content}>
            <HeaderSection></HeaderSection>
            <Product product={mockProduct}></Product>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: "center",
    backgroundColor: "#f4f4ed",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "rgba(0,0,0,0.87)",
  },
  content: {
    padding: "0 16px",
    minHeight: "100vh",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#eecfdd",
      main: "#EAC4D5",
      dark: "#a38995",
      contrastText: "#000",
    },
    secondary: {
      light: "#c6e6db",
      main: "#B8E0D2",
      dark: "#809c93",
      contrastText: "#000",
    },
  },
});

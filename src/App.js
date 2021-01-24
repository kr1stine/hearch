import { useEffect, useState } from "react";
import { getSubtitles } from "youtube-captions-scraper";

import Box from "@material-ui/core/Box";
import Product from "./components/Product";
import NavigationBar from "components/NavigationBar";
import HeaderSection from "components/HeaderSection";

import { mockProduct } from "./mock-data";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

function App() {
  const [captions, setCaptions] = useState([]);

  useEffect(() => {
    getSubtitles({
      videoID: "B6edjW4ewYo", // youtube video id
      lang: "en", // default: `en`
    }).then((resp) => {
      console.log(resp);
      setCaptions(resp);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavigationBar></NavigationBar>
        <div className="App">
          <HeaderSection></HeaderSection>
          <Product product={mockProduct}></Product>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;

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

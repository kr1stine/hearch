import logo from "assets/logo_size_invert.jpg";
import "./App.css";
import { useEffect, useState } from "react";
import { getSubtitles } from "youtube-captions-scraper";
import Product from "./components/Product";
import { mockProduct } from "./mock-data";
import Box from "@material-ui/core/Box";
import NavigationBar from "components/NavigationBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
      light: "#f8bef9",
      main: "#F7AEF8",
      dark: "#ac79ad",
      contrastText: "#000",
    },
    secondary: {
      light: "#99a8f3",
      main: "#8093F1",
      dark: "#5966a8",
      contrastText: "#000",
    },
  },
});

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getSubtitles } from "youtube-captions-scraper";
import Product from "./components/Product";
import { mockProduct } from "./mock-data";
import Box from "@material-ui/core/Box";

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
    <Box>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Product product={mockProduct}></Product>
        </header>
      </div>
    </Box>
  );
}

export default App;

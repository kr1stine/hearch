import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { getSubtitles } from "youtube-captions-scraper";
import VideoList from "./components/VideoList";

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <VideoList></VideoList>
      </header>
    </div>
  );
}

export default App;

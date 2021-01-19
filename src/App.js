import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { getSubtitles } from 'youtube-captions-scraper';

function App() {
  const KEY = "AIzaSyDSAQ3Z7PJvOJs0B28kyjkuwc88_IY5_Ac";
  const req = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
    }
  })
  const [captions, setCaptions] = useState([]);

  useEffect(() => {
    getSubtitles({
      videoID: 'B6edjW4ewYo', // youtube video id
      lang: 'en' // default: `en`
    }).then(resp => {
      console.log(resp);
      setCaptions(resp)
    });
  }, []); 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {captions}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

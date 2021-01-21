import React, { useEffect, useState, Fragment } from "react";
import { mockVideos } from "../mock-data";

const VideoList = () => {
  const [videos, setVideos] = useState(mockVideos);
  const [captions, setCaptions] = useState([]);

  useEffect(() => {
    /*     getSubtitles({
      videoID: "B6edjW4ewYo", // youtube video id
      lang: "en", // default: `en`
    }).then((resp) => {
      console.log(resp);
      setCaptions(resp);
    }); */
  }, []);

  var player;
  /*   function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "390",
      width: "640",
      videoId: "M7lc1UVf-VE",
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  } */

  const getVideoUrl = (id, start) => {
    return `https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com&start=${start}`;
  };

  return (
    <Fragment>
      {videos.length &&
        videos.map((video) => (
          <iframe
            key={video.id}
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={getVideoUrl(video.id, video.start)}
            frameBorder="0"
          ></iframe>
        ))}
    </Fragment>
  );
};

export default VideoList;

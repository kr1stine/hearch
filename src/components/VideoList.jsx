import React, { Fragment } from "react";

const VideoList = ({ videos }) => {
  const getVideoUrl = (id, start) => {
    return `https://www.youtube.com/embed/${id}?autoplay=0&origin=http://example.com&start=${start}`;
  };

  return (
    <Fragment>
      {videos &&
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

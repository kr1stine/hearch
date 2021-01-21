import React, { useEffect, useState, Fragment } from "react";
import { mockProduct } from "../mock-data";
import VideoList from "./VideoList";

const Product = ({ product }) => {
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

  return (
    <Fragment>
      {product.brand} {product.name}
      <VideoList videos={product.videos}></VideoList>
    </Fragment>
  );
};

export default Product;

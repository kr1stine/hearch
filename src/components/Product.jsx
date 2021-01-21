import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import VideoList from "./VideoList";
import ProductDescription from "./ProductDescription";

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
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={3}>
        <ProductDescription product={product}></ProductDescription>
      </Grid>
      <Grid item xs={9}>
        <VideoList videos={product.videos}></VideoList>
      </Grid>
    </Grid>
  );
};

export default Product;

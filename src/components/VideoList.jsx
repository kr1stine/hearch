import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: "#282c34",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
}));

const VideoList = ({ videos }) => {
  const classes = useStyles();
  const cellHeight = 200;
  const getVideoUrl = (id, start) => {
    return `https://www.youtube.com/embed/${id}?autoplay=0&origin=http://example.com&start=${start}`;
  };

  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        cols={2.5}
        cellHeight={cellHeight}
        spacing={0}
      >
        {videos &&
          videos.map((video) => (
            <GridListTile key={video.id}>
              <iframe
                key={video.id}
                id="ytplayer"
                type="text/html"
                width="auto"
                height={cellHeight}
                src={getVideoUrl(video.id, video.start)}
                frameBorder="0"
              ></iframe>
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};

export default VideoList;

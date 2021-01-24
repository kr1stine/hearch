import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

const HeaderSection = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      hear what <span className={classes.focused}>they</span> said about it
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    alignSelf: "flex-start",
    textAlign: "left",
    fontSize: "44px",
    fontWeight: "bolder",
    color: `${theme.palette.primary.main}`,
    padding: "16px 0",
  },
  focused: {
    color: `${theme.palette.primary.dark}`,
  },
}));

export default HeaderSection;

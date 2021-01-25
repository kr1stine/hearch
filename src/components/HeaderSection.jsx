import React, { Fragment } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

const HeaderSection = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        hear what <span className={classes.focused}>they</span> said about it
      </div>
      <div className={classes.actionBar}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Button variant="outlined">Primer</Button>
        <Button variant="outlined">Foundation</Button>
        <Button variant="outlined">Mascara</Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: "flex-start",
    textAlign: "left",
    margin: "32px 0",
  },
  title: {
    width: "30%",
    fontSize: "44px",
    fontWeight: "bolder",
    color: `${theme.palette.primary.main}`,
    marginBottom: "16px",
  },
  focused: {
    color: `${theme.palette.primary.dark}`,
  },
  actionBar: {
    display: "flex",
    "& > *": {
      marginRight: "8px",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "20%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default HeaderSection;

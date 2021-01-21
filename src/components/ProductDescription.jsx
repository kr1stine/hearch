import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

const ProductDescription = ({ product }) => {
  const classes = useStyles();
  const fullName = `${product.brand} ${product.name}`;

  return (
    <Fragment>
      <img
        src={product.amazon_img}
        alt={fullName}
        className={classes.image}
      ></img>
      <div className={classes.descrpition}>{fullName}</div>
    </Fragment>
  );
};

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

export default ProductDescription;

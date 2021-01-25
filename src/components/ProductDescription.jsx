import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const ProductDescription = ({ product }) => {
  const props = { productImage: `${product.amazon_img}` };
  const classes = useStyles(props);
  const fullName = `${product.brand} ${product.name}`;

  return (
    <div className={classes.root}>
      <div className={classes.descrpition}>
        <Typography
          variant="overline"
          display="block"
          gutterBottom
          className={classes.brandName}
        >
          {product.brand}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          className={classes.productName}
        >
          {product.name}
        </Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: "100px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: "#282c34",
    backgroundImage: (props) => `url(${props.productImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "250px",
  },
  descrpition: {
    backgroundColor: "rgba(255,255,255,0.8)",
    height: "min-content",
    alignSelf: "center",
    width: "100%",
    padding: "8px 0",
  },
}));

export default ProductDescription;

import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
// import Rating from "@material-ui/core/Rating";
import { Rating, Button, Card } from "@mui/material/";

function Product({ product }) {
  return (
    <Card variant="outlined" className="product" key={product.id}>
      <img src={product.image} alt={product.title} />
      <div className="details">
        <Link to={`/products/${product.id}`}>{product.title}</Link>
        <br />
        <span>{product.description.split(".")[0]}</span>
        <br />
        <span className="ratingContent">
          <Rating
            name="customized-color"
            value={product.rating.rate}
            readOnly
          />
          <span id="ratingCount">{product.rating.count}</span>
        </span>
        <br />
        <Link to={`/products/${product.id}`}>
          <Button variant="outlined">${product.price}</Button>
        </Link>
      </div>
    </Card>
  );
}

export default Product;

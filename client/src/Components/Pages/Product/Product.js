import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Rating, Button, Card } from "@mui/material/";

import Header from "../../Components/Header/Header";

import { getProductById } from "../../../Redux/Actions/productActions";
import {
  setProductInCart,
  removeProductFromCart,
} from "../../../Redux/Actions/cartActions";

import "./Product.css";

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.products);
  const [btnText, setBtnText] = useState("");

  let cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getProductById(id));
    cart.map((item) => {
      if (item.id === id) {
        setBtnText("Add To Cart");
      } else {
        setBtnText("Remove From Cart");
      }
    });
  }, []);

  const addProductToCart = (product) => {
    if (cart.length > 0) {
      const productExist = cart.map((item) => {
        if (item.id === product.id) {
          dispatch(removeProductFromCart(product.id));
          setBtnText("Add To Cart");
        } else {
          dispatch(setProductInCart(product));
          setBtnText("Remove From Cart");
        }
      });
      console.log(productExist);
    } else {
      dispatch(setProductInCart(product));
      setBtnText("Remove From Cart");
    }
  };

  return (
    <>
      <Header />
      {product === null ? (
        <h1>Product Not Found</h1>
      ) : (
        <Card variant="outlined" className="Card">
          <img src={product.image} alt={product.title} id="cardImg" />
          <Card variant="outlined" className="Card2">
            <p>{product.title}</p>
            <br />
            <span>{product.description}</span>
            <br />
            {product.rating && (
              <span className="ratingContent">
                <Rating
                  name="customized-color"
                  value={product.rating.rate}
                  readOnly
                />
                <br />
                <span id="ratingCount">{product.rating.count}</span>
              </span>
            )}
            <br />
            <Button
              variant="outlined"
              onClick={() => {
                addProductToCart(product);
              }}
            >
              {btnText || "Add To Cart"}
            </Button>
          </Card>
        </Card>
      )}
    </>
  );
}

export default Product;

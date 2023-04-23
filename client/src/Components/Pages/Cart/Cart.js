import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import Product from "../../Components/Products/Product/Product";

import { Button } from "@mui/material/";
import { Link } from "react-router-dom";

import "./Cart.css";

function Cart() {
  const products = useSelector((state) => state.cart);

  return (
    <>
      <Header />
      {products.length === 0 ? <h1>NO PRODUCTS TO SHOW !</h1> : ""}

      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {products.length === 0 ? (
        ""
      ) : (
        <Link to="/checkout">
          <Button id="buyNowBtn" variant="outlined">
            Buy Now
          </Button>
        </Link>
      )}
    </>
  );
}

export default Cart;

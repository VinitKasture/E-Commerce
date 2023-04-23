import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product/Product";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from "../../../Redux/Actions/productActions";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="productContainer">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;

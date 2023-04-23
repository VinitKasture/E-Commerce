import axios from "axios";

import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID } from "./type";

export const getAllProducts = () => async (dispatch) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  dispatch({ type: GET_ALL_PRODUCTS, payload: response.data });
};

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      dispatch({ type: GET_PRODUCT_BY_ID, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

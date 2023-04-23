import axios from "axios";

import { SET_PRODUCT_IN_CART, REMOVE_PRODUCT_FROM_CART } from "./type";

export const setProductInCart = (product) => (dispatch) => {
  console.log("product from action", product);
  return dispatch({ type: SET_PRODUCT_IN_CART, payload: product });
};

export const removeProductFromCart = (id) => (dispatch) => {
  return dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: id });
};

import * as actionTypes from "../Actions/type";

const cartReducers = (state = [], action) => {
  switch (action.type) {
    case "SET_PRODUCT_IN_CART":
      return [...state, action.payload];
    case "REMOVE_PRODUCT_FROM_CART":
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducers;

import * as actionTypes from "../Actions/type";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return action.payload;
    case "GET_PRODUCT_BY_ID":
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;

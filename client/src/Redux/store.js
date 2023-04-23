import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import productReducer from "./Reducers/productReducers";
import cartReducers from "./Reducers/cartReducers";

const allReducers = combineReducers({
  products: productReducer,
  cart: cartReducers,
});

const middleware = [thunk];

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

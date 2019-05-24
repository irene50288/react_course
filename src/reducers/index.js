import { combineReducers } from "redux";
import catalog from './Catalog';
import product from './Product';
import cart from './Cart';

export default combineReducers({
  catalog,
  product,
  cart
})

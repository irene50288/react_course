import {combineReducers} from 'redux';
import catalog from './Catalog';
import cart from './Cart';
import product from './Product';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  catalog,
  cart,
  product,
  form: formReducer,
});

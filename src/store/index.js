import {createStore, applyMiddleware} from 'redux';
import APImiddleware from 'middleware/API'
import CartMiddleware from 'middleware/Cart'
import reducers from 'reducers';

export default function(INITIAL_STATE = {}) {
  return createStore(
    reducers,
    INITIAL_STATE,
    applyMiddleware(APImiddleware, CartMiddleware)
  );

}


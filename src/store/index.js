import {createStore, applyMiddleware} from 'redux';
import APImiddleware from 'middleware/API'
import CartMiddleware from 'middleware/Cart'
import reducers from 'reducers';

const store = createStore(reducers, applyMiddleware(APImiddleware, CartMiddleware));

export default store;

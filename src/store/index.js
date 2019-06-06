import {createStore, applyMiddleware} from 'redux';
import APImiddleware from '~src/middleware/API'
import CartMiddleware from '~src/middleware/Cart'
import reducers from '~src/reducers';

const store = createStore(reducers, applyMiddleware(APImiddleware, CartMiddleware));

export default store;

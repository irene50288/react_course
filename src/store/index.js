import {createStore, applyMiddleware} from 'redux';
import APImiddleware from '~src/middleware/API';
import CartMiddleware from '~src/middleware/Cart';
import FakeAPImiddleware from '~src/middleware/FakeAPI';
import reducers from '~src/reducers';

const store = createStore(reducers, applyMiddleware(APImiddleware, FakeAPImiddleware, CartMiddleware));

export default store;

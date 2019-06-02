import {createStore, applyMiddleware} from 'redux';
import APImiddleware from '~src/middleware/API'
import LocalStorageMiddleware from '~src/middleware/LocalStorage'
import reducers from '~src/reducers';

const store = createStore(reducers, applyMiddleware(APImiddleware, LocalStorageMiddleware));

export default store;

import * as types from '~src/constants/actionTypes/CartActionTypes';

function saveState(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('cart', serialisedState);
  } catch (e) {
    console.log('error occured', e)
  }
}

function loadState() {
  try {
    const serializedState = localStorage.getItem('cart');

    if (serializedState == null)
      return [];

    return JSON.parse(serializedState);
  } catch (e) {
    console.log('error occured', e)
    return [];
  }
}

export default store => next => action => {

  const actions = [types.ADD_TO_CART, types.REMOVE_FROM_CART, types.LOAD_CART_STATE]

  if (!actions.includes(action.type) )
    return next(action);

  if(action.type === types.LOAD_CART_STATE) {
    const products = loadState();
    return next(Object.assign({}, action, { products }))
  }

  next(action);
  saveState(store.getState().cart.products);

  return;
}
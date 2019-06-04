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

function nextAction (action, callback) {
  const newAction = Object.assign({}, action, { callback })
  return newAction
}

export default store => next => action => {

  const actions = [types.ADD_TO_CART, types.REMOVE_FROM_CART, types.LOAD_CART_STATE]

  if (!action.type in actions )
    return next(action);

  if(action.type === types.ADD_TO_CART || action.type === types.REMOVE_FROM_CART)
    return next(nextAction(action, saveState))

  if(action.type === types.LOAD_CART_STATE)
    return next(nextAction(action, loadState))

  return next(action)
}
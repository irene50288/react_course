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

function nextAction (action, products) {
  const newAction = Object.assign({}, action, { products })
  return newAction
}

export default store => next => action => {

  const actions = [types.ADD_TO_CART, types.REMOVE_FROM_CART, types.LOAD_CART_STATE]

  if (!action.type in actions )
    return next(action);

  let products = store.getState().cart.products;

  switch(action.type){
    case types.ADD_TO_CART:
      products.push(action.product)
      break;

    case types.REMOVE_FROM_CART:
      products = products.filter((product) => {
        return product.id !== action.id;
      })
      break;

    case types.LOAD_CART_STATE:
      products = loadState()
  }

  saveState(products)
  return next(nextAction(action, products))
}
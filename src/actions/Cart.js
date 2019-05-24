import * as types from '../constants/actionTypes/CartActionTypes';

const addToCart = (product) => ({
  type: types.ADD_TO_CART,
  product
})

const removeFromCart = (product) => ({
  type: types.REMOVE_FROM_CART,
  product
})

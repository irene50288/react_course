import * as types from 'constants/actionTypes/CartActionTypes';

export const addToCart = (product) => ({
  type: types.ADD_TO_CART,
  product,
});

export const removeFromCart = (id) => ({
  type: types.REMOVE_FROM_CART,
  id,
});

export const loadCartState = () => ({
    type: types.LOAD_CART_STATE
})
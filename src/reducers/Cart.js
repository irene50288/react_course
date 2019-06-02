import * as types from '~src/constants/actionTypes/CartActionTypes';

const initialState = {
  products: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        products: action.products,
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        products: action.products,
      };
    case types.LOAD_CART_STATE:
      return {
        ...state,
        products: action.products,
      }
    default:
      return state;
  }
}

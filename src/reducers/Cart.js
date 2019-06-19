import * as types from 'constants/actionTypes/CartActionTypes';

const initialState = {
  products: [],
};

export default function(state = initialState, action) {
  let products = [];
  switch (action.type) {
    case types.ADD_TO_CART:
      products = [...state.products, action.product]
      return {
        ...state,
        products,
      };
    case types.REMOVE_FROM_CART:
      products = state.products.filter((product) => {
        return product.id !== action.id;
      });
      return {
        ...state,
        products,
      };
    case types.LOAD_CART_STATE:
      return {
        ...state,
        products: action.products,
      };
    case types.CLEAR_CART:
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
}

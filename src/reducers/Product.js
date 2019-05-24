import * as types from '../constants/actionTypes/ProductActionTypes';

const initialState = {
  product: {},
  isFetching: false,
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_PRODUCT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case types.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        products: action.product
      }
    default:
      return state;
  }
}
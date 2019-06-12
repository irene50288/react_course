import * as types from 'constants/actionTypes/ProductActionTypes';
import { changeProduct } from 'helpers/dataStructureHelper';

const initialState = {
  product: null,
  isFetching: false,
  error: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_PRODUCT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case types.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        product: changeProduct(action.response),
      };
    default:
      return state;
  }
}

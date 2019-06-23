import * as cartTypes from '~src/constants/actionTypes/CartActionTypes';
import * as types from '~src/constants/actionTypes/OrderActionTypes';
import { FAKE_API_CALL } from '~src/middleware/FakeAPI';

export const makeOrder = (values) => {
  return {
    [FAKE_API_CALL]: {
      data: values,
      types: [
        types.MAKE_ORDER_REQUEST,
        cartTypes.CLEAR_CART,
        types.MAKE_ORDER_ERROR
      ]
    }
  }
}
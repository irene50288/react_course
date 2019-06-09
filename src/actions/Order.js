import * as types from '~src/constants/actionTypes/CartActionTypes';

export const makeOrder = (order) => {
  // there is no API for POST request, that's why I use alert to show order object
  alert(JSON.stringify(order));

  // if I had API for post, I would clear the cart on success, now I just call it here
  return {
    type: types.CLEAR_CART
  }
};

// makeOrder should send POST request and look like this:
// export function makeOrder(order) {
//   return {
//     [API_CALL]: {
//       endpoint: '/orders',
//       method: 'POST',
//       query: {'content_type': contentType},
//       send: order,
//       types: [
//         types.MAKE_ORDER_REQUEST,
//         types.MAKE_ORDER_SUCCESS,
//         types.MAKE_ORDER_ERROR
//       ]
//     }
//   }
// }

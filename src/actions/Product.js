import * as types from '~src/constants/actionTypes/ProductActionTypes';
import { API_CALL } from "~src/middleware/API";
import {contentType} from "../constants/URLs/URLs";

export function fetchProduct(id) {
  return {
    [API_CALL]: {
      endpoint: `/${id}`,
      method: 'GET',
      query: {'content_type': contentType},
      types: [
        types.FETCH_PRODUCT_REQUEST,
        types.FETCH_PRODUCT_SUCCESS,
        types.FETCH_PRODUCT_ERROR
      ]
    }
  }
}
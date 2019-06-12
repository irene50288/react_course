import * as types from '/constants/actionTypes/ProductActionTypes';
import { API_CALL } from "/middleware/API";
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
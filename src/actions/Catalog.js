import * as types from '~src/constants/actionTypes/ProductsActionTypes';
import { API_CALL } from "~src/middleware/API";
import {contentType} from "../constants/URLs/URLs";

export function fetchCatalog() {
  return {
    [API_CALL]: {
      endpoint: '/',
      method: 'GET',
      query: {'content_type': contentType},
      types: [
        types.FETCH_PRODUCTS_REQUEST,
        types.FETCH_PRODUCTS_SUCCESS,
        types.FETCH_PRODUCTS_ERROR
      ]
    }
  }
}
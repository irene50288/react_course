import * as types from '../constants/actionTypes/ProductsActionTypes';
import request from "superagent";


const requestProducts = () => ({
  type: types.FETCH_PRODUCTS_REQUEST
})

const receiveProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS_SUCCESS,
    products
  }

}

const errorProducts = () => ({
  type: types.FETCH_PRODUCTS_ERROR
})

export function fetchCatalog() {
  return (dispatch) => {
    dispatch(requestProducts());

    const baseUrl='https://cdn.contentful.com';
    const spaceId = 'evvw70z7j51e';
    const environmentId = 'master';
    const space = `/spaces/${spaceId}/environments/${environmentId}/entries`;
    const accessToken = 'DRSTaz_G-W7m1ZLYSww4ezL5IFavrw4RxeZrOJFPIqw';
    const contentType = 'product';
    return request
      .get(baseUrl+space)
      .query({ 'content_type': contentType })
      .set('Authorization', `Bearer ${accessToken}`)
      .then(({ body: { items } }) => {
        const products = [];
        items.map((item) =>{
          //the id of the product is inside item.sys.id
          const product = Object.assign(item.fields);
          product.id = item.sys.id;
          products.push(product);
        })

        dispatch(receiveProducts(products));
      })
      .catch(error => {
        dispatch(errorProducts());
      })
  }
}
import React from 'react';
import {productPath} from 'helpers/routes';
import ProductPageContainer from 'components/containers/ProductPageContainer';
import {fetchProduct} from 'actions/Product';

export default {
  path: productPath(),
  exact: true,
  strict: true,
  component: ProductPageContainer,
  prepareData: (store, params) => {
    console.log('product prepare data params:', params)
    store.dispatch(fetchProduct(params.id));
  },
};

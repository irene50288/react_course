import React from 'react';
import {productPath} from '~src/helpers/routes';
import ProductPageContainer from '~src/components/containers/ProductPageContainer';
import {fetchProduct} from '~src/actions/Product';

export default {
  path: productPath(),
  exact: true,
  strict: true,
  component: ProductPageContainer,
  prepareData: (store, params) => {
    store.dispatch(fetchProduct(params.id));
  },
};

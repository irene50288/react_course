import React from 'react';
import {productPath} from '~src/helpers/routes';
import ProductPage from '~src/components/pages/Catalog/ProductPage';

export default {
  path: productPath(),
  exact: true,
  strict: true,
  render: ({match}) => {
    return (
      <ProductPage productId={match.params.id} />
    );
  },
};

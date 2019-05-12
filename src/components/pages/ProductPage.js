import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import Products from '../../constants/Products';

class ProductPage extends Component {

  render() {
    const product = Products.find(product => {
      return product.id == this.props.productId;
    });
    return(
      <ProductCard product={product} />
    )
  }
};

// ProductPage.propTypes = {
//   productId: PropTypes.number.isRequired
// }

export default ProductPage;
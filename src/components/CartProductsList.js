import CartProductCard from "./CartProductCard";
import React, {Component} from "react";
import PropTypes from 'prop-types';

class CartProductsList extends Component {

  render() {
    const products = this.props.products;
    return (
      <ul>
        {
          products.map(product => {
            return <li key = {product.id}><CartProductCard product={product}/></li>
          })
        }
      </ul>
    )
  }
}

CartProductsList.propTypes = {
  products: PropTypes.array.isRequired
};

export default CartProductsList;

import CartProductCardContainer from '/components/containers/CartProductCardContainer';
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { orderPagePath } from '/helpers/routes';

class CartProductsList extends Component {
  render() {
    const products = this.props.products;
    return (
      <Fragment>
        <ul>
          {
            products.map((product) => {
              return <li key = {product.id}><CartProductCardContainer product={product}/></li>;
            })
          }
        </ul>
        <Link to={orderPagePath()}>Proceed to order</Link>
      </Fragment>
    );
  }
}

CartProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default CartProductsList;

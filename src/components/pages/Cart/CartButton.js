import React, {Component} from 'react';
import {cartPagePath} from '~src/helpers/routes';
import {withRouter} from 'react-router';

class CartButton extends Component {
  componentDidMount() {
    this.props.loadCartState();
  }

  render() {
    return (
      <button onClick={() => {
        this.props.history.push(cartPagePath());
      }} className='cartButton'>
        Cart
        <span className='counter'>{this.props.cartProducts.length}</span>
      </button>

    );
  }
}

export default withRouter(CartButton);

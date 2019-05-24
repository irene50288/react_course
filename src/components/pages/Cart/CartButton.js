import React, { Component } from "react";
import cartContext from '~src/helpers/contexts/CartContext';
import {cartPagePath} from "~src/helpers/routes";
import { withRouter } from "react-router";

class CartButton extends Component {

  render() {
    return (
      <button onClick={() => {this.props.history.push(cartPagePath())}} className='cartButton'>
        Cart
        <cartContext.Consumer>
          {
            ({cartProducts, addToCart, removeFromCart}) => (
              <span className='counter'>{cartProducts.length}</span>
            )
          }
        </cartContext.Consumer>
      </button>

    )
  }
}

export default withRouter(CartButton);
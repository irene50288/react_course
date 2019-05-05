import React, { Component } from "react";
import cartContext from '../CartContext';

class Cart extends Component {
  render() {
    return (
      <button className='cartButton'>
        Cart
        <cartContext.Consumer>
          {
            ({cartProducts, addToCart}) => (
              <span className='counter'>{cartProducts.length}</span>
            )
          }
        </cartContext.Consumer>
      </button>
    )
  }
}

export default Cart;
import React, { Component } from "react";
import cartContext from '../../CartContext';
import {cartPagePath} from "../helpers/routes";
import { withRouter } from "react-router";

class CartButton extends Component {

  render() {
    console.log('props in render', this.props);
    return (
        <cartContext.Consumer>
          {
            ({cartProducts, addToCart}) => (
              <button onClick={() => {this.props.history.push(cartPagePath(), {products: cartProducts})}} className='cartButton'>
                Cart
                <span className='counter'>{cartProducts.length}</span>
              </button>
            )
          }
        </cartContext.Consumer>
    )
  }
}

export default withRouter(CartButton);
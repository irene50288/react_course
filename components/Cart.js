import React, { Component } from "react";
import cartContext from '../CartContext';

class Cart extends Component {

  render() {
    return (
        <cartContext.Consumer>
          {
            ({cartProducts, addToCart}) => (
              <button
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const data = e.dataTransfer.getData('text/JSON');
                  addToCart(JSON.parse(data));
                }}
                style={{height: '100px', width: '100px'}}>
                Cart
                  <span className='counter'>{cartProducts.length}</span>
              </button>
            )
          }
        </cartContext.Consumer>



    )
  }
}

export default Cart;
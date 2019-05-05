import React, { Component } from "react";
import CatalogPage from './CatalogPage';
import cartContext from "../CartContext";

class CartContainer extends Component {

  constructor(props) {
    super(props);

    this.addToCart = (product, amount) => {
      var productsToAdd = [];
      for (let i=0; i<amount; i++) {
        productsToAdd.push(product);
      }
      this.setState(state => ({
        cartProducts: [...state.cartProducts, ...productsToAdd]
      }));
    }

    this.state = {
      cartProducts: [],
      addToCart: this.addToCart
    }
  }

  render() {
    const { children } = this.props;
    return (
      <cartContext.Provider value={this.state}>
        {children}
      </cartContext.Provider>
    )

  }
}

export default CartContainer;
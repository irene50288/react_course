import React, { Component } from "react";
import CatalogPage from './CatalogPage';
import cartContext from "../CartContext";

class CartComntainer extends Component {

  constructor(props) {
    super(props);

    this.addToCart = (product, amount=1) => {
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

  getCartProducts() {
    return this.state.cartProducts;
  }

  render() {
    return (
      <cartContext.Provider value={this.state}>
        <CatalogPage/>
      </cartContext.Provider>
    )

  }
}

export default CartComntainer;
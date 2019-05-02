import Products from "../constants/Products";
import Catalog from "./Catalog";
import React, { Component, Fragment } from "react";
import Cart from './Cart';
import cartContext from "../CartContext";

class CatalogPage extends Component {
  constructor(props) {
    super(props);

    this.addToCart = (product, amount = 1) => {
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
    const products = Products;
    return (
      <cartContext.Provider value={this.state}>
          <Catalog products={products}/>
          <Cart/>
      </cartContext.Provider>
    )
  }

}

export default CatalogPage;
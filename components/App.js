import React, { Component } from 'react';
import CartContainer from "./CartContainer";
import CatalogPage from "./CatalogPage";

export default class App extends Component {
  render() {
    return (
      <CartContainer>
        <CatalogPage/>
      </CartContainer>
    )
  }

}
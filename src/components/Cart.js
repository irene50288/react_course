import React, { Component } from "react";
import {Redirect, withRouter} from "react-router";
import Catalog from "./Catalog";
import {mainPath} from "../helpers/routes";

class Cart extends Component {
  render() {
    var products;
    if (this.props.location.state)
      products = this.props.location.state.products;
    else
      products = [];
    return (
      products.length > 0
      ?
        <Catalog products={products}/>
      :
        <Redirect to={{
          pathname: mainPath(),
          state: {message: 'Your cart is empty'}
        }}/>
    )
  }
}

export default withRouter(Cart);
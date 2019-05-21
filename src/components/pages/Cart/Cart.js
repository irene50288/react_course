import React, { Component } from "react";
import {Redirect, withRouter} from "react-router";
import CartProductsList from './CartProductsList';
import {mainPath} from "../../../helpers/routes";
import cartContext from "../../../helpers/contexts/CartContext";

const Cart = () => {
  return(
    <cartContext.Consumer>
      {
        ({cartProducts, addToCart, removeFromCart}) => (
          cartProducts.length > 0
            ?
            <CartProductsList products={cartProducts}/>
            :
            <Redirect to={{
              pathname: mainPath(),
              state: {message: 'Your cart is empty'}
            }}/>
        )
      }
    </cartContext.Consumer>
  )
}

export default Cart;
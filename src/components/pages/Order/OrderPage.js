import React, {Component, Fragment} from 'react';
import OrderSummary from "./OrderSummary";
import OrderForm from './OrderForm';
import {Redirect} from "react-router";
import { mainPath } from "~src/helpers/routes";

class OrderPage extends Component {
  render() {
    return (
      this.props.cartProducts.length > 0
      ?
        <Fragment>
          <OrderSummary products={this.props.cartProducts}/>
          <OrderForm/>
        </Fragment>
      :
        <Redirect to={{
          pathname: mainPath(),
          state: {message: 'Your cart is empty'},
        }}/>
    )
  }
}

export default OrderPage;
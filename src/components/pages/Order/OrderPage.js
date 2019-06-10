import React, {Component, Fragment} from 'react';
import OrderSummary from "./OrderSummary";
import OrderForm from './OrderForm';

class OrderPage extends Component {
  render() {
    return (
      <Fragment>
        <OrderSummary products={this.props.cartProducts}/>
        <OrderForm/>
      </Fragment>
    )
  }
}

export default OrderPage;
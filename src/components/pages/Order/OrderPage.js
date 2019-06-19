import React, {Component, Fragment} from 'react';
import OrderSummary from "./OrderSummary";
import OrderForm from './OrderForm';
import Helmet from 'react-helmet';

class OrderPage extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>
            Order
          </title>
        </Helmet>
        <OrderSummary products={this.props.cartProducts}/>
        <OrderForm/>
      </Fragment>
    )
  }
}

export default OrderPage;
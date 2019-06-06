import React, { Component } from 'react';
import {Redirect, withRouter} from 'react-router';
import CartProductsList from './CartProductsList';
import {mainPath} from '~src/helpers/routes';

class Cart extends Component {

  componentDidMount() {
    this.props.loadCartState();
  }

  render() {
    return (
      this.props.cartProducts.length > 0
        ?
        <CartProductsList products={this.props.cartProducts}/>
        :
        <Redirect to={{
          pathname: mainPath(),
          state: {message: 'Your cart is empty'},
        }}/>
    )
  }

};

export default withRouter(Cart);

import React, {Component, Fragment} from 'react';
import {Redirect, withRouter} from 'react-router';
import CartProductsList from './CartProductsList';
import {mainPath} from 'helpers/routes';
import Helmet from 'react-helmet';

class Cart extends Component {

  render() {
    return (
      this.props.cartProducts.length > 0
        ?
        <Fragment>
          <Helmet>
            <title>
              Cart
            </title>
          </Helmet>
          <CartProductsList products={this.props.cartProducts}/>
        </Fragment>
        :
        <Redirect to={{
          pathname: mainPath(),
          state: {message: 'Your cart is empty'},
        }}/>
    )
  }

};

export default withRouter(Cart);

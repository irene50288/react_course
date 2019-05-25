import React, {Component} from 'react';
import cartContext from '~src/helpers/contexts/CartContext';

class CartWrapper extends Component {
  constructor(props) {
    super(props);

    this.addToCart = (product) => {
      this.props.addToCart(product);
    };

    this.removeFromCart = (productId) => {
      this.props.removeFromCart(productId);
    };
  }

  render() {
    const {children} = this.props;
    return (
      <cartContext.Provider value={{cartProducts: this.props.products, addToCart: this.addToCart, removeFromCart: this.removeFromCart}}>
        {children}
      </cartContext.Provider>
    );
  }
}

export default CartWrapper;

import React, { Component } from "react";
import cartContext from "../../CartContext";

class CartContainer extends Component {

  constructor(props) {
    super(props);

    this.addToCart = (product) => {
      this.setState(state => ({
        cartProducts: [...state.cartProducts, product]
      }));
    };

    this.removeFromCart = (productId) => {
      const products = this.state.cartProducts;
      const index = products.findIndex((element) => { return element.id == productId });
      products.splice(index, 1);
      this.setState({
        cartProducts: products,
      })
    };


    this.state = {
      cartProducts: [],
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
    }
  }

  render() {
    const { children } = this.props;
    return (
      <cartContext.Provider value={this.state}>
        {children}
      </cartContext.Provider>
    )

  }
}

export default CartContainer;
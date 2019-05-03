import React, {Component, Fragment} from 'react';
import cartContext from "../CartContext";
import PropTypes from "prop-types";

class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 1 };
  }

  amountChange(amount) {
    this.setState({amount})
  }

  render () {
    const product = this.props.product;
    return(
      <Fragment>
        <input type='number' min='1' value={this.state.amount} onChange={e => this.amountChange(e.currentTarget.value)}/>
        <cartContext.Consumer>
          {
            ({cartProducts, addToCart}) => (
              <button onClick={() => addToCart(product, this.state.amount) }>Add to cart</button>
            )
          }
        </cartContext.Consumer>
      </Fragment>

    )
  }
}

AddToCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired
  })
}

export default AddToCart;
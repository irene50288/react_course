import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import cartContext from '../../CartContext';


class CartProductCard extends Component {

  render() {
    const product = this.props.product;
    return (
      <div>
        <TextBox text={product.title} id={product.id}/>
        <Price price={product.price}/>
        <Image photos={product.photos}/>
        <cartContext.Consumer>
          {
            ({cartProducts, addToCart, removeFromCart}) => (
              <button onClick={() => removeFromCart(product.id) }>Remove from cart</button>
            )
          }
        </cartContext.Consumer>

      </div>
    )
  }
}

CartProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired
  })
};

export default CartProductCard;
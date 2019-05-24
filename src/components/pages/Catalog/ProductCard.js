import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from '../shared/Image';
import TextBox from '../shared/TextBox';
import Price from '../shared/Price';
import cartContext from '~src/helpers/contexts/CartContext';


class ProductCard extends Component {

  render() {
    const product = this.props.product;
    return (
      <div>
        <TextBox text={product.title} id={product.id}/>
        <Price price={product.price}/>
        <Image photos={product.photos}/>
        <cartContext.Consumer>
          {
            ({cartProducts, addToCart}) => (
              <button onClick={() => addToCart(product) }>Add to cart</button>
            )
          }
        </cartContext.Consumer>
      </div>
    )
  }
}

ProductCard.propTypes = {
  product: PropTypes.object
};

export default ProductCard;
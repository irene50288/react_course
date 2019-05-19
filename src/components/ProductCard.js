import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import cartContext from '../../CartContext';


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
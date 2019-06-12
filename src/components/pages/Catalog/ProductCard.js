import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from 'components/pages/shared/Image';
import TextBox from 'components/pages/shared/TextBox';
import Price from 'components/pages/shared/Price';


class ProductCard extends Component {
  render() {
    const product = this.props.product;
    return (
      <div>
        <TextBox text={product.title} id={product.id}/>
        <Price price={product.price}/>
        <Image photos={product.photos}/>
        <button onClick={() => this.props.addToCart(product)}>Add to cart</button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;

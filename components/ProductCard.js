import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToCart from './AddToCart';



class ProductCard extends Component {

  render() {
    const product = this.props.product;
    return (
      <div draggable
        onDragStart={(e) => this.onDragStart(e, product)}
        style={{border: '1px solid black'}}
      >
        <TextBox text={product.title}/>
        <Price price={product.price}/>
        <Image imageUrl={product.imageUrl} text={product.title}/>
        <AddToCart product={product}/>
      </div>
    )
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired
  })
};

export default ProductCard;
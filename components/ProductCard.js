import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import cartContext from '../CartContext';


class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1
    }
  }

  amountChange(amount) {
    this.setState({amount})
  }

  onDragStart(e, product) {
    e.dataTransfer.setData('text/JSON', JSON.stringify(product));
  }


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
        <input type='number' min='1' value={this.state.amount} onChange={e => this.amountChange(e.currentTarget.value)}/>
        <cartContext.Consumer>
          {
            ({cartProducts, addToCart}) => (
              <button onClick={() => addToCart(product, this.state.amount) }>Add to cart</button>
            )
          }
        </cartContext.Consumer>
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
import React, {Component} from 'react';
import ProductCardContainer from '~src/components/containers/ProductCardContainer';

class ProductPage extends Component {

  render() {
    if (this.props.product === null) {
      return (<div>Loading...</div>);
    }
    return (
      <div>
        <ProductCardContainer product={this.props.product}/>
      </div>
    );
  }
}

export default ProductPage;

import React, {Component} from 'react';
import ProductCardContainer from 'components/containers/ProductCardContainer';
import Helmet from 'react-helmet';

class ProductPage extends Component {

  render() {
    if (this.props.product === null) {
      return (<div>Loading...</div>);
    }
    return (
      <div>
        <Helmet>
          <title>{this.props.product.title}</title>
        </Helmet>
        <ProductCardContainer product={this.props.product}/>
      </div>
    );
  }
}

export default ProductPage;

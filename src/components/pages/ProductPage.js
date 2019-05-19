import React, { Component } from 'react';
import ProductCard from '../ProductCard';
import request from "superagent";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    }
  }

  componentDidMount() {
    const productId = this.props.productId;
    const baseUrl='https://cdn.contentful.com';
    const spaceId = 'evvw70z7j51e';
    const environmentId = 'master';
    const space = `/spaces/${spaceId}/environments/${environmentId}/entries/${productId}`;
    const accessToken = 'DRSTaz_G-W7m1ZLYSww4ezL5IFavrw4RxeZrOJFPIqw';
    const contentType = 'product';
    request
      .get(baseUrl+space)
      .query({ 'content_type': contentType })
      .set('Authorization', `Bearer ${accessToken}`)
      .then(({body: { fields }}) => {
          const product = Object.assign(fields);
          product.id = productId;
          this.setState( { product: product });
      })
  }

  render() {
    if (this.state.product === null)
      return (<div>Loading...</div>)
    return(
      <div>
        <ProductCard product={this.state.product}/>
      </div>
    )
  }
}

export default ProductPage;
import request from 'superagent';
import Catalog from "../Catalog";
import React, {Component, Fragment} from "react";
import CartButton from '../CartButton';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    const baseUrl='https://cdn.contentful.com';
    const spaceId = 'evvw70z7j51e';
    const environmentId = 'master';
    const space = `/spaces/${spaceId}/environments/${environmentId}/entries`;
    const accessToken = 'DRSTaz_G-W7m1ZLYSww4ezL5IFavrw4RxeZrOJFPIqw';
    const contentType = 'product';
    request
      .get(baseUrl+space)
      .query({ 'content_type': contentType })
      .set('Authorization', `Bearer ${accessToken}`)
      .then(({ body: { items } }) => {
        const products = [];
        items.map((item) =>{
          products.push(item.fields);
        })
        console.log(products);
        this.setState({ products })
      })
  }

  render() {
    return (
      <Fragment>
        <Catalog products={this.state.products}/>
        <CartButton/>
      </Fragment>
    )
  }

}

export default CatalogPage;
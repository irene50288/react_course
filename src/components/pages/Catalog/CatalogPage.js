import request from 'superagent';
import Catalog from "./Catalog";
import React, {Component, Fragment} from "react";
import CartButton from '../Cart/CartButton';

class CatalogPage extends Component {

  componentDidMount() {
    this.props.fetchCatalog();
  }

  render() {
    return (
      <Fragment>
        <Catalog products={this.props.products}/>
        <CartButton/>
      </Fragment>
    )
  }

}

export default CatalogPage;
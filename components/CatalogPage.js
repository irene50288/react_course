import Products from "../constants/Products";
import Catalog from "./Catalog";
import React, {Component, Fragment} from "react";
import Cart from './Cart';

class CatalogPage extends Component {

  render() {
    const products = Products;
    return (
      <Fragment>
        <Catalog products={products}/>
        <Cart/>
      </Fragment>
    )
  }

}

export default CatalogPage;
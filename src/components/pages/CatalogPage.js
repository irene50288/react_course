import Products from "../../constants/Products";
import Catalog from "../Catalog";
import React, {Component, Fragment} from "react";
import CartButton from '../CartButton';

class CatalogPage extends Component {

  render() {
    const products = Products;
    return (
      <Fragment>
        <Catalog products={products}/>
        <CartButton/>
      </Fragment>
    )
  }

}

export default CatalogPage;
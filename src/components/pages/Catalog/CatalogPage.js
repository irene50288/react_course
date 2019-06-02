import Catalog from './Catalog';
import React, {Component, Fragment} from 'react';
import CartButtonContainer from '~src/components/containers/CartButtonContainer';

class CatalogPage extends Component {
  componentDidMount() {
    this.props.fetchCatalog();
  }

  render() {
    return (
      <Fragment>
        { this.props.products
          ? <Catalog products={this.props.products}/>
          : <div> no products</div>

        }
        <CartButtonContainer/>
      </Fragment>
    );
  }
}

export default CatalogPage;



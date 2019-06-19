import Catalog from './Catalog';
import React, {Component, Fragment} from 'react';
import CartButtonContainer from 'components/containers/CartButtonContainer';
import Helmet from 'react-helmet';

class CatalogPage extends Component {

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>
            Catalog
          </title>
        </Helmet>
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



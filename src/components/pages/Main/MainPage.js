import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router';
import CatalogPage from '/components/Catalog/CatalogPage';

class MainPage extends Component {
  render() {
    const state = this.props.location.state;
    return (
      <Fragment>
        { state && <p>{state.message}</p>}
        <CatalogPage/>
      </Fragment>

    );
  }
}

export default withRouter(MainPage);

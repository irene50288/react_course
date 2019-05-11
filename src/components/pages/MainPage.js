import React, {Component, Fragment} from 'react';
import { withRouter } from "react-router";
import CartContainer from "../CartContainer";
import CatalogPage from "./CatalogPage";

class MainPage extends Component{
  render() {
    const state = this.props.location.state;
    return (
      <Fragment>
        { state && <p>{state.message}</p>}
        <CartContainer>
          <CatalogPage/>
        </CartContainer>
      </Fragment>

    )
  }
}

export default withRouter(MainPage);
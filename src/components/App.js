import React, {Fragment} from 'react';
import { createBrowserHistory } from 'history';
import {Router, Route, Switch} from "react-router-dom";
import MainMenu from './MainMenu';
import CartContainer from './pages/Cart/CartContainer';


import routes from '../routes';

const RouteWithSubroutes = (route, key) => {
  return <Route key={key} {...route} />
};

const App = () => {

  return (
    <CartContainer>
      <Router history={createBrowserHistory()}>
        <Fragment>
          <MainMenu/>
          <Switch>
            {routes.map((route, key) => {return RouteWithSubroutes(route, key)})}
          </Switch>
        </Fragment>
      </Router>
    </CartContainer>
  )
};
export default App;
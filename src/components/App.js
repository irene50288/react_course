import React, {Fragment} from 'react';
import { createBrowserHistory } from 'history';
import {Router, NavLink, Route, Switch} from "react-router-dom";
import {mainPath, cartPagePath, contactPagePath} from "../helpers/routes";

import routes from '../routes';

const RouteWithSubroutes = (route, key) => {
  return <Route key={key} {...route} />
};

const App = () => {

  return (
    <Router history={createBrowserHistory()}>
      <Fragment>
        <ul>
          <li><NavLink to={mainPath()}>Home</NavLink></li>
          <li><NavLink to={cartPagePath()}>Cart</NavLink></li>
          <li><NavLink to={contactPagePath()}>Contact</NavLink></li>
        </ul>
        <Switch>
          {routes.map((route, key) => {return RouteWithSubroutes(route, key)})}
        </Switch>
      </Fragment>

    </Router>
  )
}
export default App;
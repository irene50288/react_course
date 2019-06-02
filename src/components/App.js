import React, {Fragment} from 'react';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch} from 'react-router-dom';
import MainMenu from './MainMenu';
import store from '~src/store/';


import routes from '~src/routes';
import {Provider} from 'react-redux';

const RouteWithSubroutes = (route, key) => {
  return <Route key={key} {...route} />;
};

const App = () => {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Fragment>
          <MainMenu/>
          <Switch>
            {routes.map((route, key) => {
              return RouteWithSubroutes(route, key);
            })}
          </Switch>
        </Fragment>
      </Router>
    </Provider>

  );
};
export default App;

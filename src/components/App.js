/* globals __CLIENT__, __SERVER__ */
import React, {Fragment} from 'react';
import {Router, StaticRouter, Route, Switch, IndexRoute } from 'react-router-dom';
import MainMenu from './MainMenu';
import {Provider} from 'react-redux';
import routes from 'routes';

const RouteWithSubroutes = (route, key) => {
  return (<Route key={key} {...route} />);
};

const AppRouter = ({ history, children, location, context }) => {
  console.log('app router location', location);
  if(__CLIENT__)
    return (
      <Router history={history}>{children}</Router>
    );
  if(__SERVER__)
    return (
      <StaticRouter location={location} context={context}>{children}</StaticRouter>
    );
}

const App = ({ history, store, location, context }) => {
  return (
    <Provider store={store}>
      <AppRouter history={history} location={location} context={context}>
        <Fragment>
          <MainMenu/>
          <Switch>
            {routes.map((route, key) => {
              return RouteWithSubroutes(route, key);
            })}
          </Switch>
        </Fragment>
      </AppRouter>
    </Provider>

  );
};
export default App;

import React, {Fragment} from 'react';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch, matchPath} from 'react-router-dom';
import MainMenu from './MainMenu';
import store from '~src/store/';
import routes from '~src/routes';
import {Provider} from 'react-redux';
import prepareData from '~src/helpers/prepareData';

const history = createBrowserHistory();

function historyCallback(location, action) {
  const state = { params: {}, routes: [] }

  routes.some((route) => {
    const match = matchPath(location.pathname, route);

    if (match) {
      state.routes.push(route);
      Object.assign(state.params, match.params);
    }
    return match;
  })

  prepareData(store, state);
}

history.listen(historyCallback);
historyCallback(window.location);

const RouteWithSubroutes = (route, key) => {
  return <Route key={key} {...route} />;
};

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
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

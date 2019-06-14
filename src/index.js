import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import store from 'store/';
import routes from 'routes';
import history, { historyCallback } from 'helpers/history';

history.listen((location) => historyCallback(store, routes, location));
historyCallback(store, routes, location);

ReactDOM.render(
  <App history={history} store={store} />,
  document.getElementById('root')
);
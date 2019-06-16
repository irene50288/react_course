import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import createStore from 'store';
import routes from 'routes';
import history, { historyCallback } from 'helpers/history';

const store = createStore(window.INITIAL_STATE);

history.listen((location) => historyCallback(store, routes, location));

ReactDOM.hydrate(
  <App history={history} store={store} />,
  document.getElementById('root'),
  () => {
    delete window.INITIAL_STATE;
  }
);
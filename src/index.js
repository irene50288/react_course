import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import createStore from 'store';
import routes from 'routes';
import createHistory, { historyCallback } from 'helpers/history';

const store = createStore(window.INITIAL_STATE);

const history = createHistory();

history.listen((location) => (historyCallback(store, routes, location)));

// historyCallback(store, routes, location); //only needed for client rendering


ReactDOM.hydrate(
  <App history={history} store={store} />,
  document.getElementById('root'),
  () => {
    delete window.INITIAL_STATE;
  }
);
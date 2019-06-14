import {createBrowserHistory} from "history";
import {matchPath} from "react-router";
import prepareData from './prepareData';

const history = createBrowserHistory();

export function historyCallback(store, routes, location) {
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

export default history;
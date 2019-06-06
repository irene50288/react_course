import compact from 'lodash/compact';
import map from 'lodash/map'

export default function (store, state) {
  const { location, params, routes } = state;

  const prepareDataFns = compact(map(routes,route => route.prepareData));

  return map(prepareDataFns,prepareData => prepareData(store, params, location))
}
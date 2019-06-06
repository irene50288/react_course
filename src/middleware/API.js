import request from 'superagent';
import { stringify } from 'qs';
import { apiUrl, accessToken } from "../constants/URLs/URLs";

function APICall(endpoint, method, query, payload) {
  return new Promise((resolve, reject) => {

    let req = request[method.toLowerCase()](apiUrl+endpoint)

    req.set('Authorization', `Bearer ${accessToken}`)

    if (query)
      req.query(stringify(query));

    if (payload) // check for POST can be added here
      req = req.send(payload);

    req.end((error, data) => {
      error
        ? reject(error)
        : resolve(data)
    })
  })
}

const nextAction = (action, data) => {
 return Object.assign({}, action, data, { [API_CALL]: undefined })
}

export const API_CALL = 'API_CALL';

export default store => next => action => {

  if (!action[API_CALL]) return next(action);

  const [requestType, successType, failureType] = action[API_CALL].types;

  next(nextAction(action, { type: requestType })); // dispatch request action

  const { endpoint, method, query, payload } = action[API_CALL];
  const promise = APICall(endpoint, method, query, payload);

  promise.then(
    response => next(
      nextAction(action, { response, type: successType })
    ),
    error => next(
      nextAction(action, { error, type: failureType })
    )
  )

  return promise
}
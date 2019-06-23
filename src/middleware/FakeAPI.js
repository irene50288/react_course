import {SubmissionError} from "redux-form";

const pretendToMakeRequest = (data) => {
  return new Promise((resolve, reject) => {
    if(data.fullName === 'test') {
      const error = new SubmissionError({fullName: 'Please, provide valid name'})
      reject(error)
    } else {
      setTimeout(resolve('success'), 1000)
    }
  }
)}


const nextAction = (action, data) => {
 return Object.assign({}, action, data, { [FAKE_API_CALL]: undefined })
}

export const FAKE_API_CALL = 'FAKE_API_CALL';

export default store => next => action => {

  if (!action[FAKE_API_CALL]) return next(action);

  const [requestType, successType, failureType] = action[FAKE_API_CALL].types;

  next(nextAction(action, { type: requestType })); // dispatch request action

  const promise = pretendToMakeRequest(action[FAKE_API_CALL].data);

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

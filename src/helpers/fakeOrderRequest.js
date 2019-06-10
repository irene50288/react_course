import {SubmissionError} from "redux-form";

const pretendToMakeRequest = (order) => (new Promise(
  (resolve, reject) => {
    if(order.fullName === 'test') {
      const error = new SubmissionError({fullName: 'Please, provide valid name'})
      reject(error)
    } else {
      setTimeout(resolve('success'), 1000)
    }
  }
))

export default pretendToMakeRequest;
import React from 'react';
import {Field, reduxForm, SubmissionError} from "redux-form";
import { connect } from 'react-redux';
import * as actions from '~src/actions/Order';
import * as RegExps from '~src/constants/RegExps';

const renderField = ({ input, label, type, meta: {touched, error, warning} }) => (
  <div className={error? 'red': ''}>
    <label>{label}</label>
    <input {...input} type={type}/>
    {touched && (error &&
      <div className='error'>{error}</div>
    )}
  </div>
)

const validate = ({ fullName, email, phone, address }) => {
  const errors = {};
  if(fullName && fullName.trim().length < 3)
    errors.fullName = 'Your name is too short';

  if(email && !RegExps.email.test(email))
    errors.email = 'Please, provide a valid email';

  if(phone && !RegExps.phone.test(phone))
    errors.phone = 'Please, provide a valid phone number';

  if(address && address.trim().length < 5)
    errors.address = 'Please, provide a valid address';

  return errors;

}

const OrderForm = ({ handleSubmit }) => {
  return (
    <div>
      <p>Please, provide address information</p>
      <form onSubmit={handleSubmit}>
        <Field component={renderField} type='text' label='Full Name' name='fullName'/>
        <Field component={renderField} type='text' label='Email' name='email'/>
        <Field component={renderField} type='text' label='Phone' name='phone'/>
        <Field component={renderField} type='text' label='Address' name='address'/>
        <input type='submit' value='Submit'/>
      </form>
    </div>
  )
}

export default connect(null,
  (dispatch) => ({
    onSubmit: values => dispatch(actions.makeOrder(values))
  })
)(reduxForm({
  form: 'orderForm',
  validate,
})(OrderForm));
import React from 'react';
import {Field, reduxForm} from "redux-form";
import { connect } from 'react-redux';
import * as RegExps from '~src/constants/RegExps';
import prepareProducts from '~src/helpers/prepareProducts';
import * as actions from '~src/actions/Order';

const renderField = ({ input, label, type, meta: {touched, error} }) => (
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
        <Field component='input' type='hidden' name='products'/>
        <Field component={renderField} type='text' label='Full Name' name='fullName'/>
        <Field component={renderField} type='text' label='Email' name='email'/>
        <Field component={renderField} type='text' label='Phone' name='phone'/>
        <Field component={renderField} type='text' label='Address' name='address'/>
        <input type='submit' value='Order'/>
      </form>
    </div>
  )
}

export default connect(
  (state) => ({
    initialValues: {
      products: prepareProducts(state.cart.products)
    }
  }),
  (dispatch) => ({
    onSubmit: values => dispatch(actions.makeOrder(values, dispatch))
  })
)(reduxForm({
  form: 'orderForm',
  validate,
})(OrderForm));
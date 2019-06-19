import React, {Component} from 'react';
import Text from './Text';
import TextArea from './TextArea';
import Helmet from 'react-helmet';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: '',
        }
      }
    }

    this.onSubmit = (e) => {
      e.preventDefault();
      alert(JSON.stringify(this.state.form.values));
    }

    this.handleChange = (fieldName) => {
      return (e) => {
        this.setState({
          form: {
            values: {
              ...this.state.form.values,
              [fieldName]: e.target.value
            }
          }
        })
      }

    }
  }

  render() {
    const { fullName, email, message } = this.state.form.values;
    return (
      <div>
        <Helmet>
          <title>Contact Us</title>
        </Helmet>
        <h1>Contacts</h1>
        <form onSubmit={this.onSubmit}>
          <Text
            onChange={this.handleChange('fullName')}
            label='Full Name'
            value={fullName}
            name='fullName'
          />
          <Text
            onChange={this.handleChange('email')}
            label='Email'
            value={email}
            name='email'
          />
          <TextArea
            onChange={this.handleChange('message')}
            label='Message'
            value={message}
            name='message'
          />
         <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}
export default ContactPage;

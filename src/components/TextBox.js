import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextBox extends Component {

  render() {
    const text = this.props.text;
    return (
      <span>{text}</span>
    )
  }
}

TextBox.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextBox;
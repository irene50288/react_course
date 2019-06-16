import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {productPath} from 'helpers/routes';

class TextBox extends Component {
  render() {
    const {id, text} = this.props;
    return (
      <Link to={productPath(id)} >{text}</Link>
    );
  }
}

TextBox.propTypes = {
  text: PropTypes.string,
};

export default TextBox;

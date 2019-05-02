import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {

  render() {
    const { imageUrl, text } = this.props;
    return (
      <img src={imageUrl} width='100' height='100' alt={text}/>
    )
  }
}

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Image;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Price extends Component {

  render(){
    const price = this.props.price;
    return <span>${price}</span>
  }
}

Price.propTypes = {
  price: PropTypes.number
};

export default Price;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  constructor(props) {
    super(props);
    const photos = this.props.photos;
    this.state = {
      photos: photos,
      activePhoto: photos[0]
    }
  }

  //TODO add change activePhoto on small img click

  render() {
    return (
      <div>
        <img className='bigImage' src={this.state.activePhoto} width='100' height='100'/>
        <ul>
            { this.state.photos.map((imageUrl, key) => {
              return (
                <li key={key}>
                  <img src={imageUrl} width='20' height='20'/>
                </li>
              )
            }) }
        </ul>
      </div>
    )
  }
}

Image.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default Image;
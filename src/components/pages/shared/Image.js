import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePhoto: 0
    }
  }

  showPhoto(photo) {
    this.setState({ activePhoto: photo })
  }

  render() {
    const photos = this.props.photos;
    return (
      <div>
        <img className='bigImage' src={ photos[this.state.activePhoto]} width='100' height='100'/>
        <ul>
            { photos.map((photo, key) => {
              return (
                <li key={key}>
                  <button onClick={() => this.showPhoto(key)}>
                    <img src={photo} width='30' height='30' />
                  </button>
                </li>
              )
            }) }
        </ul>
      </div>
    )
  }
}

Image.propTypes = {
  photos: PropTypes.array,
};

export default Image;
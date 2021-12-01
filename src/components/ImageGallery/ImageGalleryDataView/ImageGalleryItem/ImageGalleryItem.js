import PropTypes from 'prop-types';

import { Component } from 'react';

import classes from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { smallImg, largeImg, onPhotoClick, alt } = this.props;

    return (
      <li className={classes['gallery-item']}>
        <img
          className={classes['gallery-item-image']}
          src={smallImg}
          alt={alt}
          onClick={() => onPhotoClick({ largeImg, alt })}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onPhotoClick: PropTypes.func.isRequired,
  smallImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

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

export default ImageGalleryItem;

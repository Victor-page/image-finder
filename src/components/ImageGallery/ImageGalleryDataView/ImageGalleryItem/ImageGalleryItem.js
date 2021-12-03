import PropTypes from 'prop-types';

import classes from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ smallImg, largeImg, onPhotoClick, alt }) => (
  <li className={classes['gallery-item']}>
    <img
      className={classes['gallery-item-image']}
      src={smallImg}
      alt={alt}
      onClick={() => onPhotoClick({ largeImg, alt })}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onPhotoClick: PropTypes.func.isRequired,
  smallImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

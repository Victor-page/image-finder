import PropTypes from 'prop-types';

import classes from './ImageGalleryDataView.module.css';

import ImageGalleryItem from './ImageGalleryItem';
import LoadMoreButton from './LoadMoreButton';

const ImageGalleryDataView = ({ photos, onPhotoClick, onLoadMore }) => (
  <>
    <ul className={classes.gallery}>
      {photos.map(({ webformatURL, largeImageURL, id, tags }) => (
        <ImageGalleryItem
          key={id}
          smallImg={webformatURL}
          largeImg={largeImageURL}
          onPhotoClick={onPhotoClick}
          alt={tags}
        />
      ))}
    </ul>
    {photos.length && <LoadMoreButton onLoadMore={onLoadMore} />}
  </>
);

ImageGalleryDataView.propTypes = {
  onLoadMore: PropTypes.func,
  onPhotoClick: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ).isRequired,
};

export default ImageGalleryDataView;

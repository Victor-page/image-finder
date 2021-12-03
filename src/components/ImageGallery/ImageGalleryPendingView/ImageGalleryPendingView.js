import { createPortal } from 'react-dom';
import { ImSpinner } from 'react-icons/im';
import PropTypes from 'prop-types';

import ImageGalleryDataView from '../ImageGalleryDataView';

import classes from './ImageGalleryPendingView.module.css';

import pendingImage from './pending-image.gif';

import { getCurrentPhotos } from 'utils/get-current-photos';

const spinnerRoot = document.getElementById('spinnerRoot');

const ImageGalleryPendingView = ({ currentPhotos, query, page }) => {
  const pendingImages = Array.from(Array(12)).map((image, index) => ({
    id: index,
    tags: query,
    webformatURL: pendingImage,
    largeImageURL: '',
  }));

  return (
    <div role="alert">
      {createPortal(
        <div className={classes['spinner-wrapper']}>
          <ImSpinner size="48" className={classes['icon-spin']} />
          <p>Loading...</p>
        </div>,
        spinnerRoot
      )}
      <ImageGalleryDataView
        photos={getCurrentPhotos(currentPhotos, pendingImages, page)}
        onPhotoClick={() => {}}
      />
    </div>
  );
};

ImageGalleryPendingView.propTypes = {
  viewsNumber: PropTypes.number,
};

export default ImageGalleryPendingView;

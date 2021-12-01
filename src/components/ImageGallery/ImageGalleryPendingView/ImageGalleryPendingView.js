import { createPortal } from 'react-dom';
import { ImSpinner } from 'react-icons/im';
import PropTypes from 'prop-types';

import ImageGalleryDataView from '../ImageGalleryDataView';

import classes from './ImageGalleryPendingView.module.css';

import pendingImage from './pending-image.gif';

const spinnerRoot = document.getElementById('spinnerRoot');

const ImageGalleryPendingView = ({ query, viewsNumber }) => {
  const pendingImages = Array.from(Array(viewsNumber)).map((image, index) => ({
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
      <ImageGalleryDataView photos={pendingImages} onPhotoClick={() => {}} />
    </div>
  );
};

ImageGalleryPendingView.propTypes = {
  viewsNumber: PropTypes.number.isRequired,
};

export default ImageGalleryPendingView;

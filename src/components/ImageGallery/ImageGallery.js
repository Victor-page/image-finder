import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryErrorView from './ImageGalleryErrorView';
import ImageGalleryDataView from './ImageGalleryDataView';
import ImageGalleryPendingView from './ImageGalleryPendingView';
import { fetchGallery } from 'services/pixabay-api';
import classes from './ImageGallery.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const ImageGallery = ({ query, page, onPhotoClick, onLoadMore }) => {
  const [photos, setPhotos] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setStatus(Status.PENDING);
    fetchGallery(query, page)
      .then(({ hits: loadedPhotos }) => {
        setPhotos((prevPhotos) => {
          const currentPhotos =
            prevPhotos && page > 1
              ? prevPhotos.concat(loadedPhotos)
              : loadedPhotos;

          return currentPhotos;
        });
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [query, page]);

  if (status === Status.IDLE) {
    return <h1 className={classes.title}>Enter some search query.</h1>;
  }

  if (status === Status.PENDING) {
    return (
      <ImageGalleryPendingView
        query={query}
        viewsNumber={photos?.length || 12}
      />
    );
  }

  if (status === Status.REJECTED) {
    <ImageGalleryErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <ImageGalleryDataView
        photos={photos}
        onPhotoClick={onPhotoClick}
        onLoadMore={onLoadMore}
      />
    );
  }
};

ImageGallery.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  onPhotoClick: PropTypes.func.isRequired,
  page: PropTypes.number,
  query: PropTypes.string,
};

export default ImageGallery;

import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryErrorView from './ImageGalleryErrorView';
import ImageGalleryDataView from './ImageGalleryDataView';
import ImageGalleryPendingView from './ImageGalleryPendingView';
import { fetchGallery } from 'services/pixabay-api';
import classes from './ImageGallery.module.css';

const ImageGallery = ({ query, page, onPhotoClick, onLoadMore }) => {
  const [photos, setPhotos] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setStatus('pending');
    fetchGallery(query, page)
      .then(({ hits: loadedPhotos }) => {
        setPhotos((prevPhotos) =>
          prevPhotos ? prevPhotos.concat(loadedPhotos) : loadedPhotos
        );
        setStatus('resolved');
      })
      .catch((error) => {
        setError(error);
        setStatus('rejected');
      });
  }, [query, page]);

  if (status === 'idle') {
    return <h1 className={classes.title}>Enter some search query.</h1>;
  }

  if (status === 'pending') {
    return (
      <ImageGalleryPendingView
        query={query}
        viewsNumber={photos?.length || 12}
      />
    );
  }

  if (status === 'rejected') {
    <ImageGalleryErrorView message={error.message} />;
  }

  if (status === 'resolved') {
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

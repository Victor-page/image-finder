import { Component } from 'react';

import ImageGalleryErrorView from './ImageGalleryErrorView';
import ImageGalleryDataView from './ImageGalleryDataView';
import ImageGalleryPendingView from './ImageGalleryPendingView';
import { fetchGallery } from 'sevices/pixabay-api';

class ImageGallery extends Component {
  state = { photos: null, error: null, status: 'idle' };

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery, page: prevPage } = prevProps;
    const { query: currentQuery, page: currentPage } = this.props;
    const areSameQueries = prevQuery === currentQuery;
    const areSamePages = prevPage === currentPage;

    if (areSameQueries && areSamePages) {
      return;
    }

    this.setState({ status: 'pending' });

    fetchGallery(currentQuery, currentPage)
      .then(({ hits: loadedPhotos }) => {
        this.setState((prevState) => ({
          photos:
            prevState.photos && areSameQueries
              ? prevState.photos.concat(loadedPhotos)
              : loadedPhotos,
          status: 'resolved',
        }));
      })
      .catch((error) => this.setState({ error, status: 'rejected' }));
  }

  render() {
    const { onPhotoClick, query, onLoadMore } = this.props;
    const { photos, error, status } = this.state;

    if (status === 'idle') {
      return <h1>Enter some search query.</h1>;
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
  }
}

export default ImageGallery;

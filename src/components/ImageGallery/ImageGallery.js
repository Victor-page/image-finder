import { Component } from 'react';

import ImageGalleryErrorView from './ImageGalleryErrorView';
import ImageGalleryDataView from './ImageGalleryDataView';
import ImageGalleryPendingView from './ImageGalleryPendingView';

class ImageGallery extends Component {
  state = { photos: null, error: null, status: 'idle' };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const { query: nextQuery } = this.props;

    if (prevQuery === nextQuery) {
      return;
    }

    this.setState({ status: 'pending' });
    setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?q=${nextQuery}&page=1&key=24568502-5ca9f026ce5836891cf338e0e&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(new Error(`There are no ${nextQuery} images`));
        })
        .then(({ hits: photos }) =>
          this.setState({ photos, status: 'resolved' })
        )
        .catch((error) => this.setState({ error, status: 'rejected' }));
    }, 4000);
  }

  render() {
    const { onPhotoClick, query } = this.props;
    const { photos, error, status } = this.state;

    if (status === 'idle') {
      return <h1>Enter some search query.</h1>;
    }

    if (status === 'pending') {
      return <ImageGalleryPendingView query={query} />;
    }

    if (status === 'rejected') {
      <ImageGalleryErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <ImageGalleryDataView photos={photos} onPhotoClick={onPhotoClick} />
      );
    }
  }
}

export default ImageGallery;

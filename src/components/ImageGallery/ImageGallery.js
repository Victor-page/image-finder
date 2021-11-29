import { Component } from 'react';

import ImageGalleryItem from './ImageGalleryItem';

import classes from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { photos, onPhotoClick, query } = this.props;
    console.log(query);

    return (
      <ul className={classes.gallery}>
        {photos.map(({ webformatURL, largeImageURL, id, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              smallImg={webformatURL}
              largeImg={largeImageURL}
              onPhotoClick={onPhotoClick}
              alt={tags}
            />
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;

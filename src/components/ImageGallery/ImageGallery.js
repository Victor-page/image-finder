import ImageGalleryItem from './ImageGalleryItem';

import classes from './ImageGallery.module.css';

const ImageGallery = ({ photos, onPhotoClick }) => {
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
};

export default ImageGallery;

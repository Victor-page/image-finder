import classes from './ImageGalleryDataView.module.css';

import ImageGalleryItem from './ImageGalleryItem';

const ImageGalleryDataView = ({ photos, onPhotoClick }) => (
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
);

export default ImageGalleryDataView;

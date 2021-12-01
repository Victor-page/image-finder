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

export default ImageGalleryDataView;

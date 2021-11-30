import { ImSpinner } from 'react-icons/im';

import ImageGalleryDataView from '../ImageGalleryDataView';

import classes from './ImageGalleryPendingView.module.css';

import pendingImage from './pending-image.gif';

const ImageGalleryPendingView = ({ query }) => {
  const photos = [
    {
      id: 1,
      tags: query,
      webformatURL: pendingImage,
      largeImageURL: '',
    },
    {
      id: 2,
      tags: query,
      webformatURL: pendingImage,
      largeImageURL: '',
    },
    {
      id: 3,
      tags: query,
      webformatURL: pendingImage,
      largeImageURL: '',
    },
    {
      id: 4,
      tags: query,
      webformatURL: pendingImage,
      largeImageURL: '',
    },
    {
      id: 5,
      tags: query,
      webformatURL: pendingImage,
      largeImageURL: '',
    },
    {
      id: 6,
      tags: query,
      webformatURL: pendingImage,
      largeImageURL: '',
    },
    {
      id: 7,
      tags: query,
      webformatURL: pendingImage,
      largeImageURL: '',
    },
    {
      id: 8,
      tags: query,
      webformatURL: pendingImage,
      largeImageURL: '',
    },
    {
      id: 9,
      tags: query,
      webformatURL: pendingImage,
      largeImageURL: '',
    },
    {
      id: 10,
      tags: query,
      webformatURL: pendingImage,
      largeImageURL: '',
    },
    {
      id: 11,
      tags: query,
      webformatURL: pendingImage,
      largeImageURL: '',
    },
    {
      id: 12,
      tags: query,
      webformatURL: pendingImage,
      largeImageURL: '',
    },
  ];

  return (
    <div role="alert">
      <div>
        <ImSpinner size="48" className={classes['icon-spin']} />
        <p>Loading...</p>
      </div>
      <ImageGalleryDataView photos={photos} />
    </div>
  );
};

export default ImageGalleryPendingView;

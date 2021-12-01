import PropTypes from 'prop-types';

const ImageGalleryErrorView = ({ message }) => (
  <div role="alert">
    <p>{message}</p>
  </div>
);

ImageGalleryErrorView.propTypes = { message: PropTypes.string };

export default ImageGalleryErrorView;

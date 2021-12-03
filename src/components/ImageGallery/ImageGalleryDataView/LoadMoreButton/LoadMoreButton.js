import PropTypes from 'prop-types';

import classes from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onLoadMore }) => (
  <button
    className={classes['load-more-button']}
    type="button"
    onClick={onLoadMore}
  >
    Load more
  </button>
);

LoadMoreButton.propTypes = { onLoadMore: PropTypes.func };

export default LoadMoreButton;

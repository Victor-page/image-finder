import classes from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onLoadMore }) => {
  return (
    <button
      className={classes['load-more-button']}
      type="button"
      onClick={onLoadMore}
    >
      Load more
    </button>
  );
};

export default LoadMoreButton;

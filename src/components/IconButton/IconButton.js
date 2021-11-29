import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import classes from './IconButton.module.css';

const IconButton = ({
  children,
  onClick,
  type,
  extraClassName,
  ...allyProps
}) => (
  <button
    type={type}
    className={classNames.bind(classes)('icon-button', {
      [extraClassName]: extraClassName,
    })}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
  type: 'button',
  extraClassName: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string,
  extraClassName: PropTypes.string,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;

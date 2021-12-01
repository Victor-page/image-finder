import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import classes from './Modal.module.css';

import IconButton from 'components/IconButton';
import { ReactComponent as CloseIcon } from 'icons/close.svg';

const modalRoot = document.getElementById('modalRoot');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      this.props.onClose();
    }
  };

  render() {
    const {
      onClose,
      modalPhoto: { largeImg: photo, alt },
    } = this.props;

    return createPortal(
      <div className={classes.overlay} onClick={this.handleBackdropClick}>
        <div className={classes.modal}>
          <IconButton
            onClick={onClose}
            aria-label="Close"
            type="button"
            extraClassName={classes['close-icon']}
          >
            <CloseIcon width="40" height="40" fill="#fff" />
          </IconButton>
          <img src={photo} alt={alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  modalPhoto: PropTypes.exact({
    alt: PropTypes.string.isRequired,
    largeImg: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Modal;

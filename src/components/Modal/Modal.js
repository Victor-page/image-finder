import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import classes from './Modal.module.css';

import IconButton from 'components/IconButton';
import { ReactComponent as CloseIcon } from 'icons/close.svg';

const modalRoot = document.getElementById('modalRoot');

const Modal = ({ onClose, modalPhoto: { largeImg: photo, alt } }) => {
  const handleKeyDown = useCallback(
    ({ code }) => {
      if (code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      onClose();
    }
  };

  return createPortal(
    <div className={classes.overlay} onClick={handleBackdropClick}>
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
};

Modal.propTypes = {
  modalPhoto: PropTypes.exact({
    alt: PropTypes.string.isRequired,
    largeImg: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Modal;

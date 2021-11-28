import { Component } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

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
    const { onClose } = this.props;

    return createPortal(
      <div className={classes.overlay} onClick={this.handleBackdropClick}>
        <div className={classes.modal}>
          <button type="button" onClick={onClose}>
            Close
          </button>
          <img
            src={
              'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80'
            }
            alt=""
          />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

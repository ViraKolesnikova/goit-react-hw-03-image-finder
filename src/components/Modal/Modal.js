import { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDownClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDownClose);
  }

  onKeyDownClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
    return;
  };

  onOverlayClose = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
    return;
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.onOverlayClose}>
        <div className={styles.Modal}>
          <img src={this.props.image} alt={this.props.name} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    image: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
  };

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
    const { image } = this.props;

    return createPortal(
      <div className={styles.Overlay} onClick={this.onOverlayClose}>
        <div className={styles.Modal}>
          <img src={image.largeImageURL} alt={image.tags} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

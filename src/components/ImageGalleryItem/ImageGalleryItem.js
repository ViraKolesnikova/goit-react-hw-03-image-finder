import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ item, onImageClick }) {
  return (
    <li className={styles.ImageGalleryItem} onClick={onImageClick}>
      <img
        className={styles.ImageGalleryItemImage}
        src={item.webformatURL}
        alt={item.tags}
      />
    </li>
  );
}

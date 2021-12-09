import ImageGalleryItem from '../ImageGalleryItem';

import styles from './ImageGallery.module.css';

export default function ImageGallery({ data, onOpenModal }) {
  return (
    <ul className={styles.ImageGallery}>
      {data.map(item => (
        <ImageGalleryItem
          item={item}
          onImageClick={onOpenModal}
          key={item.id}
        />
      ))}
    </ul>
  );
}

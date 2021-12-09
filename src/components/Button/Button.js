import styles from './Button.module.css';

export default function Button({ onLoadMoreBtn }) {
  return (
    <button className={styles.Button} type="button" onClick={onLoadMoreBtn}>
      Load more
    </button>
  );
}

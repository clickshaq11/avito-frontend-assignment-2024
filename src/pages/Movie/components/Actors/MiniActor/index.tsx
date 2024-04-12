import { Actor } from '@/types/search';
import styles from './styles.module.css';

function MiniActor({ name, photo, enName }: Actor) {
  return (
    <section className={styles.box}>
      <span className={styles.cn_name}>{name || enName}</span>
      {photo && (
        <img
          src={photo}
          alt={`Фотография ${name}`}
          className={styles.cn_photo}
        />
      )}
    </section>
  );
}

export { MiniActor };

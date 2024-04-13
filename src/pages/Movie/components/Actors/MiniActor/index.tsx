import { Actor } from '@/types/search';
import styles from './styles.module.css';

const NO_ACTOR_PHOTO_URL = 'https://www.kinopoisk.ru/images/no-poster.gif';

function MiniActor({ name, photo, enName }: Actor) {
  return (
    <section className={styles.box}>
      <span className={styles.cn_name}>{name || enName}</span>
      <img
        src={photo || NO_ACTOR_PHOTO_URL}
        alt={`Фотография ${name}`}
        className={styles.cn_photo}
      />
    </section>
  );
}

export { MiniActor };

import { Actor } from '@/types/search';
import styles from './styles.module.css';

function MiniActor({ name, photo }: Actor) {
  return (
    <section className={styles.box}>
      <span className={styles.cn_name}>{name}</span>
      <img src={photo} alt={`Фотография ${name}`} className={styles.cn_photo} />
    </section>
  );
}

export { MiniActor };

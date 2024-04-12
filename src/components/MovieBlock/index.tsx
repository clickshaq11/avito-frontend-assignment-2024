import { Link } from 'react-router-dom';
import { MoviePreview } from '@/types/movie';
import styles from './styles.module.css';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function MovieBlock({ name, id, poster: { previewUrl } }: MoviePreview) {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <h3 className={styles.title}>{name}</h3>
        <Link
          to={`/movies/${id}`}
          className={styles.link}
          title="Перейти к фильму"
        >
          <OpenInNewIcon />
        </Link>
        <img
          src={previewUrl}
          alt={`Постер к фильму ${name}`}
          className={styles.img}
        />
      </div>
    </section>
  );
}

export { MovieBlock };

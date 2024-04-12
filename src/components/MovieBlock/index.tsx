import { Link, useSearchParams } from 'react-router-dom';
import { MoviePreview } from '@/types/movie';
import styles from './styles.module.css';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function MovieBlock({ name, id, poster: { previewUrl } }: MoviePreview) {
  const [params] = useSearchParams();

  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <h3 className={styles.title}>{name}</h3>
        <Link
          to={{ pathname: `/movies/${id}`, search: params.toString() }}
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

import { SimilarMovie } from '@/types/search';
import styles from './styles.module.css';

type SimilarMoviesProps = {
  similarMovies: SimilarMovie[];
};

function SimilarMovies({ similarMovies }: SimilarMoviesProps) {
  return (
    <div className={styles.carousel}>
      {similarMovies.map(({ name, poster: { previewUrl } }) => (
        <div key={previewUrl} className={styles.movie}>
          <span>{name}</span>
          <img src={previewUrl} alt="Превью" className={styles.img} />
        </div>
      ))}
    </div>
  );
}

export { SimilarMovies };

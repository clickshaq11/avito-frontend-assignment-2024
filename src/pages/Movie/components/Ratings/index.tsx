import { Rating } from '@mui/material';
import styles from '../../styles.module.css';
import type { GetMovieByIdResponse } from '@/types/search';

type RatingsProps = {
  rating: GetMovieByIdResponse['rating'];
};

function Ratings({ rating }: RatingsProps) {
  return (
    <div className={styles.ratings}>
      <span className={styles.text}>Рейтинг на кинопоиске</span>
      <Rating value={rating.kp} readOnly max={10} />
      <span className={styles.text}>Рейтинг на IMDB</span>
      <Rating value={rating.imdb} readOnly max={10} />
    </div>
  );
}

export { Ratings };

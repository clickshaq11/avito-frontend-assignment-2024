import { Review, ReviewType } from '@/types/search';
import { stringFromDate } from '@/utils/stringFromDate';
import { sanitizeString } from '@/utils/sanitizeString';
import styles from './styles.module.css';

const mapTypeToClassName: Record<ReviewType, string> = {
  Позитивный: styles.positive,
  Негативный: styles.negative,
  Нейтральный: styles.neutral,
};

function MiniReview({ author, title, review, date, type }: Review) {
  return (
    <div className={`${styles.block} ${mapTypeToClassName[type]}`}>
      <div className={styles.heading}>
        <span className={styles.author}>{author}</span>
        <span>Опубликован {stringFromDate(date)}</span>
      </div>
      <div className={styles.textblock}>
        {title && <span className={styles.title}>{title}</span>}
        <p className={styles.review}>{sanitizeString(review)}</p>
      </div>
    </div>
  );
}

export { MiniReview };

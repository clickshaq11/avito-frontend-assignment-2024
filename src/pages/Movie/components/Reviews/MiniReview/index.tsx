import { Review, ReviewType } from '@/types/search';
import { stringFromDate } from '@/utils/stringFromDate';
import styles from './styles.module.css';

const mapTypeToClassName: Record<ReviewType, string> = {
  Позитивный: styles.positive,
  Негативный: styles.negative,
  Нейтральный: styles.neutral,
};

function MiniReview({ author, title, review, date, type }: Review) {
  return (
    <div className={`${styles.block} ${mapTypeToClassName[type]}`}>
      <span>{author}</span>
      <span>{title}</span>
      <span>{stringFromDate(date)}</span>
      <p>{review}</p>
    </div>
  );
}

export { MiniReview };

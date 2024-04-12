import { Review } from '@/types/search';
import { stringFromDate } from '@/utils/stringFromDate';

function MiniReview({ author, title, review, date }: Review) {
  return (
    <div>
      <span>{author}</span>
      <span>{title}</span>
      <span>{stringFromDate(date)}</span>
      <p>{review}</p>
    </div>
  );
}

export { MiniReview };

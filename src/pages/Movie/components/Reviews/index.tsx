import { useState } from 'react';
import { useQuery } from 'react-query';
import { axios } from '@/config/api';
import { ClientPaginationParams } from '@/types/pagination';
import { GetReviewsByMovieId } from '@/types/search';
import {
  DEFAULT_PAGINATION_LIMIT,
  DEFAULT_PAGINATION_STATE,
} from '@/pages/Movie/shared/const';
import styles from '../../styles.module.css';
import localStyles from './styles.module.css';
import { MiniReview } from './MiniReview';
import { CircularProgress, Pagination } from '@mui/material';

type ReviewsProps = {
  movieId: number;
};

function Reviews({ movieId }: ReviewsProps) {
  const [reviewsPagination, setReviewsPagination] =
    useState<ClientPaginationParams>(DEFAULT_PAGINATION_STATE);

  // TODO: AXIOS ENDPOINT
  const { data: reviewsData, isSuccess } = useQuery<GetReviewsByMovieId>({
    queryFn: async ({ signal }) => {
      const { data } = await axios.get<GetReviewsByMovieId>(`review`, {
        signal,
        params: {
          page: reviewsPagination.page,
          limit: DEFAULT_PAGINATION_LIMIT,
          movieId,
        },
      });

      return data;
    },
    queryKey: ['reviews', movieId, reviewsPagination.page],
  });

  return (
    <>
      {isSuccess ? (
        <article className={styles.article}>
          <h2 className={styles.section_name}>Отзывы о фильме</h2>
          <div className={localStyles.list}>
            {reviewsData.docs.map((review) => (
              <MiniReview key={`${review.author}${review.date}`} {...review} />
            ))}
          </div>
          <Pagination
            page={reviewsPagination.page}
            onChange={(_, value) =>
              setReviewsPagination((prev) => ({ ...prev, page: value }))
            }
          />
        </article>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export { Reviews };

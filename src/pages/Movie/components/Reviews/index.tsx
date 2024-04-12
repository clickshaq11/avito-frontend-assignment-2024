import { useState } from 'react';
import { useQuery } from 'react-query';
import { axios } from '../../../../config/api';
import { ClientPaginationParams } from '../../../../types/pagination';
import {
  DEFAULT_PAGINATION_LIMIT,
  DEFAULT_PAGINATION_STATE,
} from '../../shared/const';
import { list, section_name, article } from '../../movie.module.css';
import { GetReviewsByMovieId } from '../../../../types/search';
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
        <article className={article}>
          <h2 className={section_name}>Отзывы о фильме</h2>
          <div className={list}>
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

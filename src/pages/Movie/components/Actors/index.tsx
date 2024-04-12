import { useState } from 'react';
import { useQuery } from 'react-query';
import { axios } from '@/config/api';
import { GetActorsByMovieId } from '@/types/search';
import { ClientPaginationParams } from '@/types/pagination';
import { CircularProgress } from '@mui/material';
import { MiniActor } from './MiniActor';
import styles from '../../styles.module.css';
import {
  DEFAULT_PAGINATION_LIMIT,
  DEFAULT_PAGINATION_STATE,
} from '@/pages/Movie/shared/const';
import { Pagination } from '../shared/Pagination';

type ActorsProps = {
  movieId: number;
};

function Actors({ movieId }: ActorsProps) {
  const [actorsPagination, setActorsPagination] =
    useState<ClientPaginationParams>(DEFAULT_PAGINATION_STATE);

  const { data: actorsData, isSuccess } = useQuery<GetActorsByMovieId>({
    queryFn: async ({ signal }) => {
      const { data } = await axios.get<GetActorsByMovieId>(`person`, {
        signal,
        params: {
          page: actorsPagination.page,
          limit: DEFAULT_PAGINATION_LIMIT,
          'movies.id': movieId,
        },
      });

      return data;
    },
    queryKey: ['actors', movieId, actorsPagination.page],
  });

  return (
    <>
      {isSuccess ? (
        <article className={styles.article}>
          <h2 className={styles.section_name}>Актёры</h2>
          <div className={styles.list}>
            {actorsData.docs
              ?.filter((actor) => actor.name || actor.enName)
              .map((actor) => <MiniActor key={actor.id} {...actor} />)}
          </div>
          <Pagination
            count={actorsData.pages}
            page={actorsPagination.page}
            onChange={(_, value) =>
              setActorsPagination((prev) => ({ ...prev, page: value }))
            }
          />
        </article>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export { Actors };
